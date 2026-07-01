<script setup lang="ts">
import { Monitor, Code2, Layers, Radio, BarChart2, Server, GitBranch } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'

const coreStack = [
  { label: 'Vue 3', sub: 'Composition API' },
  { label: 'Nuxt 3 / 4', sub: 'SPA & SSR' },
  { label: 'TypeScript', sub: 'ES2022+' },
  { label: 'Vuetify 3 / 4', sub: 'UI Library' },
  { label: 'Pinia', sub: 'State Management' },
  { label: 'Laravel', sub: 'REST API / Echo' },
]

const skillCategories = [
  {
    icon: Monitor,
    title: 'Frontend Frameworks',
    items: ['Vue 2/3', 'Nuxt 2/3/4', 'Vuetify 2/3/4'],
  },
  {
    icon: Code2,
    title: 'Languages & Markup',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS / SASS'],
  },
  {
    icon: Layers,
    title: 'State Management',
    items: ['Pinia', 'Vuex 3 / 4', 'Composition API'],
  },
  {
    icon: Radio,
    title: 'Real-time & APIs',
    items: ['Laravel Echo', 'Pusher', 'Socket.io', 'WebSockets', 'Axios', 'REST API'],
  },
  {
    icon: BarChart2,
    title: 'Data Visualization',
    items: ['ApexCharts', 'Chart.js'],
  },
  {
    icon: Server,
    title: 'Backend Integration',
    items: ['Laravel 8', 'Laravel 12', 'Sanctum', 'Passport (OAuth2)', 'JWT Auth', 'Spatie Permission', 'Redis'],
  },
  {
    icon: GitBranch,
    title: 'Practices & Workflow',
    items: ['Git', 'Agile / Scrum', 'Code Review', 'Performance Optimization', 'Cross-Browser Compatibility'],
  },
]
</script>

<template>
  <section id="skills" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="03" title="Technical Skills" />

      <!-- Core stack spotlight -->
      <div class="mb-12">
        <p class="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Core Stack</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div
            v-for="skill in coreStack"
            :key="skill.label"
            class="core-card glass-card p-4 text-center hover:-translate-y-0.5 group"
          >
            <div class="core-dot" />
            <p class="font-display font-bold text-heading text-sm leading-tight group-hover:text-primary transition-colors">
              {{ skill.label }}
            </p>
            <p class="text-[0.65rem] text-muted mt-1 leading-tight">{{ skill.sub }}</p>
          </div>
        </div>
      </div>

      <!-- Category grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="glass-card p-5 hover:-translate-y-0.5 relative overflow-hidden group"
        >
          <div class="cat-glow" />

          <div class="relative">
            <div class="flex items-center gap-3 mb-4">
              <div class="cat-icon-wrap">
                <component :is="category.icon" :size="15" class="text-primary" />
              </div>
              <h3 class="font-display font-semibold text-heading text-sm leading-tight">
                {{ category.title }}
              </h3>
            </div>

            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="item in category.items"
                :key="item"
                class="skill-pill"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.core-card {
  position: relative;
  overflow: hidden;
}

.core-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-text-1), var(--gradient-text-3));
  margin: 0 auto 0.6rem;
}

.cat-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  background: var(--color-tag-bg);
  border: 1px solid var(--color-tag-border);
  flex-shrink: 0;
  transition: background 0.25s, transform 0.25s;
}

.glass-card:hover .cat-icon-wrap {
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
  transform: scale(1.05);
}

.cat-glow {
  position: absolute;
  top: -2.5rem;
  right: -2.5rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: var(--color-glow-1);
  filter: blur(30px);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.glass-card:hover .cat-glow {
  opacity: 1;
}

.skill-pill {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--color-tag-text);
  background: var(--color-tag-bg);
  border: 1px solid var(--color-tag-border);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  white-space: nowrap;
}

.skill-pill:hover {
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
  color: var(--color-primary);
  border-color: color-mix(in srgb, var(--color-primary) 35%, transparent);
}
</style>
