import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://ilyzzaevangelista.github.io/my-portfolio/
const base = process.env.GITHUB_PAGES === 'true' ? '/my-portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [vue(), tailwindcss()],
})
