# DevJournal

A modern, responsive developer blog built with React, TypeScript, React Router, and Tailwind CSS. DevJournal provides a clean reading experience for exploring articles about frontend development and modern web technologies.

## Features

- **Responsive design** — adapts to mobile, tablet, and desktop screens.
- **Home page** — introduces the blog and highlights articles.
- **Posts index** — browse all published posts and filter articles by topic.
- **Post details** — read individual articles using their unique URL slugs.
- **Client-side navigation** — navigate between pages with React Router.
- **Scroll restoration** — returns the page to the top when navigating.
- **Custom not-found page** — displays a dedicated page for unknown routes.
- **Vercel routing configuration** — supports direct navigation to nested routes after deployment.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- pnpm
- Vercel

## Pages and Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/posts` | Browse all posts and filter by topic |
| `/posts/:slug` | Read an individual post |
| `/about` | About DevJournal |
| `/blog` | Redirects to `/posts` |
| `*` | Not-found page |

## Getting Started

### Prerequisites

Make sure you have Node.js and pnpm installed.

### 1. Clone the repository

```bash
git clone https://github.com/ibnuwaba/blog.git
cd blog
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Open the local URL displayed in your terminal to view the application.

## Available Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Type-check and build the production application |
| `pnpm lint` | Run ESLint to check code quality |
| `pnpm preview` | Preview the production build locally |

## Project Structure

```text
blog/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── MainNav.tsx
│   │   └── ScrollToTop.tsx
│   ├── data/
│   │   ├── posts.json
│   │   └── posts.ts
│   ├── routes/
│   │   ├── AboutPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFound.tsx
│   │   ├── PostDetail.tsx
│   │   ├── PostsIndex.tsx
│   │   └── SiteLayout.tsx
│   ├── index.css
│   └── main.tsx
├── vercel.json
├── package.json
└── README.md
```

## Deployment

DevJournal is configured for deployment on Vercel.

- **Framework preset:** Vite
- **Build command:** `pnpm build`
- **Output directory:** `dist`
- **Routing:** `vercel.json` rewrites requests to the application entry point so React Router can handle client-side routes.

To deploy, import the GitHub repository into Vercel and deploy the project. Subsequent pushes to the connected branch can trigger new deployments.

## Learning Objectives

This project demonstrates practical use of React components, TypeScript types, client-side routing, reusable layouts, URL parameters, responsive styling, and production build and deployment workflows.

## Repository

[GitHub — ibnuwaba/blog](https://github.com/ibnuwaba/blog)

---

Built as part of the Shi’era Developers AI-Powered Full Stack Development learning journey.