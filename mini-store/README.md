# MiniStore

A small React storefront for browsing products, viewing product details, and managing a shopping cart.

## Features

- Browse six sample products by category
- Search products by name and sort by price
- View product details and add products to the cart
- Increase or decrease cart quantities, remove items, and view the total
- Switch between light and dark themes
- Persist the cart and theme preference in browser local storage

## Built with

React, React Router, JavaScript, and Vite.

## Run locally

From this directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run Oxlint
```

## Routes

- `/` — Product catalogue
- `/product/:id` — Product details
- `/cart` — Shopping cart

Products are defined in the project and use placeholder images. The cart and theme preference are stored in the browser; no backend or checkout service is included.
