<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'
import lendingClient from '../assets/lending/LENDING-2.png'
import lendingAdmin from '../assets/lending/LENDING-3.png'
import dentalDashboard from '../assets/appointment/DENTAL-2.png'
import dentalBooking from '../assets/appointment/DENTAL-3.png'
import SectionHeading from './SectionHeading.vue'

const projects = [
  {
    image: lendingClient,
    imageHover: lendingAdmin,
    imageLabel: 'Customer portal',
    imageHoverLabel: 'Admin dashboard',
    title: 'Lending System',
    description:
      'Full-stack loan application and repayment platform with customer and admin portals. Customers apply for loans with payslip upload, track amortization schedules, and submit payments.',
    tags: ['Nuxt 4', 'Vue 3', 'Laravel 12', 'Pinia', 'Vuetify 4'],
    link: 'https://github.com/ilyzzaEvangelista/lte-lending',
  },
  {
    image: dentalDashboard,
    imageHover: dentalBooking,
    imageLabel: 'Admin dashboard',
    imageHoverLabel: 'Booking flow',
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
          v-for="project in projects"
          :key="project.title"
          class="glass-card overflow-hidden group hover:-translate-y-1"
        >
          <div class="h-52 relative overflow-hidden bg-[var(--color-surface)]">
            <img
              :src="project.image"
              :alt="`${project.title} — ${project.imageLabel}`"
              class="project-screenshot transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              :src="project.imageHover"
              :alt="`${project.title} — ${project.imageHoverLabel}`"
              class="project-screenshot absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span
              class="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-black/50 text-white/90 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0"
            >
              {{ project.imageLabel }}
            </span>
            <span
              class="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-black/50 text-white/90 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              {{ project.imageHoverLabel }}
            </span>
            <div class="absolute inset-0 project-card-fade opacity-60 pointer-events-none" />
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

