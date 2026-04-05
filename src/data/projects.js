/**
 * projects.js
 *
 * Add, remove, or edit your featured Android projects here.
 * Each project will automatically appear as a card in the Projects section.
 *
 * Fields:
 *  - title        (string)  Project name shown as the card heading
 *  - description  (string)  Short summary of what the project does / your role
 *  - tags         (array)   Technology / keyword tags shown on the card
 *  - image        (string)  Path to a screenshot / thumbnail, or "" to hide
 *  - github       (string)  Full GitHub URL, or "" to hide the button
 *  - playStore    (string)  Full Play Store URL, or "" to hide the button
 *  - apk          (string)  Direct APK / GitHub Release URL, or "" to hide
 *  - demo         (string)  Demo video URL (YouTube, etc.), or "" to hide
 */

import weatherNowImg from "../images/projects/weather-now.svg";
import taskFlowImg from "../images/projects/taskflow.svg";
import spendSmartImg from "../images/projects/spendsmart.svg";
import chatLinkImg from "../images/projects/chatlink.svg";

const projects = [
  {
    title: "Weather Now",
    description:
      "A real-time weather app built with Jetpack Compose and Retrofit. Fetches live forecasts from OpenWeatherMap, supports offline caching with Room, and uses MVVM + Clean Architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Room", "MVVM"],
    image: weatherNowImg,
    github: "https://github.com/kaleem04/weather-now",
    playStore: "",
    apk: "",
    demo: "",
  },
  {
    title: "TaskFlow",
    description:
      "A productivity task-manager with Pomodoro timer, WorkManager reminders, and offline-first Room database. Material You theming with dynamic colours on Android 12+.",
    tags: ["Kotlin", "Room", "WorkManager", "Material 3", "Hilt"],
    image: taskFlowImg,
    github: "https://github.com/kaleem04/taskflow",
    playStore: "",
    apk: "",
    demo: "",
  },
  {
    title: "SpendSmart",
    description:
      "Expense tracker with on-device charts (MPAndroidChart), budget alerts via local notifications, and CSV export. Clean Architecture with separate data / domain / UI layers.",
    tags: ["Kotlin", "MPAndroidChart", "Room", "Clean Architecture", "Coroutines"],
    image: spendSmartImg,
    github: "https://github.com/kaleem04/spendsmart",
    playStore: "",
    apk: "",
    demo: "",
  },
  {
    title: "ChatLink",
    description:
      "Real-time group chat app powered by Firebase Firestore and Firebase Cloud Messaging (FCM). Supports image sharing, push notifications, and Google Sign-In.",
    tags: ["Kotlin", "Firebase", "FCM", "Jetpack Compose", "Coroutines"],
    image: chatLinkImg,
    github: "https://github.com/kaleem04/chatlink",
    playStore: "",
    apk: "",
    demo: "",
  },
];

export default projects;
