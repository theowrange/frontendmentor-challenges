# Frontend Mentor Solutions

A collection of my solutions to [Frontend Mentor](https://www.frontendmentor.io/) challenges, built and maintained as **a single React application**.

Instead of creating a separate repository and deployment for every challenge, I'm building one site that contains all of my Frontend Mentor solutions. The homepage acts as a directory, and each challenge has its own route.

I'm using this project to practice frontend development, responsive design, maintainable CSS, React, and project organization.

I'm also documenting the approach and the problems I've encountered in case it helps anyone else who wants to maintain multiple Frontend Mentor solutions in a single project.

## Live Site

**[View all solutions](https://theowrange-frontendmentor.netlify.app/)**

The homepage provides an overview of my completed challenges. Each challenge has its own page and URL:

```
/
├── /qr-code
├── /blog-preview
├── /social-links
├── /nft-preview
├── /profile-card
├── /order-summary
└── ...
```

The goal is to keep the entire collection inside **one repository, one React application, and one deployment**.

## Why a Single Project?

A common way to complete Frontend Mentor challenges is to create a separate repository and deployment for every challenge.

That approach works well, but I wanted to see whether I could maintain all of my solutions as a single growing project instead.

My goals were:

- one Git repository
- one React/Vite application
- one Netlify deployment
- one homepage for browsing completed challenges
- one route for each challenge
- shared components where appropriate
- challenge information stored as data instead of hard-coded into the homepage

This also gives me more practice organizing and maintaining a React project as it grows.

## Frontend Mentor Submission Problem

The biggest problem I've encountered with this approach is submitting the individual challenges back to Frontend Mentor.

The collection itself works correctly as a single website. Each challenge can be visited through its own route, for example:

```
https://theowrange-frontendmentor.netlify.app/qr-code
https://theowrange-frontendmentor.netlify.app/blog-preview
```

However, I haven't been able to successfully use this single-site setup for submitting each solution to Frontend Mentor.

I previously experimented with a `VITE_CHALLENGE` environment variable that allowed a particular challenge to be selected during deployment:

```
VITE_CHALLENGE=qr-code
```

The idea was to make each challenge behave like an independent deployment while keeping the source code in the same project.

In practice, this meant creating and managing a different deployment configuration for every challenge. That defeats much of the reason I wanted a single-site architecture in the first place.

Because of this limitation, **I currently have only one solution submitted directly to Frontend Mentor**, even though this repository contains multiple completed challenges.

For now, I've decided to prioritize maintaining the collection as a single site rather than creating separate deployments solely for Frontend Mentor submissions.

If you're trying to organize your Frontend Mentor solutions in the same way, this is an important trade-off to consider. A single application is convenient to maintain, but Frontend Mentor's submission workflow may not fit neatly with that architecture.

If I find a cleaner solution, I'll update this README with the approach.

## Challenges

| Challenge         | Difficulty | Technologies | Live Solution                                                      |
| ----------------- | ---------- | ------------ | ------------------------------------------------------------------ |
| QR code component | Newbie     | React, CSS   | [View](https://theowrange-frontendmentor.netlify.app/qr-code)      |
| Blog preview card | Newbie     | React, CSS   | [View](https://theowrange-frontendmentor.netlify.app/blog-preview) |

More challenges will be added as I complete them.

> **Note:** A challenge appearing here does not necessarily mean it has been submitted to Frontend Mentor. This table tracks the solutions available on this site.

## Built With

- React
- JavaScript
- HTML
- CSS
- CSS Modules
- React Router
- Vite

## Project Structure

The project follows this general structure:

```
src/
├── assets/
│   └── fonts/
│   └── solutions/
│       └── blog-preview/
│       └── nft-preview/
│           ├── preview.jpg
│           └── ...
├── components/
│   └── ...
├── data/
│   └── solutions.js
├── pages/
│   ├── Home/
│   ├── QRCode/
│   ├── BlogPreview/
│   └── ...
├── styles/
│   ├── reset.css
│   └── index.css
├── App.jsx
└── main.jsx
```

Each challenge is implemented as its own page and assigned its own route with React Router.

Reusable UI elements are kept in `components/`, while challenge-specific code remains with the corresponding page.

## Data-Driven Homepage

The homepage is generated from data rather than having every challenge card hard-coded into the JSX.

Challenge information is stored in:

```
src/data/solutions.js
```

A simplified entry looks like this:

```
{
  title: 'QR Code Component',
  difficulty: 'Newbie',
  path: '/qr-code',
  image: qrCodePreview,
}
```

The homepage maps over this data to generate the challenge cards.

As a result, adding another solution to the homepage mainly involves adding its information to `solutions.js` rather than manually creating another card.

## Adding a New Challenge

My general workflow for adding another Frontend Mentor challenge is:

1. Create a page for the challenge.
2. Add the challenge assets.
3. Add a route for the page.
4. Add a preview image.
5. Add the challenge information to `solutions.js`.
6. Test the challenge locally.
7. Push the changes to the repository.
8. Let Netlify redeploy the site.

The new challenge then becomes part of the existing collection instead of becoming a completely separate project.

## Running Locally

Clone the repository:

```
git clone https://github.com/theowrange/frontendmentor-challenges
cd frontendmentor-challenges
```

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Create a production build:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

## Deployment

The project is deployed with [Netlify](https://www.netlify.com/).

The entire collection is deployed as a single site rather than deploying each challenge independently.

Every push to the `main` branch triggers a new production build and deployment.

Because the project uses client-side routing, Netlify also needs to redirect requests to `index.html` so that routes such as `/qr-code` continue to work when opened directly or refreshed:

```
/* /index.html 200
```

## For Anyone Trying the Same Approach

If you also want to keep your Frontend Mentor solutions in a single repository, this project may be useful as a reference.

The basic architecture works well for maintaining and displaying many challenges:

```
One repository
      ↓
One React/Vite application
      ↓
One Netlify deployment
      ↓
Homepage
      ↓
Individual challenge routes
```

The main unresolved issue I've encountered is **Frontend Mentor submission**.

If submitting every challenge directly to Frontend Mentor is important to you, creating separate deployments may still be the simpler option.

If your main goal is to practice frontend development and maintain a portfolio-like collection of your solutions, the single-site approach works well and avoids having to manage many small repositories and deployments.

## About Frontend Mentor

The designs, assets, and challenge requirements used in this repository are provided by [Frontend Mentor](https://www.frontendmentor.io/).

The implementations in this repository are my own and were created for learning and practice.

## License

The source code for my implementations is contained in this repository.

The original Frontend Mentor challenge designs and assets remain the property of Frontend Mentor and their respective creators.
