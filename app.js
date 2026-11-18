"use strict";

const scenarios = {
  form: {
    label: "SAMPLE QUOTE REQUEST",
    inquiry: "“Can I get a quote for a garage door repair?”",
    firstStep: "Capture service request",
    result: "Example result: the customer gets a confirmation, and your team gets the repair request."
  },
  assistant: {
    label: "SAMPLE CHAT QUESTION",
    inquiry: "“Do you repair garage doors in Round Rock?”",
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

const form = document.querySelector("#inquiry-form");
const businessInput = document.querySelector("#business");
const interestInput = document.querySelector("#interest");
const formFeedback = document.querySelector("#form-feedback");

document.querySelectorAll("[data-interest]").forEach((link) => link.addEventListener("click", () => {
  interestInput.value = link.dataset.interest;
}));

businessInput.addEventListener("input", () => businessInput.setCustomValidity(""));
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = new FormData(form);
  const business = fields.get("business").trim();
  if (!business) {
    businessInput.setCustomValidity("Enter your business name.");
    businessInput.reportValidity();
    return;
  }

  const website = fields.get("website").trim();
  const interest = fields.get("interest");
  const details = fields.get("details").trim();
  const subject = interest + " for " + business;
  const lines = [
    "Hi Kaleem,",
    "",
    "Interested in: " + interest,
    "",
    "Business: " + business
  ];
  if (website) lines.push("Website: " + website);
  if (details) lines.push("", details);
  lines.push("", "Thanks!");

  const draft = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(lines.join("\r\n"));
  formFeedback.textContent = "If your email app didn’t open, copy the address and send your request there.";
  formFeedback.hidden = false;
  window.location.href = draft;
});
form.hidden = false;
