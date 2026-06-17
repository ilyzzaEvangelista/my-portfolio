<script setup lang="ts">
import { Briefcase } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'

interface Highlight {
  text: string
  bold?: string
}

interface Experience {
  title: string
  period: string
  company: string
  highlights: Highlight[]
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer II',
    period: 'July 2024 – Present',
    company: 'Massive Integrated Tech Solutions Inc.',
    highlights: [
      { text: 'Designed frontend development of scalable SPA architecture using Vue.js 3, Nuxt.js 3, TypeScript, and Vuetify 3, defining reusable patterns and improving overall system structure and maintainability.', bold: 'SPA architecture' },
      { text: 'Designed and standardized frontend architecture patterns including composables, state management structure, and reusable component libraries used across multiple modules.', bold: 'frontend architecture patterns' },
      { text: 'Owned integration of complex Laravel RESTful APIs, improving data flow design, response handling, and frontend-backend contract consistency.', bold: 'Laravel RESTful APIs' },
      { text: 'Implemented and optimized real-time event-driven features using Laravel Echo, Pusher, and WebSockets, supporting live system updates at scale.', bold: 'real-time event-driven features' },
      { text: 'Improved application performance through Pinia state architecture redesign, caching strategies, and API optimization, reducing unnecessary data calls and improving rendering efficiency.', bold: 'Pinia state architecture redesign' },
      { text: 'Led technical coordination with backend developers, defining API structure improvements and system-level integration standards.', bold: 'technical coordination with backend developers' },
      { text: 'Reviewed frontend code and provided technical guidance during development cycles to ensure consistency, performance, and maintainability.' },
      { text: 'Contributed to Agile delivery planning, focusing on estimation, architecture discussions, and sprint-level technical direction.', bold: 'Agile delivery planning' },
    ],
  },
  {
    title: 'Software Engineer I',
    period: 'May 2022 – July 2024',
    company: 'Suiterus Technologies Inc.',
    highlights: [
      { text: 'Developed and maintained Vue.js 2 and Nuxt.js 2 SPA features based on assigned tasks and UI/UX specifications.', bold: 'Vue.js 2 and Nuxt.js 2 SPA features' },
      { text: 'Built reusable Vue components and modular UI elements, supporting consistent implementation across multiple application modules.', bold: 'Vue components and modular UI elements' },
      { text: 'Integrated frontend with Laravel REST APIs using Axios, handling authentication, CRUD operations, and data presentation layers.', bold: 'Laravel REST APIs using Axios' },
      { text: 'Developed dashboards and reporting interfaces using Chart.js and ApexCharts for business reporting needs.', bold: 'Chart.js and ApexCharts' },
      { text: 'Implemented UI improvements including responsive layouts and cross-browser compatibility fixes.', bold: 'responsive layouts and cross-browser compatibility fixes' },
      { text: 'Participated in Agile Scrum workflows, including sprint tasks, code reviews, and team collaboration using Git.', bold: 'Agile Scrum workflows' },
    ],
  },
]

function formatHighlight(highlight: Highlight): string {
  if (!highlight.bold) return highlight.text
  return highlight.text.replace(highlight.bold, `<strong>${highlight.bold}</strong>`)
}
</script>

<template>
  <section id="experience" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="03" title="Experience" />

      <div class="relative space-y-0">
        <div class="absolute left-[1.65rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden md:block" />

        <article
          v-for="job in experiences"
          :key="job.company"
          class="relative md:pl-16 pb-12 last:pb-0"
        >
          <div
            class="hidden md:flex absolute left-0 top-6 w-[3.3rem] h-[3.3rem] rounded-xl glass-card items-center justify-center ring-2 ring-primary/20"
          >
            <Briefcase :size="18" class="text-primary" />
          </div>

          <div class="glass-card p-6 md:p-8 hover:-translate-y-0.5">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h3 class="font-display text-xl font-bold text-white">{{ job.title }}</h3>
                <p class="text-primary font-medium mt-1">{{ job.company }}</p>
              </div>
              <span class="tag !text-primary shrink-0 self-start">{{ job.period }}</span>
            </div>

            <ul class="space-y-3">
              <li
                v-for="(highlight, i) in job.highlights"
                :key="i"
                class="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
              >
                <span class="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                <span v-html="formatHighlight(highlight)" />
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(strong) {
  font-weight: 600;
  color: #e2e8f0;
}
</style>
