/**
 * Skills / Tech Stack component
 *
 * Groups Android development skills by category.
 */
import React from "react";

const skillGroups = [
  {
    category: "Languages",
    items: ["Kotlin", "Java"],
  },
  {
    category: "UI / Toolkit",
    items: ["Jetpack Compose", "Material 3", "XML Layouts", "Navigation Component"],
  },
  {
    category: "Architecture",
    items: ["MVVM", "Clean Architecture", "Repository Pattern", "MVI"],
  },
  {
    category: "Data & Storage",
    items: ["Room", "DataStore", "Firebase Firestore", "SharedPreferences"],
  },
  {
    category: "Networking",
    items: ["Retrofit", "OkHttp", "Ktor Client", "REST APIs"],
  },
  {
    category: "DI & Async",
    items: ["Hilt", "Koin", "Coroutines", "Flow", "LiveData"],
  },
  {
    category: "Firebase",
    items: ["Authentication", "Firestore", "FCM", "Cloud Storage", "Analytics"],
  },
  {
    category: "Testing & CI/CD",
    items: ["JUnit 4/5", "Espresso", "MockK", "GitHub Actions", "Play Console"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and frameworks I use to build high-quality Android apps.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li className="skill-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
