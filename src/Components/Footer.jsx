/**
 * Footer / Contact component
 *
 * Contact CTA with email, GitHub, and LinkedIn links.
 * Update siteProps in App.jsx to change these values.
 */
import React from "react";
import PropTypes from "prop-types";

const Footer = ({ name, email, gitHub, linkedIn }) => {
  return (
    <>
      <section id="contact" className="section contact">
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have an Android app idea or an existing project that needs help?
            I&apos;d love to hear about it. Drop me a message and I&apos;ll
            get back to you within 24 hours.
          </p>

          <div className="contact-links">
            {email && (
              <a href={`mailto:${email}`} className="btn btn-primary">
                ✉ Send an Email
              </a>
            )}
            {linkedIn && (
              <a
                href={`https://www.linkedin.com/in/${linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
            )}
            {gitHub && (
              <a
                href={`https://github.com/${gitHub}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="container">
          <p>
            Built by <span>{name}</span> · Android Developer ·{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  name: "Kaleem",
  email: "",
  gitHub: "",
  linkedIn: "",
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default Footer;

