/**
 * Testimonials component
 *
 * Displays client / colleague testimonials in cards.
 * Edit testimonial content in src/data/testimonials.js.
 */
import React from "react";
import testimonials from "../data/testimonials";

/** Returns the first letter of each word (up to 2 words) for an avatar fallback */
const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const TestimonialCard = ({ name, role, company, quote, avatar }) => (
  <div className="testimonial-card">
    <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
    <div className="testimonial-author">
      <div className="testimonial-avatar">
        {avatar ? (
          <img src={avatar} alt={name} width="44" height="44" loading="lazy" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      <div className="testimonial-info">
        <strong>{name}</strong>
        <span>
          {role}
          {company ? ` · ${company}` : ""}
        </span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <p className="section-label">Kind Words</p>
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          A few words from people I&apos;ve had the pleasure of working with.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.name || index} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
