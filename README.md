# Calculator

This app is a demo of using Astro to render components from different frameworks on the same page using islands.

To see a live demo, navigate to: [calculator.ehrmantraut.me](https://calculator.ehrmantraut.me)

## About the Project

This project is a simple calculator app built as a demo to explore how Astro can render components from different frameworks on the same page using islands architecture. It includes:

- A **React** calculator component
- A **Svelte** calculator component

Both components function identically, but they showcase how Astro seamlessly integrates different frontend frameworks within a single project.

## Features

- 🏝️ **Astro Islands**: Each framework's component is rendered as an island, keeping JavaScript execution minimal.
- ⚛️ **React Component**: A version of the calculator built with React.
- 🧡 **Svelte Component**: A version of the calculator built with Svelte.
- 🌐 **Live Demo**: Hosted at [calculator.ehrmantraut.me](https://calculator.ehrmantraut.me).

## Running Locally

To run this project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/calculator-astro.git
   cd calculator-astro
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

Then visit http://localhost:4321 (or the port shown in your terminal) to see the app in action.

## Why Astro?
Astro allows for rendering UI components using multiple frameworks while optimizing for performance. This project highlights how you can leverage Astro's island architecture to mix frontend frameworks seamlessly.
