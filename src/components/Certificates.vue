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
]
</script>

<template>
  <section id="certificates" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="05" title="Certificates" />

      <div class="max-w-2xl">
        <div
          v-for="cert in certificates"
          :key="cert.subtitle"
          class="glass-card p-8 relative overflow-hidden hover:-translate-y-0.5"
        >
          <div class="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div class="relative flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
              <Award :size="22" class="text-white" />
            </div>
            <div class="flex-1">
              <p class="text-xs text-slate-500 uppercase tracking-wider mb-1">
                {{ cert.issuer }} · {{ cert.title }}
              </p>
              <h3 class="font-display font-semibold text-white mb-3">{{ cert.subtitle }}</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-2">{{ cert.description }}</p>
              <p class="text-xs text-slate-500 mb-5">Completed {{ cert.date }}</p>
              <a
                :href="cert.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-white transition-colors"
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
