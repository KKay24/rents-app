# Rent App

A comprehensive rental marketplace for properties and vehicles, featuring a responsive React web dashboard, a NestJS backend, and an Expo-based mobile application.

The repository now also includes a separate Expo mobile app in `mobile/` for Android and iOS.

## Overview

- Single-page React app with multiple routes handled by `react-router-dom`
- Responsive layout with a sticky header and mobile navigation toggle
- Home page sections for hero search, featured property types, listings, awards, locations, agents, and pricing
- Shared content stored in one place through `src/components/data/Data.js`
- Plain CSS files organized by component folder
- Font Awesome icons loaded from a CDN in `public/index.html`

## Tech Stack

- React 18
- React Router DOM 5.3
- Create React App (`react-scripts` 5)
- Expo (mobile app under `mobile/`)
- Plain CSS
- Static image assets from `public/` and `src/components/images/`

## Apps In This Repo

- Web app: the original Create React App project in the repository root
- Mobile app: the Expo React Native project in `mobile/`

## Documentation

- Project overview: `docs/PROJECT_DOCUMENTATION.md`
- Proposed backend endpoints: `docs/API_ENDPOINTS.md`
- Production readiness checklist: `docs/PRODUCTION_TODO.md`

## Routes

The application renders the following routes from `src/components/pages/Pages.jsx`:

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/blog` - Blog page
- `/pricing` - Pricing page
- `/contact` - Contact page

## Project Structure

```text
src/
  App.js
  App.css
  index.js
  components/
    about/
    blog/
    common/
      footer/
      header/
    contact/
    data/
      Data.js
    home/
      awards/
      featured/
      hero/
      location/
      price/
      recent/
      team/
    images/
    pages/
    pricing/
    services/

public/
  index.html
  favicon.png
  immio.jpg
  images/
```

## How The App Is Organized

### Layout

- `src/components/common/header/Header.jsx` renders the logo, navigation, sign-in button, and mobile menu toggle.
- `src/components/common/footer/Footer.jsx` renders the CTA strip, newsletter box, footer link columns, and legal text.
- `src/components/common/Back.jsx` is the shared page hero/banner used on inner pages.

### Home Page Sections

The home page in `src/components/home/Home.jsx` composes these sections:

- `Hero` - large banner with a search-style form
- `Featured` - property type cards
- `Recent` - recent property listing cards
- `Awards` - achievement counters
- `Location` - city/location highlight grid
- `Team` - featured agent cards
- `Price` - pricing/package cards

### Shared Data

`src/components/data/Data.js` is the main content source for:

- navigation links
- featured property types
- recent property cards
- awards
- locations
- team members
- pricing plans
- footer columns

This makes the UI mostly data-driven, so most content updates can be done without changing component markup.

## Getting Started

### Prerequisites

- Node.js
- npm

### Install Dependencies

```bash
npm install
```

### Start The Development Server

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Mobile App

The Expo-based Android/iOS app lives in `mobile/`.

```bash
cd mobile
npm install
npm start
```

Additional mobile scripts:

- `npm run android`
- `npm run ios`

See `mobile/README.md` for the mobile-specific notes.

## Available Scripts

- `npm start` - runs the app in development mode
- `npm run build` - creates a production build in `build/`
- `npm test` - starts the test runner
- `npm run eject` - ejects the Create React App configuration

## Assets And Styling Notes

- Global styles and reusable layout helpers live in `src/App.css`.
- Section-specific styles live beside their components, such as `src/components/home/hero/hero.css` and `src/components/home/team/team.css`.
- The hero banner uses `public/images/banner.png` as a CSS background image.
- Inner-page hero images are imported from `src/components/images/`.
- Font Awesome is loaded from a CDN in `public/index.html`, so icon rendering depends on that external stylesheet being available.

## Current Limitations

- The search form, contact form, newsletter field, sign-in button, and agent action buttons are presentational only and do not submit data anywhere.
- There is no backend, API integration, authentication flow, or persisted state.
- The app has no test files under `src/` right now.
- Some installed packages are not currently used in the source code, including `react-slick`, `slick-carousel`, `web-vitals`, and the Testing Library packages.
- The repository contains a stray macOS `.textClipping` file under `src/components/pages/` that is not part of the app runtime.

## Build Status

`npm run build` completed successfully on April 26, 2026 and generated a production bundle in `build/`.

## Deployment

This is a static frontend application, so the production `build/` output can be deployed to platforms like Netlify, Vercel, GitHub Pages, or any static file host. The current build assumes the app is served from `/`.
