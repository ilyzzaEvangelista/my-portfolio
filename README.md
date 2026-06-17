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

Pushes to `main` automatically build and deploy to the `gh-pages` branch.

### One-time setup

1. Open **Settings → Pages** in your repo  
   [github.com/ilyzzaEvangelista/my-portfolio/settings/pages](https://github.com/ilyzzaEvangelista/my-portfolio/settings/pages)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Choose branch **`gh-pages`** and folder **`/ (root)`**
4. Save — your site will be live at  
   [ilyzzaevangelista.github.io/my-portfolio](https://ilyzzaevangelista.github.io/my-portfolio/)

After the first successful workflow run, the `gh-pages` branch will appear automatically.

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
