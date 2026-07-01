<script setup lang="ts">
import { ExternalLink, Lock } from '@lucide/vue'
import lendingClient from '../assets/lending/LENDING-2.png'
import lendingAdmin from '../assets/lending/LENDING-3.png'
import dentalDashboard from '../assets/appointment/DENTAL-2.png'
import dentalBooking from '../assets/appointment/DENTAL-3.png'
import hr1 from '../assets/hr/1.jpg'
import hr2 from '../assets/hr/2.jpg'
import irms1 from '../assets/irms/image.png'
import irms2 from '../assets/irms/image 2.png'
import jobPortal1 from '../assets/job-portal/1.jpg'
import jobPortal2 from '../assets/job-portal/2.jpg'
import SectionHeading from './SectionHeading.vue'

const projects = [
  {
    image: hr1,
    imageHover: hr2,
    imageLabel: 'Dashboard',
    imageHoverLabel: 'HR modules',
    title: 'HR Management System',
    description:
      'Enterprise HRMS supporting 1,000+ active users with 10,000+ monthly HR transactions. Features employee management, payroll, leave tracking, real-time notifications via WebSockets, and role-based access control.',
    tags: ['Vue.js 3', 'Nuxt.js 3', 'TypeScript', 'Vuetify', 'Pinia', 'Laravel', 'WebSockets'],
    link: null,
    badge: 'Enterprise',
  },
  {
    image: irms1,
    imageHover: irms2,
    imageLabel: 'Request list',
    imageHoverLabel: 'Request details',
    title: 'IT Resource Management System',
    description:
      'IT service request platform handling 3,000+ service requests. Enables ticket creation, resource allocation, real-time status tracking, and reporting for IT operations teams.',
    tags: ['Vue.js 3', 'Nuxt.js 3', 'TypeScript', 'Vuetify', 'Pinia', 'Laravel Echo', 'Pusher'],
    link: null,
    badge: 'Enterprise',
  },
  {
    image: jobPortal1,
    imageHover: jobPortal2,
    imageLabel: 'Job listings',
    imageHoverLabel: 'Application flow',
    title: 'Job Portal',
    description:
      'Full-featured recruitment portal supporting job postings, applicant tracking, resume management, and employee onboarding workflows for HR and hiring teams.',
    tags: ['Vue.js 2', 'Nuxt.js 2', 'JavaScript', 'Vuetify', 'Laravel', 'Axios'],
    link: null,
    badge: 'Enterprise',
  },
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
    badge: null,
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
    badge: null,
  },
]
</script>

<template>
  <section id="projects" class="py-28 px-6 section-alt">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="04" title="Featured Projects" />

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
            <!-- Enterprise badge -->
            <span
              v-if="project.badge"
              class="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-[var(--color-primary)]/80 text-white backdrop-blur-sm"
            >
              {{ project.badge }}
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
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-medium text-primary link-hover transition-colors"
            >
              <ExternalLink :size="16" />
              View on GitHub
            </a>
            <span
              v-else
              class="inline-flex items-center gap-2 text-sm font-medium text-muted cursor-default select-none"
            >
              <Lock :size="15" />
              Private / Enterprise
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

