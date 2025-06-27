# URL Shortener React Application

A feature-rich, production-grade frontend for a URL shortening service, built with React, TypeScript, and Material UI. This application is designed for performance and maintainability, featuring a decoupled logging middleware and a fully responsive user interface.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-^18.2.0-blue.svg)](https://reactjs.org/)
[![Material UI Version](https://img.shields.io/badge/@mui/material-^5.15.0-blue.svg)](https://mui.com/)

---

## Key Features

-   **Concurrent URL Shortening:** A dynamic form allows users to shorten up to 5 URLs in a single batch operation.
-   **Advanced Customization:** For each URL, users can specify:
    -   An optional validity period in minutes (defaults to 30 minutes).
    -   An optional custom shortcode for a personalized link.
-   **Robust Client-Side Validation:** The application performs comprehensive validation on all inputs before making API calls to ensure data integrity and provide immediate user feedback.
-   **Centralized & Asynchronous Logging:** All application events (user actions, errors, API calls) are sent to a remote server via a custom-built logging middleware. This process is asynchronous and does not block the UI.
-   **Responsive & Modern UI:** Built exclusively with **Material UI**, the interface provides a seamless experience on both desktop and mobile devices, adhering to modern design principles.
-   **Decoupled Architecture:** The logging middleware is a standalone module, making it reusable across different projects. The frontend application is self-contained and communicates with services via defined API contracts.

---

## Screenshots

### Desktop View
The desktop interface provides a multi-column layout for easy access to all form fields. The navigation bar, URL input rows, and action buttons are clearly organized for a wide viewport.

### Mobile View
On mobile devices, the layout transforms into a single-column view. Form fields and controls stack vertically to ensure readability and ease of use on smaller screens.

---

## Technology Stack

-   **Core Framework:** React (v18+) with TypeScript
-   **UI Component Library:** Material UI (v5+)
-   **Icons:** Material UI Icons
-   **Routing:** React Router DOM (v6+)
-   **Development Environment:** Create React App, Node.js, NPM

---

## Architecture

The project is architecturally divided into two main components:

1.  **Logging Middleware (`/Logging-Middleware`)**: A self-contained JavaScript function responsible for sending log data to a remote evaluation server. It is designed to be framework-agnostic and includes its own validation logic.
2.  **Frontend Application (`/Frontend-Test-Submission`)**: A Single Page Application (SPA) built with React. It handles all user interactions, state management (via React Hooks), and API communications. It imports and utilizes the logging middleware for all logging purposes, completely avoiding the use of `console.log`.

---

## Project Structure

The repository is organized to maintain a clear separation of concerns:
```
.
├── Frontend-Test-Submission/
│   ├── public/
│   ├── src/
│   │   ├── App.tsx             # Main component with routing and layout
│   │   ├── index.tsx           # Application entry point
│   │   └── loggingMiddleware.ts  # Typed logger for the React app
│   ├── .gitignore
│   ├── package.json
│   └── tsconfig.json
│
└── Logging-Middleware/
    └── loggingMiddleware.js      # Standalone, reusable logging function
```

---

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### 1. Prerequisites

-   Node.js (v16.0.0 or later)
-   npm (v7 or later) or Yarn

### 2. Installation

First, clone the repository to your local machine:
```sh
git clone <your-repository-url>
```

Navigate to the main frontend application directory:
```sh
cd Frontend-Test-Submission
```

Install all the required dependencies using npm:
```sh
npm install
```

### 3. Configuration

The application requires a Bearer Token for authenticating with the logging service. This token is hardcoded in the logging middleware file.

-   **File:** `Frontend-Test-Submission/src/loggingMiddleware.ts`
-   **To Update:** Modify the `ACCESS_TOKEN` constant with your new token if it expires or changes.

```typescript
const ACCESS_TOKEN = "your-new-bearer-token-here";
```

### 4. Running the Application

Once the installation is complete, you can start the development server:
```sh
npm start
```
The application will open automatically in your default browser at `http://localhost:3000`.

---

## Build & Deployment

To create a production-ready build of the application, run the following command:
```sh
npm run build
```
This command bundles the app into static files in the `/build` directory. The contents of this directory can then be deployed to any static file hosting service.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 