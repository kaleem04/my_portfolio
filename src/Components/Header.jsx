/**
 * Header / Navbar component
 * Fixed top navigation bar with mobile hamburger toggle.
 */
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="navbar-brand">
          &lt;<span>Kaleem</span> /&gt;
        </a>

        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-nav" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Header;

