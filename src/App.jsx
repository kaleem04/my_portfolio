/**
 * App component
 *
 * Root of the portfolio application.
 *
 * ── How to customise ──────────────────────────────────────────
 * 1. Update siteProps below with your real name, email, and social handles.
 * 2. Add / edit projects in src/data/projects.js — no changes needed here.
 * 3. Add / edit testimonials in src/data/testimonials.js.
 * ──────────────────────────────────────────────────────────────
 */

import React from "react";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

import "./styles.css";

/**
 * Update the values below with your own information.
 * Leave a field as an empty string ("") to hide that link.
 */
const siteProps = {
  name: "Kaleem",
  title: "Android Developer",
  email: "kaleem@example.com",   // ← replace with your real email
  gitHub: "kaleem04",            // ← your GitHub username
  linkedIn: "",                  // ← your LinkedIn profile slug, or ""
  /**
   * Social links shown in the hero section and footer.
   * Set url to "" to hide a network.
   */
  socials: [
    { network: "github",    url: "https://github.com/kaleem04",   label: "GitHub" },
    { network: "linkedin",  url: "",                               label: "LinkedIn" },
    { network: "twitter",   url: "",                               label: "Twitter / X" },
    { network: "instagram", url: "",                               label: "Instagram" },
    { network: "email",     url: "kaleem@example.com",            label: "Send Email" },
  ],
};

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} email={siteProps.email} socials={siteProps.socials} />
      <Services />
      <Portfolio />
      <Skills />
      <About />
      <Testimonials />
      <Footer
        name={siteProps.name}
        email={siteProps.email}
        gitHub={siteProps.gitHub}
        linkedIn={siteProps.linkedIn}
        socials={siteProps.socials}
      />
    </div>
  );
};

export default App;


