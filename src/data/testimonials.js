/**
 * testimonials.js
 *
 * Add, remove, or edit testimonials here.
 * Each entry will appear as a card in the Testimonials section.
 *
 * Fields:
 *  - name    (string)  Full name of the person
 *  - role    (string)  Job title / role
 *  - company (string)  Company or organisation name
 *  - quote   (string)  The testimonial text
 *  - avatar  (string)  URL or imported image path, or "" to show initials fallback
 */

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechStart Inc.",
    quote:
      "Kaleem delivered our Android app ahead of schedule and with zero critical bugs at launch. His attention to architecture and performance really set the product apart. Highly recommended.",
    avatar: "",
  },
  {
    name: "Daniel Müller",
    role: "CTO",
    company: "Finova GmbH",
    quote:
      "We hired Kaleem to migrate our legacy app to Jetpack Compose. The result was a 40% reduction in codebase size and a noticeably smoother UI. He's professional, communicative, and skilled.",
    avatar: "",
  },
  {
    name: "Priya Sharma",
    role: "Lead Engineer",
    company: "Nextwave Labs",
    quote:
      "Working with Kaleem on our Firebase integration was a great experience. He understood our requirements quickly and implemented a clean, scalable solution that our team loves maintaining.",
    avatar: "",
  },
];

export default testimonials;
