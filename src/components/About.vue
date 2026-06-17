<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'

const stats = [
  { value: '4+', label: 'Years in industry' },
  { value: 'Vue 3', label: 'Primary stack' },
  { value: 'SPA', label: 'Architecture focus' },
]
</script>

<template>
  <section id="about" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="01" title="About Me" />

      <div class="grid lg:grid-cols-5 gap-10 items-start">
        <div class="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed text-[0.95rem]">
          <p>
            I'm a Software Engineer with <span class="text-white font-medium">4 years of experience</span>
            building modern web applications. Currently at
            <span class="text-primary">Massive Integrated Tech Solutions Inc.</span>, I design and develop
            scalable frontend systems using Vue.js 3, Nuxt.js 3, TypeScript, and Vuetify 3.
          </p>
          <p>
            I specialize in SPA architecture, reusable component libraries, and seamless Laravel API
            integration — including real-time features with Laravel Echo, Pusher, and WebSockets.
          </p>
          <p>
            From dashboards with Chart.js and ApexCharts to performance optimization with Pinia and
            caching strategies, I focus on clean architecture, maintainable code, and delivering
            reliable user experiences in Agile teams.
          </p>
        </div>

        <div class="lg:col-span-2 grid gap-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="glass-card p-6 text-center hover:-translate-y-0.5"
          >
            <div class="font-display text-3xl font-bold gradient-text">{{ stat.value }}</div>
            <div class="text-xs text-slate-500 mt-2 uppercase tracking-wider">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
