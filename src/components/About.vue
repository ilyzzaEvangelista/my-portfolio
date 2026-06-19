<script setup lang="ts">
import { Calendar, Layers, Building2, Sparkles } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'

const stats = [
  { value: '4', label: 'Years in industry', icon: Calendar },
  { value: 'Vue 3', label: 'Primary stack', icon: Layers },
  { value: 'Enterprise', label: 'App focus', icon: Building2 },
]

const domains = [
  'HRMS',
  'Inventory Management',
  'IRMS',
  'Job Portals',
]
</script>

<template>
  <section id="about" class="py-28 px-6 relative overflow-hidden">
    <div
      class="absolute top-1/2 right-0 w-64 h-64 rounded-full hero-glow-2 blur-[100px] pointer-events-none opacity-60"
    />

    <div class="max-w-6xl mx-auto relative">
      <SectionHeading number="01" title="About Me" />

      <div class="grid lg:grid-cols-12 gap-8 items-stretch">
        <!-- Bio card -->
        <div class="lg:col-span-7">
          <div class="about-card glass-card h-full p-8 md:p-10 relative overflow-hidden">
            <div class="about-accent" />
            <div class="about-glow" />

            <div class="relative space-y-5 text-body leading-relaxed text-[0.95rem]">
              <div class="inline-flex items-center gap-2 text-primary text-sm font-medium mb-1">
                <Sparkles :size="16" />
                Professional Summary
              </div>

              <p>
                I'm a <span class="text-heading font-semibold">Frontend Developer</span> with
                <span class="text-heading font-semibold">4 years of experience</span> building enterprise web
                applications using
                <span class="text-primary font-medium">Vue.js, Nuxt.js, Vuetify</span>, and
                <span class="text-primary font-medium">Laravel APIs</span>.
              </p>
              <p>
                Experienced in developing HRMS, Inventory Management, Information Resource Management
                System, and Job Portal systems — with a focus on performance, scalability, and user
                experience.
              </p>
              <p>
                Strong background in reusable component development, state management using
                <span class="text-primary font-medium">Pinia/Vuex</span>, and API integration.
              </p>
            </div>

            <div class="relative mt-8 pt-6 border-t border-[var(--color-border)]">
              <p class="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">
                What I build
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="domain in domains" :key="domain" class="domain-tag">
                  {{ domain }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="lg:col-span-5 flex flex-col gap-4">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="stat-card glass-card p-5 flex items-center gap-5 hover:-translate-y-0.5 group"
            :style="{ transitionDelay: `${i * 50}ms` }"
          >
            <div class="stat-icon">
              <component :is="stat.icon" :size="22" class="text-primary" />
            </div>
            <div>
              <div class="font-display text-2xl font-bold gradient-text leading-none">
                {{ stat.value }}
              </div>
              <div class="text-xs text-muted mt-1.5 uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
            <div class="stat-bar" :class="`stat-bar-${i}`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, var(--gradient-text-1), var(--gradient-text-2), var(--gradient-text-3));
  border-radius: 3px 0 0 3px;
}

.about-glow {
  position: absolute;
  top: -4rem;
  right: -4rem;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: var(--color-glow-1);
  filter: blur(40px);
  pointer-events: none;
}

.domain-tag {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-primary);
  background: var(--color-tag-bg);
  border: 1px solid var(--color-tag-border);
  transition: transform 0.2s, box-shadow 0.2s;
}

.domain-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 15%, transparent);
}

.stat-card {
  position: relative;
  overflow: hidden;
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.875rem;
  background: var(--color-tag-bg);
  border: 1px solid var(--color-tag-border);
  flex-shrink: 0;
  transition: transform 0.25s, background 0.25s;
}

.stat-card:hover .stat-icon {
  transform: scale(1.05);
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
}

.stat-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  border-radius: 0 2px 0 0;
  background: linear-gradient(90deg, var(--gradient-text-1), var(--gradient-text-2));
  transition: width 0.4s ease;
  width: 0;
}

.stat-card:hover .stat-bar {
  width: 100%;
}

.stat-bar-0 { opacity: 0.7; }
.stat-bar-1 { opacity: 0.85; }
.stat-bar-2 { opacity: 1; }
</style>
