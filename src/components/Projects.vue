<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ExternalLink, Lock, ChevronLeft, ChevronRight } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'

import dental1 from '../assets/appointment/DENTAL-1.png'
import dental2 from '../assets/appointment/DENTAL-2.png'
import dental3 from '../assets/appointment/DENTAL-3.png'
import dental4 from '../assets/appointment/DENTAL-4.png'
import inventory1 from '../assets/inventory/1.png'
import inventory2 from '../assets/inventory/2.png'
import irms1 from '../assets/irms/image.png'
import irms2 from '../assets/irms/image 2.png'
import irms3 from '../assets/irms/image 3.png'
import jobPortal1 from '../assets/job-portal/1.jpg'
import jobPortal2 from '../assets/job-portal/2.jpg'
import jobPortal3 from '../assets/job-portal/3.jpg'
import lending1 from '../assets/lending/LENDING-1.png'
import lending2 from '../assets/lending/LENDING-2.png'
import lending3 from '../assets/lending/LENDING-3.png'

const projects = [
  {
    images: [
      { src: inventory1, label: 'Inventory List' },
      { src: inventory2, label: 'Item Details' },
    ],
    title: 'Inventory Management System',
    description:
      'Enterprise inventory platform tracking 5,000+ records across multiple warehouses. Features stock monitoring, item categorization, Excel/PDF reporting, and real-time stock updates shared across the internal package ecosystem.',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vuetify 3', 'Pinia', 'Laravel 12', 'Laravel Echo', 'Pusher', 'ApexCharts'],
    link: null,
    badge: 'Enterprise',
  },
  {
    images: [
      { src: irms1, label: 'Request List' },
      { src: irms2, label: 'Request Details' },
      { src: irms3, label: 'Dashboard' },
    ],
    title: 'Information Resource Management System',
    description:
      'Enterprise IRMS handling 3,000+ information service requests. Features ticket management, inventory tracking, real-time updates via Laravel Echo + Pusher, Excel/PDF exports and custom internal packages for Inventory and Ticket management.',
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vuetify 3', 'Pinia', 'Laravel 12', 'Laravel Echo', 'Pusher', 'ApexCharts'],
    link: null,
    badge: 'Enterprise',
  },
  {
    images: [
      { src: jobPortal1, label: 'Job Listings' },
      { src: jobPortal2, label: 'Application Flow' },
      { src: jobPortal3, label: 'Dashboard' },
    ],
    title: 'Job Portal',
    description:
      'Full-featured recruitment portal with job postings, applicant tracking, resume management, and onboarding workflows. Features real-time notifications via Laravel Reverb, OAuth2 authentication, payment integration with Xendit, and multi-language support.',
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Vuetify 4', 'Pinia', 'Laravel 12', 'Laravel Reverb', 'Sanctum', 'Xendit'],
    link: null,
    badge: 'Enterprise',
  },
  {
    images: [
      { src: lending1, label: 'Landing Page' },
      { src: lending2, label: 'Customer Portal' },
      { src: lending3, label: 'Admin Dashboard' },
    ],
    title: 'Lending System',
    description:
      'Full-stack loan application and repayment platform with customer and admin portals. Customers apply for loans with payslip upload, track amortization schedules, and submit payments.',
    tags: ['Nuxt 4', 'Vue 3', 'Laravel 12', 'Pinia', 'Vuetify 4'],
    link: 'https://github.com/ilyzzaEvangelista/lte-lending',
    badge: null,
  },
  {
    images: [
      { src: dental1, label: 'Landing Page' },
      { src: dental2, label: 'Admin Dashboard' },
      { src: dental3, label: 'Booking Flow' },
      { src: dental4, label: 'Appointments' },
    ],
    title: 'Dental Clinic System',
    description:
      'Clinic appointment system with a public booking website and admin dashboard. Patients browse services and request appointments; admins manage schedules and audit logs.',
    tags: ['Nuxt 4', 'Vue 3', 'Laravel 12', 'Sanctum', 'Vuetify'],
    link: 'https://github.com/ilyzzaEvangelista/urmaza-dental',
    badge: null,
  },
]

const indices = ref<number[]>(projects.map(() => 0))
const timers = ref<ReturnType<typeof setInterval>[]>([])

function prev(i: number) {
  indices.value[i] = (indices.value[i] - 1 + projects[i].images.length) % projects[i].images.length
  resetTimer(i)
}

function next(i: number) {
  indices.value[i] = (indices.value[i] + 1) % projects[i].images.length
  resetTimer(i)
}

function goTo(i: number, dot: number) {
  indices.value[i] = dot
  resetTimer(i)
}

function startTimer(i: number) {
  timers.value[i] = setInterval(() => {
    indices.value[i] = (indices.value[i] + 1) % projects[i].images.length
  }, 3500)
}

function resetTimer(i: number) {
  clearInterval(timers.value[i])
  startTimer(i)
}

onMounted(() => projects.forEach((_, i) => startTimer(i)))
onUnmounted(() => timers.value.forEach(t => clearInterval(t)))
</script>

<template>
  <section id="projects" class="py-28 px-6 section-alt">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="04" title="Featured Projects" />

      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="glass-card overflow-hidden group hover:-translate-y-1"
        >
          <!-- Carousel -->
          <div class="h-52 relative overflow-hidden bg-[var(--color-surface)]">
            <!-- Slides -->
            <template v-for="(img, j) in project.images" :key="j">
              <img
                :src="img.src"
                :alt="`${project.title} — ${img.label}`"
                class="project-screenshot absolute inset-0 transition-opacity duration-500"
                :class="indices[i] === j ? 'opacity-100' : 'opacity-0'"
              />
            </template>

            <!-- Slide label -->
            <span class="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-black/50 text-white/90 backdrop-blur-sm">
              {{ project.images[indices[i]].label }}
            </span>

            <!-- Enterprise badge -->
            <span
              v-if="project.badge"
              class="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-[var(--color-primary)]/80 text-white backdrop-blur-sm"
            >
              {{ project.badge }}
            </span>

            <!-- Prev / Next arrows (visible on hover) -->
            <button
              v-if="project.images.length > 1"
              class="carousel-arrow left-2 opacity-0 group-hover:opacity-100"
              aria-label="Previous"
              @click.stop="prev(i)"
            >
              <ChevronLeft :size="16" />
            </button>
            <button
              v-if="project.images.length > 1"
              class="carousel-arrow right-2 opacity-0 group-hover:opacity-100"
              aria-label="Next"
              @click.stop="next(i)"
            >
              <ChevronRight :size="16" />
            </button>

            <!-- Dot indicators -->
            <div
              v-if="project.images.length > 1"
              class="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5"
            >
              <button
                v-for="(_, j) in project.images"
                :key="j"
                class="dot"
                :class="indices[i] === j ? 'dot-active' : 'dot-inactive'"
                :aria-label="`Go to slide ${j + 1}`"
                @click.stop="goTo(i, j)"
              />
            </div>

            <div class="absolute inset-0 project-card-fade opacity-60 pointer-events-none" />
          </div>

          <!-- Content -->
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

<style scoped>
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: opacity 0.2s, background 0.2s, transform 0.2s;
}

.carousel-arrow:hover {
  background: rgba(0, 0, 0, 0.78);
  transform: translateY(-50%) scale(1.1);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: width 0.25s, background 0.25s, opacity 0.25s;
  padding: 0;
}

.dot-active {
  width: 18px;
  background: white;
  opacity: 1;
}

.dot-inactive {
  background: rgba(255, 255, 255, 0.5);
  opacity: 0.7;
}

.dot-inactive:hover {
  opacity: 1;
}
</style>
