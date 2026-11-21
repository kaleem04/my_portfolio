"use strict";

const scenarios = {
  form: {
    label: "SAMPLE QUOTE REQUEST",
    inquiry: "“My furnace stopped working and it's freezing. Can someone come today?”",
    firstStep: "Capture service request",
    result: "Example result: the customer gets a confirmation, and your team gets the repair request."
  },
  assistant: {
    label: "SAMPLE CHAT QUESTION",
    inquiry: "“Do you offer same-day furnace repair in my area?”",
    firstStep: "Answer an FAQ and collect contact details",
    result: "Example result: the assistant confirms coverage, and your team gets the customer’s details."
  }
};

const options = Array.from(document.querySelectorAll(".demo-option"));
const steps = Array.from(document.querySelectorAll(".demo-steps li"));
const runButton = document.querySelector("#run-demo");
const runLabel = document.querySelector("#run-demo-label");
const demoFeedback = document.querySelector("#demo-feedback");
let scenario = "form";
let demoTimers = [];

function resetDemo() {
  demoTimers.forEach(clearTimeout);
  demoTimers = [];
  steps.forEach((step) => step.classList.remove("is-complete"));
  runButton.removeAttribute("aria-disabled");
  runLabel.textContent = "Run demo";
  demoFeedback.textContent = "";
}

options.forEach((option) => option.addEventListener("click", () => {
  if (option.dataset.scenario === scenario) return;

  scenario = option.dataset.scenario;
  const example = scenarios[scenario];
  options.forEach((item) => item.setAttribute("aria-pressed", String(item === option)));
  document.querySelector("#inquiry-label").textContent = example.label;
  document.querySelector("#inquiry-text").textContent = example.inquiry;
  document.querySelector("#step-first").textContent = example.firstStep;
  resetDemo();
}));

runButton.addEventListener("click", () => {
  if (runButton.getAttribute("aria-disabled") === "true") return;

  resetDemo();
  runButton.setAttribute("aria-disabled", "true");
  runLabel.textContent = "Running…";
  const stepDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;

  demoTimers = steps.map((step, index) => window.setTimeout(() => {
    step.classList.add("is-complete");
    if (index === steps.length - 1) {
      demoFeedback.textContent = scenarios[scenario].result;
      runLabel.textContent = "Run again";
      runButton.removeAttribute("aria-disabled");
      demoTimers = [];
    }
  }, stepDelay * (index + 1)));
});

const directEmail = document.querySelector("#direct-email");
const emailAddress = directEmail.textContent.trim();
const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copyStatus.textContent = "Email address copied.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(directEmail);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Email address selected. Use your device’s copy command.";
  }
});
copyButton.hidden = false;

const header = document.querySelector(".site-header");
const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const mobile = window.matchMedia("(max-width: 47.999rem)");
let menuOpen = false;
let previousScroll = window.scrollY;

function setMenu(open) {
  menuOpen = open;
  menu.setAttribute("aria-expanded", String(open));
  navigation.hidden = mobile.matches && !open;
}

menu.hidden = false;
setMenu(false);
mobile.addEventListener("change", () => {
  if (mobile.matches && navigation.contains(document.activeElement)) menu.focus();
  setMenu(false);
});
menu.addEventListener("click", () => setMenu(!menuOpen));
header.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !menuOpen) return;
  setMenu(false);
  menu.focus();
});
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !mobile.matches) return;
  const destination = document.querySelector(link.hash);
  destination.setAttribute("tabindex", "-1");
  destination.focus({ preventScroll: true });
  setMenu(false);
});

window.addEventListener("scroll", () => {
  const scroll = Math.max(0, window.scrollY);
  if (scroll === previousScroll) return;
  header.classList.toggle("is-hidden", !menuOpen && scroll > header.offsetHeight && scroll > previousScroll);
  previousScroll = scroll;
}, { passive: true });

function validationMessage(field) {
  if (field.validity.badInput) return "Enter a number.";
  if (field.validity.valueMissing || (field.required && !field.value.trim())) return "Fill in this field.";
  if (field.validity.rangeUnderflow) return "Enter zero or a positive number.";
  if (field.validity.rangeOverflow) return "Enter a share from 0 to 100.";
  if (field.validity.typeMismatch && field.type === "email") return "Enter a valid email address.";
  if (field.type === "url" && field.value && !/^https?:\/\//i.test(field.value)) {
    return "Enter a website address beginning with https:// or http://.";
  }
  return field.validity.valid ? "" : field.validationMessage;
}

function showError(field, message) {
  document.querySelector("#" + field.id + "-error").textContent = message;
  if (message) field.setAttribute("aria-invalid", "true");
  else field.removeAttribute("aria-invalid");
}

function handleForm(form, onValid) {
  const fields = [...form.querySelectorAll("input, select, textarea")];
  form.noValidate = true;
  fields.forEach((field) => {
    field.addEventListener("input", () => {
      if (field.hasAttribute("aria-invalid")) showError(field, validationMessage(field));
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalid;
    fields.forEach((field) => {
      const message = validationMessage(field);
      showError(field, message);
      if (message && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) firstInvalid.focus();
    else onValid(new FormData(form));
  });
  form.hidden = false;
}

const estimate = document.querySelector("#estimate");
const calculator = document.querySelector("#calculator");
const dollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

calculator.addEventListener("input", () => { estimate.textContent = "Select Calculate to update"; });
calculator.addEventListener("submit", () => { estimate.textContent = "Check your numbers"; });
handleForm(calculator, (data) => {
  const monthly = Number(data.get("calls")) * Number(data.get("job-value"))
    * (Number(data.get("share")) / 100) * 4.33;
  estimate.textContent = Number.isFinite(monthly) ? dollars.format(monthly) : "Enter smaller numbers";
});

const contact = document.querySelector("#inquiry-form");
const interest = document.querySelector("#interest");

document.querySelectorAll("[data-interest]").forEach((link) => link.addEventListener("click", () => {
  interest.value = link.dataset.interest;
  showError(interest, "");
}));

handleForm(contact, (data) => {
  const subject = data.get("interest") + " for " + data.get("business").trim();
  const lines = [
    "Hi Kaleem,",
    "",
    "Name: " + data.get("name").trim(),
    "Business: " + data.get("business").trim(),
    "Email: " + data.get("email").trim(),
    "What I need: " + data.get("interest")
  ];
  const website = data.get("website").trim();
  const message = data.get("message").trim();
  if (website) lines.push("Website: " + website);
  if (message) lines.push("", message);
  const draft = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(lines.join("\r\n"));
  document.querySelector("#form-feedback").textContent = "If your email app didn't open, copy my address.";
  window.location.href = draft;
});
