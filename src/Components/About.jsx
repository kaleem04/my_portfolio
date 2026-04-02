/**
 * About component
 *
 * Developer bio, highlights, and what clients can expect.
 */
import React from "react";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">Who I Am</p>
            <h2 className="section-title">About Me</h2>
            <p>
              I&apos;m Kaleem, an Android developer passionate about crafting
              smooth, user-friendly mobile experiences. I work primarily with
              Kotlin and Jetpack Compose, following MVVM / Clean Architecture so
              that the apps I build are easy to maintain and scale.
            </p>
            <p>
              I enjoy the full product lifecycle — from wireframes and technical
              design through to Play Store submission and post-launch support.
              Whether you need a greenfield app, a Firebase-powered backend, or
              a performance overhaul of an existing codebase, I&apos;m here to help.
            </p>
            <p>
              Outside of code I keep up with Google I/O announcements, contribute
              to open-source Android projects, and enjoy experimenting with
              Compose animations.
            </p>

            <div className="about-highlights">
              <div className="highlight-stat">
                <div className="number">3+</div>
                <div className="label">Years Experience</div>
              </div>
              <div className="highlight-stat">
                <div className="number">10+</div>
                <div className="label">Apps Shipped</div>
              </div>
              <div className="highlight-stat">
                <div className="number">100%</div>
                <div className="label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="about-image-block">
            <div>
              <h3>What you can expect</h3>
              <ul>
                <li>Clean, well-documented code</li>
                <li>Regular progress updates</li>
                <li>Responsive communication</li>
                <li>On-time delivery</li>
                <li>Post-launch support</li>
              </ul>
            </div>
            <div>
              <h3>I work best on</h3>
              <ul>
                <li>Greenfield Android apps</li>
                <li>Compose UI rewrites</li>
                <li>Firebase integrations</li>
                <li>API-driven data apps</li>
                <li>Architecture migrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

