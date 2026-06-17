<script setup lang="ts">
import { Banknote, CalendarDays, ExternalLink } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'

const projects = [
  {
    icon: Banknote,
    title: 'Lending System',
    description:
      'Full-stack loan application and repayment platform with customer and admin portals. Customers apply for loans with payslip upload, track amortization schedules, and submit payments.',
    tags: ['Nuxt 4', 'Vue 3', 'Laravel 12', 'Pinia', 'Vuetify 4'],
    link: 'https://github.com/ilyzzaEvangelista/lte-lending',
  },
  {
    icon: CalendarDays,
    title: 'Dental Clinic System',
    description:
      'Clinic appointment system with a public booking website and admin dashboard. Patients browse services and request appointments; admins manage schedules and audit logs.',
    tags: ['Nuxt 4', 'Vue 3', 'Laravel 12', 'Sanctum', 'Vuetify'],
    link: 'https://github.com/ilyzzaEvangelista/urmaza-dental',
  },
]
</script>

<template>
  <section id="projects" class="py-28 px-6 section-alt">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="03" title="Featured Projects" />

      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="glass-card overflow-hidden group hover:-translate-y-1"
        >
          <div
            class="h-36 flex items-center justify-center relative overflow-hidden"
            :class="i === 0
              ? 'bg-gradient-to-br from-sky-500/20 to-indigo-600/20'
              : 'bg-gradient-to-br from-violet-500/20 to-fuchsia-600/20'"
          >
            <component
              :is="project.icon"
              :size="44"
              class="text-primary opacity-70 group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 project-card-fade opacity-60" />
          </div>

          <div class="p-6 -mt-4 relative">
            <h3 class="font-display text-lg font-bold text-heading mb-2">{{ project.title }}</h3>
            <p class="text-sm text-body mb-4 leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-medium text-primary link-hover transition-colors"
            >
              <ExternalLink :size="16" />
              View on GitHub
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
