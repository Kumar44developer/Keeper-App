<div align="center">

# Keeper App

### A simple, elegant note keeper built with React

Create notes and delete them with a clean, Google Keep inspired interface. Keeper App is a component-driven React application that demonstrates state management, props, and dynamic rendering in a compact, real-world example.

![React](https://img.shields.io/badge/React-16.8-61DAFB?logo=react&logoColor=white)
![Create React App](https://img.shields.io/badge/CRA-react--scripts-09D3AC?logo=createreactapp&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-yellow)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Component Overview](#component-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

Keeper App is a single-page React application for jotting down quick notes. Each note has a title and body, and can be added through a compact form or removed with a single click. The project is built with Create React App and organized into small, focused functional components that use React Hooks for state.

## Features

- Add notes with a title and content
- Delete individual notes instantly
- Dynamic rendering of the note list as it changes
- Clean, card-based layout inspired by Google Keep
- Built with functional components and React Hooks
- Fast local development with Create React App

## Tech Stack

| Technology | Role |
| --- | --- |
| React 16.8 | Component UI and Hooks |
| React DOM | Rendering to the browser |
| Create React App | Build tooling and dev server |
| CSS3 | Styling and layout |
| Google Fonts | McLaren and Montserrat typography |

## Architecture

```
index.js
  └─ App
       ├─ Header
       ├─ CreateArea   Adds a new note through onAdd
       ├─ Note (one per item)   Removes itself through onDelete
       └─ Footer
```

State lives in the `App` component. New notes flow up from `CreateArea` through an `onAdd` callback, and deletions flow up from each `Note` through an `onDelete` callback that filters the list by index.

## Component Overview

| Component | Responsibility |
| --- | --- |
| App | Holds the notes state and add and delete logic |
| Header | Displays the app title bar |
| CreateArea | Controlled form for composing a new note |
| Note | Renders a single note with a delete button |
| Footer | Displays the current year |

## Project Structure

```
project41/
├── public/
│   └── index.html
├── src/
│   ├── component/
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── CreateArea.jsx
│   │   ├── Note.jsx
│   │   └── Footer.jsx
│   ├── index.js
│   └── style.css
├── package.json
└── README.md
```

## Getting Started

Requires Node.js and npm.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The app runs at `http://localhost:3000`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode |
| `npm run build` | Create an optimized production build |
| `npm test` | Run the test runner |

The start, build, and test scripts set the OpenSSL legacy provider through cross-env so the project builds reliably on modern Node versions.

## How It Works

The `App` component keeps an array of notes in state. Typing in the `CreateArea` form updates a controlled note object, and submitting calls `onAdd`, which appends the note to the array. Each note in the array is rendered as a `Note` component with its index as the identifier. Clicking a note's delete button calls `onDelete` with that index, and `App` filters it out of the array, re-rendering the list.

## Roadmap

- Persist notes with local storage
- Edit existing notes
- Expandable create area with animation
- Color labels and pinning
- Search and filtering

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request with a clear description.

## License

This project is released under the MIT License.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
