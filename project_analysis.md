# Project Analysis: links-website

This document provides a comprehensive folder-by-folder and file-by-file analysis of the `links-website` project.

## High-Level Overview
The project is a modern landing page for a web application named "Links — One link for everything you share". It is built using the following tech stack:
- **Framework**: Next.js (version 16.3.2)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript

## Folder & File Breakdown

### Root Directory (`/`)
The root directory contains configuration files and standard repository setup.

- **`.gitignore`**: Specifies intentionally untracked files that Git should ignore (e.g., `node_modules`, `.next`).
- **`package.json` & `package-lock.json`**: Defines project dependencies (Next.js, React, Tailwind, Framer Motion) and scripts (`dev`, `build`, `start`, `lint`).
- **`tsconfig.json`**: TypeScript configuration file ensuring type safety across the project.
- **`next.config.ts`**: Configuration file for Next.js.
- **`eslint.config.mjs`**: Configuration for ESLint.
- **`postcss.config.mjs`**: Configuration for PostCSS, primarily used here for integrating Tailwind CSS.
- **`README.md`**: Project documentation file.
- **`AGENTS.md` & `CLAUDE.md`**: Contains agent instructions and customizations.

### `app/` Directory
This is the core directory of the Next.js App Router setup. It contains the main routing logic, global styles, and React components.

- **`layout.tsx`**: The root layout of the application. It configures HTML/Body tags, sets up custom Google Fonts (`Geist`, `Geist_Mono`, `Instrument_Serif`), defines global metadata for SEO, and wraps the application with a `Loader` component.
- **`page.tsx`**: The main landing page. It orchestrates the entire single-page experience by stacking several sections vertically:
  - `Navbar`
  - `Hero`
  - `Countdown`
  - `HowItWorks`
  - `ProductPreview`
  - `Comparison`
  - `Pricing`
  - `Faq`
  - `FinalCta`
  - `Footer`
- **`globals.css`**: Global stylesheet where Tailwind directives and custom CSS variables/utilities are defined.
- **`next-env.d.ts`**: TypeScript declarations for Next.js.

### `app/components/` Directory
Contains all the reusable UI blocks and layout sections used to assemble `page.tsx`.

- **`navbar.tsx`**: The top navigation bar.
- **`hero.tsx`**: The main hero section at the top of the landing page, introducing the product.
- **`countdown.tsx`**: A countdown timer section, likely used for a waitlist, product launch, or a limited-time offer.
- **`how-it-works.tsx`**: Explains the steps or mechanics of using the Links app.
- **`product-preview.tsx`**: Showcases what the product looks like (UI mockups).
- **`comparison.tsx`**: Compares the product with alternatives, highlighting its unique value proposition.
- **`pricing.tsx`**: Displays pricing tiers or plans.
- **`faq.tsx`**: Frequently Asked Questions section.
- **`final-cta.tsx`**: The concluding Call to Action section prompting the user to sign up or join the waitlist.
- **`footer.tsx`**: The footer of the website with copyright and links.
- **`waitlist-form.tsx`**: A form component for capturing emails.
- **`loader.tsx`**: A loading spinner or animation shown during page transitions or initial load.
- **`motion.tsx`**: Likely contains wrappers or utilities for Framer Motion animations.
- **`section-heading.tsx`**: A reusable heading component for the various sections.
- **`thorn-tick.tsx`**: An icon or decorative SVG component used in lists/features.

### `public/` Directory
Serves static assets directly to the browser.

- **Images & Mockups**: 
  - `hero-mockup.jpg`
  - `links-phone-hand.png`
  - `links-phones-showcase.png`
  These are high-quality assets used across the landing page (e.g., in Hero and ProductPreview sections).
- **Icons**:
  - `file.svg`, `globe.svg`, `window.svg` (General UI icons)
  - `next.svg`, `vercel.svg` (Brand icons)
  - `favicon.ico` (Site favicon)
- **`avatars/`**: A subdirectory for storing user avatar images used in testimonials or previews.

## Architecture & Code Quality
- **Component-Driven**: The page is highly modularized. `page.tsx` is clean and acts purely as an orchestrator, delegating all structural content to individual components.
- **Modern Tools**: Utilizing React 19, Tailwind CSS v4, and the Next.js App Router indicates a very up-to-date and performant web application.
- **Aesthetics & Animation**: The presence of `framer-motion` and custom fonts (`Instrument_Serif` for italic/display typography alongside `Geist` for standard sans/mono) points to a design-focused application aiming for premium aesthetics.
