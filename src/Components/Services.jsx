/**
 * Services component
 *
 * Displays productized Android development services.
 */
import React from "react";

const servicesList = [
  {
    icon: "📱",
    title: "Android App Development",
    description:
      "End-to-end native Android apps in Kotlin with Jetpack Compose — from architecture to Play Store release.",
  },
  {
    icon: "🔥",
    title: "Firebase Integration",
    description:
      "Real-time databases, authentication, push notifications (FCM), and cloud storage with Firebase.",
  },
  {
    icon: "🏗️",
    title: "Architecture & Refactoring",
    description:
      "Migrate legacy code to MVVM / Clean Architecture with Hilt DI, improving maintainability and testability.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Profiling, memory leak detection, smooth rendering (60/120 fps), and battery-efficient background work.",
  },
  {
    icon: "🐛",
    title: "Bug Fixing & Support",
    description:
      "Diagnose crashes, fix ANRs, resolve Play Store policy issues, and provide ongoing maintenance.",
  },
  {
    icon: "🚀",
    title: "Play Store Release",
    description:
      "Signing, app bundle generation, store listing optimisation, and release management via Play Console.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="section-label">What I Offer</p>
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Everything you need to launch a polished, production-ready Android app.
        </p>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
