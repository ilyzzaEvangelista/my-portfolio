<script setup lang="ts">
import { Award, ExternalLink } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'

const certificates = [
  {
    issuer: 'Udemy',
    title: 'Certificate of Completion',
    subtitle: 'Vue - The Complete Guide (incl. Router & Composition API)',
    description:
      'Comprehensive Vue.js training covering the Router, Composition API, and modern frontend development. Taught by Maximilian Schwarzmüller.',
    date: 'January 2, 2023',
    link: 'https://www.udemy.com/certificate/UC-939757df-89ee-4bab-a22c-9afa7b68a49a/',
  },
  {
    issuer: 'Udemy',
    title: 'Certificate of Completion',
    subtitle: 'React - The Complete Guide (incl. Next.js, Redux)',
    description:
      'In-depth React training covering Hooks, Redux, Next.js, and modern component patterns for building full-scale web applications. Taught by Maximilian Schwarzmüller.',
    date: 'December 2, 2023',
    link: 'https://www.udemy.com/certificate/UC-65476329-a79a-423d-b224-983fb934ecbd/',
  },
  {
    issuer: 'Udemy',
    title: 'Certificate of Completion',
    subtitle: 'Complete Web & Mobile Designer: UI/UX, Figma, +more',
    description:
      'Comprehensive UI/UX and product design training covering Figma, design systems, mobile design, and web design principles. Taught by Andrei Neagoie and Daniel Schifano.',
    date: 'July 1, 2026',
    link: 'https://www.udemy.com/certificate/UC-be9d03bd-af4f-4b22-a522-30b822e4d085/',
  },
]
</script>

<template>
  <section id="certificates" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="06" title="Certificates" />

      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div
          v-for="cert in certificates"
          :key="cert.link"
          class="glass-card p-7 relative overflow-hidden hover:-translate-y-0.5"
        >
          <div class="absolute top-0 right-0 w-36 h-36 bg-[var(--color-glow-1)] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div class="relative flex items-start gap-4">
            <div class="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
              <Award :size="20" class="text-white" />
            </div>
            <div class="flex-1">
              <p class="text-xs text-muted uppercase tracking-wider mb-1">
                {{ cert.issuer }} · {{ cert.title }}
              </p>
              <h3 class="font-display font-semibold text-heading mb-3 leading-snug">{{ cert.subtitle }}</h3>
              <p v-if="cert.description" class="text-sm text-body leading-relaxed mb-2">{{ cert.description }}</p>
              <p v-if="cert.date" class="text-xs text-muted mb-5">Completed {{ cert.date }}</p>
              <a
                :href="cert.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-medium text-primary link-hover transition-colors"
              >
                View Certificate
                <ExternalLink :size="14" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

