# 🚆 Railway MS (Terminal Edition)

A modern web application for simulating a railway ticket sales and booking system. This project combines the atmosphere of retro train station terminals, a neon cyberpunk aesthetic, and thoughtful modern UX/UI.

## ✨ Key Features

* **Interactive Departures Board:** Instant train search by destination or train number with automatic chronological sorting.
* **Seamless Booking Experience:** Continuous vertical scrolling through wagons instead of traditional tabs. Features a realistic seat grid layout simulating a real train car with a center aisle.
* **Smart State Management:** Allows users to select multiple seats across different wagons simultaneously. All selected tickets are dynamically grouped and displayed in a sticky side panel.
* **Data Persistence:** Booked seats are saved between sessions using a custom mock-backend service built on top of `localStorage`.
* **Custom UI:** Fully responsive design written in pure CSS without any third-party UI libraries. Extensively uses CSS Grid/Flexbox, backdrop filters, and neon glow effects (`text-shadow`).

## ✨ Demo


## 🛠 Tech Stack

* **Core:** React 18 + Vite
* **Routing:** React Router DOM v6
* **Notifications:** React Toastify
* **Styling:** Custom CSS (Mobile-first, CSS Variables)

## 🚀 Quick Start

1. Clone the repository:
git clone https://github.com/your-username/web-railway-ms.git

2. Navigate to the project directory and install dependencies:
cd web-railway-ms
npm install

3. Start the local development server:
npm run dev

---