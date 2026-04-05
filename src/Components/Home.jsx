/**
 * Home / Hero component
 *
 * Full-screen hero with value proposition, social links, and a hero image.
 */
import React from "react";
import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks";
import heroImage from "../images/woman-with-tablet.jpg";

const Home = ({ name, title, email, socials }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🤖</span> Available for new projects
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m <span className="highlight">{name}</span>
              <br />
              {title}
            </h1>

            <p className="hero-description">
              I build fast, modern Android apps for startups and businesses — using
              Kotlin, Jetpack Compose, and Firebase. From idea to Play Store, I
              handle the full lifecycle.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href={`mailto:${email}`} className="btn btn-outline">
                Get in Touch
              </a>
            </div>

            <SocialLinks socials={socials} />

            <div className="hero-scroll">
              <div className="scroll-dot" />
              Scroll to explore
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src={heroImage}
              alt="Developer working on a tablet"
              className="hero-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Kaleem",
  title: "Android Developer",
  email: "",
  socials: [],
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string,
  socials: PropTypes.array,
};

export default Home;

