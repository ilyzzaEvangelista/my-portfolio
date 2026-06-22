<script setup lang="ts">
import { Briefcase, MapPin, Calendar } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'

const experiences = [
  {
    title: 'Software Engineer II',
    role: 'Frontend Developer',
    company: 'Massive Integrated Tech Solutions Inc.',
    period: 'July 2024 – Present',
    highlights: [
      'Designed and maintained scalable enterprise SPAs using Vue.js 3, Nuxt.js 3, TypeScript, and Vuetify, improving application maintainability and long-term scalability.',
      'Established frontend architecture standards using composables, Pinia, and reusable component libraries, reducing code duplication and improving development consistency.',
      'Integrated and optimized Laravel REST APIs, improving frontend-backend communication, reliability, and application performance.',
      'Developed real-time features using Laravel Echo, Pusher, and WebSockets, enabling live notifications and workflow updates.',
      'Improved application performance through state management optimization, API request reduction, lazy loading, and caching strategies.',
      'Collaborated with backend engineers on API design, system architecture, and technical planning to streamline feature delivery.',
      'Performed code reviews, mentored developers, and contributed to Agile ceremonies including sprint planning, estimation, and technical design discussions.',
      'Delivered enterprise systems including HRMS, Inventory Management, IRMS, and Job Portal, supporting 1,000+ active users, 10,000+ monthly HR transactions, 5,000+ inventory records, and 3,000+ IT service requests.',
    ],
    tags: ['Vue.js 3', 'Nuxt.js 3', 'TypeScript', 'Vuetify', 'Pinia', 'Laravel', 'WebSockets'],
  },
  {
    title: 'Software Engineer II',
    role: 'Frontend Developer',
    company: 'Suiterus Technologies Inc.',
    period: 'May 2022 – July 2024',
    highlights: [
      'Developed responsive SPA features using Vue.js 2, Nuxt.js 2, JavaScript, and Vuetify for enterprise web applications.',
      'Built reusable UI components and modular frontend architecture, improving development efficiency and code maintainability.',
      'Integrated Laravel REST APIs using Axios for authentication, CRUD operations, and business workflows.',
      'Developed interactive dashboards and reporting tools using ApexCharts and Chart.js to visualize operational metrics.',
      'Improved user experience through responsive design, cross-browser compatibility, and frontend performance optimization.',
      'Contributed to HRMS and Job Portal systems supporting recruitment, employee management, and application tracking workflows.',
      'Participated in Agile development, code reviews, testing, and Git-based collaboration to deliver production-ready features.',
    ],
    tags: ['Vue.js 2', 'Nuxt.js 2', 'JavaScript', 'Vuetify', 'Axios', 'ApexCharts', 'Chart.js'],
  },
]
</script>

<template>
  <section id="experience" class="py-28 px-6 relative overflow-hidden">
    <div
      class="absolute top-0 left-1/4 w-96 h-96 rounded-full hero-glow-1 blur-[120px] pointer-events-none opacity-40"
    />

    <div class="max-w-6xl mx-auto relative">
      <SectionHeading number="02" title="Experience" />

      <div class="relative">
        <!-- Timeline line -->
        <div class="timeline-line" />

        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.company"
            class="exp-item relative pl-10 md:pl-14"
            :style="{ '--delay': `${index * 80}ms` }"
          >
            <!-- Timeline dot -->
            <div class="timeline-dot">
              <Briefcase :size="14" class="text-white" />
            </div>

            <div class="glass-card p-7 md:p-9 relative overflow-hidden hover:-translate-y-0.5">
              <!-- Accent bar -->
              <div class="exp-accent" />
              <!-- Glow -->
              <div class="exp-glow" />

              <div class="relative">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 class="font-display text-xl font-bold text-heading leading-tight">
                      {{ exp.title }}
                    </h3>
                    <p class="text-primary font-medium text-sm mt-0.5">{{ exp.role }}</p>
                  </div>
                  <div class="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span class="exp-period">
                      <Calendar :size="13" />
                      {{ exp.period }}
                    </span>
                    <span class="exp-company">
                      <MapPin :size="13" />
                      {{ exp.company }}
                    </span>
                  </div>
                </div>

                <!-- Highlights -->
                <ul class="space-y-2.5 mb-6">
                  <li
                    v-for="point in exp.highlights"
                    :key="point"
                    class="flex gap-2.5 text-body text-sm leading-relaxed"
                  >
                    <span class="exp-bullet mt-1.5 shrink-0" />
                    {{ point }}
                  </li>
                </ul>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                  <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-line {
  position: absolute;
  left: 1.15rem;
  top: 1.5rem;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--gradient-text-1) 0%,
    var(--gradient-text-2) 50%,
    transparent 100%
  );
  border-radius: 2px;
}

@media (min-width: 768px) {
  .timeline-line {
    left: 1.4rem;
  }
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 1.75rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-text-1), var(--gradient-text-2));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px var(--color-surface), 0 0 0 6px color-mix(in srgb, var(--color-primary) 25%, transparent);
  z-index: 1;
}

.exp-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, var(--gradient-text-1), var(--gradient-text-2), var(--gradient-text-3));
  border-radius: 3px 0 0 3px;
}

.exp-glow {
  position: absolute;
  top: -3rem;
  right: -3rem;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: var(--color-glow-2);
  filter: blur(40px);
  pointer-events: none;
}

.exp-period {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-muted);
  background: var(--color-tag-bg);
  border: 1px solid var(--color-tag-border);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
}

.exp-company {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  color: var(--color-muted);
}

.exp-bullet {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-text-1), var(--gradient-text-2));
  flex-shrink: 0;
}
</style>
