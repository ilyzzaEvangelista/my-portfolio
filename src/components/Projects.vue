<script setup lang="ts">
import { ExternalLink, Lock } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'
import { projects } from '../data/projects'
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
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <h3 class="font-display text-lg font-bold text-heading">{{ project.title }}</h3>
              <span
                v-if="project.badge"
                class="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-[var(--color-primary)]/15 text-primary"
              >
                {{ project.badge }}
              </span>
            </div>

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

      <div class="mt-10 text-center">
        <a href="#project-gallery" class="btn-outline">
          View Full Screenshot Gallery
        </a>
      </div>
    </div>
  </section>
</template>
