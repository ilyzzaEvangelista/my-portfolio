<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, X, ZoomIn } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'
import { projects } from '../data/projects'

const activeProject = ref(0)
const activeImage = ref(0)
const lightboxOpen = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

const currentProject = computed(() => projects[activeProject.value])
const currentImage = computed(() => currentProject.value.images[activeImage.value])

function selectProject(index: number) {
  activeProject.value = index
  activeImage.value = 0
  resetTimer()
}

function selectImage(index: number) {
  activeImage.value = index
  resetTimer()
}

function prev() {
  const len = currentProject.value.images.length
  activeImage.value = (activeImage.value - 1 + len) % len
  resetTimer()
}

function next() {
  const len = currentProject.value.images.length
  activeImage.value = (activeImage.value + 1) % len
  resetTimer()
}

function openLightbox() {
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function startTimer() {
  timer = setInterval(() => {
    const len = currentProject.value.images.length
    if (len > 1) activeImage.value = (activeImage.value + 1) % len
  }, 4000)
}

function resetTimer() {
  if (timer) clearInterval(timer)
  startTimer()
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  startTimer()
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <section id="project-gallery" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="05" title="Project Gallery" />

      <p class="text-body text-sm md:text-base max-w-2xl -mt-8 mb-10 leading-relaxed">
        Browse full-size screenshots from each project — switch between apps and explore every screen. All of the data is fake.
      </p>

      <!-- Project tabs -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button
          v-for="(project, i) in projects"
          :key="project.title"
          class="gallery-tab"
          :class="activeProject === i ? 'gallery-tab-active' : 'gallery-tab-inactive'"
          @click="selectProject(i)"
        >
          {{ project.title }}
        </button>
      </div>

      <!-- Main viewer -->
      <div class="glass-card overflow-hidden">
        <div class="relative aspect-[16/10] bg-[var(--color-surface)] group">
          <template v-for="(img, j) in currentProject.images" :key="j">
            <img
              :src="img.src"
              :alt="`${currentProject.title} — ${img.label}`"
              class="gallery-screenshot absolute inset-0 transition-opacity duration-500 cursor-zoom-in"
              :class="activeImage === j ? 'opacity-100' : 'opacity-0'"
              @click="openLightbox"
            />
          </template>

          <span class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded text-[11px] font-medium tracking-wide uppercase bg-black/50 text-white/90 backdrop-blur-sm">
            {{ currentImage.label }}
          </span>

          <span
            v-if="currentProject.badge"
            class="absolute top-3 right-3 z-10 px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide uppercase bg-[var(--color-primary)]/80 text-white backdrop-blur-sm"
          >
            {{ currentProject.badge }}
          </span>

          <button
            class="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium bg-black/50 text-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="View full size"
            @click="openLightbox"
          >
            <ZoomIn :size="14" />
            Enlarge
          </button>

          <button
            v-if="currentProject.images.length > 1"
            class="gallery-arrow left-3 opacity-0 group-hover:opacity-100"
            aria-label="Previous screenshot"
            @click="prev"
          >
            <ChevronLeft :size="20" />
          </button>
          <button
            v-if="currentProject.images.length > 1"
            class="gallery-arrow right-3 opacity-0 group-hover:opacity-100"
            aria-label="Next screenshot"
            @click="next"
          >
            <ChevronRight :size="20" />
          </button>

          <div
            v-if="currentProject.images.length > 1"
            class="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5"
          >
            <button
              v-for="(_, j) in currentProject.images"
              :key="j"
              class="dot"
              :class="activeImage === j ? 'dot-active' : 'dot-inactive'"
              :aria-label="`Go to screenshot ${j + 1}`"
              @click="selectImage(j)"
            />
          </div>
        </div>

        <div class="px-6 py-5 border-t border-[var(--color-border)]">
          <h3 class="font-display text-lg font-bold text-heading mb-1">{{ currentProject.title }}</h3>
          <p class="text-sm text-muted">
            Screenshot {{ activeImage + 1 }} of {{ currentProject.images.length }}
          </p>
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <button
          v-for="(img, j) in currentProject.images"
          :key="j"
          class="gallery-thumb"
          :class="activeImage === j ? 'gallery-thumb-active' : ''"
          :aria-label="`View ${img.label}`"
          @click="selectImage(j)"
        >
          <img
            :src="img.src"
            :alt="img.label"
            class="w-full h-full object-cover object-top"
          />
          <span class="gallery-thumb-label">{{ img.label }}</span>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxOpen"
          class="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          :aria-label="`${currentProject.title} — ${currentImage.label}`"
          @click.self="closeLightbox"
        >
          <button class="lightbox-close" aria-label="Close" @click="closeLightbox">
            <X :size="22" />
          </button>

          <button
            v-if="currentProject.images.length > 1"
            class="lightbox-arrow left-4 md:left-8"
            aria-label="Previous screenshot"
            @click="prev"
          >
            <ChevronLeft :size="24" />
          </button>

          <figure class="lightbox-content">
            <img
              :src="currentImage.src"
              :alt="`${currentProject.title} — ${currentImage.label}`"
              class="lightbox-image"
            />
            <figcaption class="lightbox-caption">
              <span class="font-display font-semibold text-white">{{ currentProject.title }}</span>
              <span class="text-white/70"> — {{ currentImage.label }}</span>
            </figcaption>
          </figure>

          <button
            v-if="currentProject.images.length > 1"
            class="lightbox-arrow right-4 md:right-8"
            aria-label="Next screenshot"
            @click="next"
          >
            <ChevronRight :size="24" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery-tab {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}

.gallery-tab-active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.gallery-tab-inactive {
  background: var(--color-surface-card);
  color: var(--color-muted);
}

.gallery-tab-inactive:hover {
  color: var(--color-heading);
  border-color: var(--color-border-hover);
}

.gallery-screenshot {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: var(--color-surface);
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: opacity 0.2s, background 0.2s, transform 0.2s;
}

.gallery-arrow:hover {
  background: rgba(0, 0, 0, 0.78);
  transform: translateY(-50%) scale(1.08);
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

.gallery-thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  background: var(--color-surface);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  padding: 0;
}

.gallery-thumb:hover {
  transform: translateY(-2px);
  box-shadow: var(--color-glass-hover-shadow);
}

.gallery-thumb-active {
  border-color: var(--color-primary);
}

.gallery-thumb-label {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  padding: 0.35rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  text-align: left;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
}

.lightbox-content {
  margin: 0;
  max-width: min(1200px, 95vw);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.lightbox-image {
  max-width: 100%;
  max-height: calc(90vh - 3rem);
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
}

.lightbox-caption {
  font-size: 0.875rem;
  text-align: center;
}

.lightbox-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: background 0.2s;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.lightbox-arrow:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.08);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
