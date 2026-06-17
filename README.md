# Ilyzza Evangelista — Portfolio

A modern single-page portfolio built with **Vue 3**, **Vite**, **Tailwind CSS v4**, and **Lucide icons**.

**Live site:** [ilyzzaevangelista.github.io/my-portfolio](https://ilyzzaevangelista.github.io/my-portfolio/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

Pushes to `main` automatically deploy via GitHub Actions.

To build locally the same way GitHub Pages does:

```bash
GITHUB_PAGES=true npm run build
```

## Project Structure

```
src/
├── App.vue
├── components/
│   ├── Navbar.vue
│   ├── Hero.vue
│   ├── About.vue
│   ├── Skills.vue
│   ├── Experience.vue
│   ├── Projects.vue
│   ├── Certificates.vue
│   ├── Contact.vue
│   ├── Footer.vue
│   ├── SectionHeading.vue
│   └── SocialIcon.vue
└── style.css
```

## Customize

Update your name, bio, projects, contact info, and social links in the component files under `src/components/`.
