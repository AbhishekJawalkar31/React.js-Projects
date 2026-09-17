# React Router Demo

This project is a small React + Vite application that demonstrates client-side routing using `react-router-dom`. It includes a shared layout, multiple pages, and a dynamic user route, making it a practical example of how route-based navigation works in a React app.

## Features

- Client-side routing with React Router
- Shared layout using `Header` and `Footer`
- Navigation with `Link` and `NavLink`
- Dynamic route parameter support like `/user/:userid`
- Example GitHub profile fetch using the GitHub API
- Tailwind CSS-based styling

## Tech Stack

- React
- React Router DOM
- Vite
- Tailwind CSS

## Project Structure

```bash
reactRouter/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── About/
│       ├── Contact/
│       ├── Footer/
│       ├── Github/
│       ├── Header/
│       ├── Home/
│       └── User/
└── README.md
```

## Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/user/:userid` - User details page
- `/github` - GitHub profile information page

## Getting Started

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

- `npm run dev` - starts the Vite development server
- `npm run build` - builds the project for production
- `npm run preview` - previews the production build locally
- `npm run lint` - runs the linter

## Notes

The app uses `createBrowserRouter` and `createRoutesFromElements` in `src/main.jsx` to define the route configuration. The `Layout` component wraps all pages so the header and footer remain consistent across navigation.
