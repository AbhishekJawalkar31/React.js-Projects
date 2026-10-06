# Personal Task Manager

A simple personal productivity app built with React and Vite for managing daily tasks in the browser. It allows users to add tasks, mark them as complete, filter by status, search by text, delete selected items, and clear all tasks. Tasks are saved in the browser's localStorage so they persist across refreshes.

## Features

- Add new tasks with a text input
- Mark tasks as complete or incomplete
- Delete individual tasks
- Filter tasks by:
  - All
  - Active
  - Completed
- Search tasks by keyword
- Clear all tasks from the list
- Responsive interface for desktop and mobile devices
- Persistent task storage using localStorage

## Tech Stack

- React 19
- Vite 8
- JavaScript
- CSS for styling
- Browser localStorage for persistence

## Project Structure

```text
personalTaskManager/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Settings.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── dist/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## App Behavior

The main application state is managed in `src/App.jsx`:

- `tasks` holds the current task list
- `filter` controls whether tasks are shown as all, active, or completed
- `search` filters tasks by text match
- `useEffect` stores the task list in localStorage whenever it changes

Each task is represented as an object with:

- `id`
- `text`
- `completed`

## Available Scripts

From the project directory, run:

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Running the Project

1. Open a terminal in `personalTaskManager`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
4. Open the local URL displayed in the terminal (usually `http://localhost:5173`)

## Notes

This project is a frontend-only task manager; it does not include a backend, authentication, or database. It is ideal for local personal task tracking and learning React state management patterns.
