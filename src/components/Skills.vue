<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'

const skillCategories = [
  {
    title: 'Frontend',
    items: [
      'Vue 2, Vue 3', 'Nuxt 2, Nuxt 3', 'Vuetify 1/2/3', 'JavaScript (ES6+)',
      'HTML5, CSS3, SCSS', 'Composition API', 'Responsive Web Design',
      'Single Page Applications (SPA)', 'Server-Side Rendering (SSR)', 'TypeScript',
    ],
  },
  {
    title: 'Backend Integration',
    items: ['REST API', 'Laravel', 'Laravel Echo', 'Pusher', 'Socket.IO', 'Axios / Fetch API'],
  },
  {
    title: 'Development Practices',
    items: ['Git Version Control', 'Agile/Scrum', 'Code Review', 'Performance Optimization', 'Cross-Browser Compatibility'],
  },
  {
    title: 'State Management',
    items: ['Pinia', 'Vuex'],
  },
  {
    title: 'Visualization',
    items: ['ApexCharts & Chart.js'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Vite', 'Webpack', 'CKEditor', 'TipTap', 'ExcelJS', 'jsPDF'],
  },
]
</script>

<template>
  <section id="skills" class="py-28 px-6 section-alt">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="02" title="Technical Skills" />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="glass-card p-6 hover:-translate-y-0.5"
        >
          <h3 class="font-display font-semibold text-white mb-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary" />
            {{ category.title }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in category.items"
              :key="item"
              class="tag"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
