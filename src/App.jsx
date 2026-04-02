/**
 * App component
 *
 * Root of the portfolio application.
 *
 * ── How to customise ──────────────────────────────────────────
 * 1. Update siteProps below with your real name, email, and social handles.
 * 2. Add / edit projects in src/data/projects.js — no changes needed here.
 * ──────────────────────────────────────────────────────────────
 */

import React from "react";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import About from "./Components/About";
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
};

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} email={siteProps.email} />
      <Services />
      <Portfolio />
      <Skills />
      <About />
      <Footer
        name={siteProps.name}
        email={siteProps.email}
        gitHub={siteProps.gitHub}
        linkedIn={siteProps.linkedIn}
      />
    </div>
  );
};

export default App;

