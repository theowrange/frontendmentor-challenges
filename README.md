# Frontend Mentor Challenges

A collection of my solutions to [Frontend Mentor](https://www.frontendmentor.io/) challenges.

I'm using these challenges to practice frontend development, with a focus on building responsive interfaces, writing maintainable code, and gradually learning React.

## Live Site

**[View my solutions](https://theowrange-frontendmentor.netlify.app/)**

The live site provides a visual overview of my completed challenges. Each challenge can be opened to view the complete implementation.

## Challenges

| Challenge         | Difficulty | Technologies | Live Demo                                                          |
| ----------------- | ---------- | ------------ | ------------------------------------------------------------------ |
| QR code component | Newbie     | React, CSS   | [View](https://theowrange-frontendmentor.netlify.app/qr-code)      |
| Blog preview card | Newbie     | React, CSS   | [View](https://theowrange-frontendmentor.netlify.app/blog-preview) |

More challenges will be added as I complete them.

## Built With

- React
- JavaScript
- HTML
- CSS
- CSS Modules
- React Router
- Vite

## Project Structure

```text
src/
├── assets/
│   └── preview/
├── components/
│   └── ...
├── data/
│   └── solutions.js
├── pages/
│   ├── Home/
│   └── ...
├── styles/
│   ├── reset.css
│   └── index.css
├── App.jsx
└── main.jsx
```

The homepage uses data from `solutions.js` to generate the collection of challenge cards dynamically.

Each challenge has its own page, while reusable UI elements are kept in the `components` directory.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/theowrange/frontendmentor-challenges
cd frontendmentor-challenges
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The site is deployed with Netlify.

Every push to the main branch triggers a new production build and deployment.

## About Frontend Mentor

The designs and challenge requirements are provided by [Frontend Mentor](https://www.frontendmentor.io/).

These solutions are my own implementations and are intended for learning and practice.

## License

This repository contains my own source code for the solutions.

The original challenge designs and assets remain the property of Frontend Mentor and their respective creators.
