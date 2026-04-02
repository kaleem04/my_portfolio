/**
 * Portfolio / Projects component
 *
 * Renders data-driven project cards from src/data/projects.js.
 * To add or edit projects, update that file — no code changes needed here.
 */
import React from "react";
import projects from "../data/projects";

const ProjectCard = ({ title, description, tags, github, playStore, apk, demo }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>

    <div className="project-tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>

    <div className="project-links">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          GitHub
        </a>
      )}
      {playStore && (
        <a href={playStore} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
          Play Store
        </a>
      )}
      {apk && (
        <a href={apk} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          Download APK
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          Demo ▶
        </a>
      )}
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of Android apps I&apos;ve designed, architected, and shipped.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

