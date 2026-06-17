<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Download } from '@lucide/vue'
import ThemeToggle from './ThemeToggle.vue'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const isScrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobile() {
  mobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
    <nav
      class="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300"
      :class="isScrolled
        ? 'glass-card'
        : 'bg-transparent border border-transparent'"
    >
      <a href="#home" class="flex items-center gap-3 group">
        <img
          src="/icon.png"
          alt="Ilyzza Evangelista"
          class="w-9 h-9 rounded-full icon-ring group-hover:opacity-90 transition-all"
        />
        <span class="font-display font-bold text-heading hidden sm:block">Ilyzza</span>
      </a>

      <div class="hidden lg:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <ThemeToggle />

        <a
          href="/EVANGELISTA-JAN-ILYZZA-RESUME.pdf"
          download="EVANGELISTA-JAN-ILYZZA-RESUME.pdf"
          class="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
        >
          <Download :size="14" />
          Resume
        </a>

        <button
          class="lg:hidden p-2 text-muted hover:text-heading rounded-lg"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-if="mobileOpen"
      class="lg:hidden max-w-5xl mx-auto mt-2 glass-card px-5 py-4 space-y-1"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="block nav-link"
        @click="closeMobile"
      >
        {{ link.label }}
      </a>
      <a
        href="/EVANGELISTA-JAN-ILYZZA-RESUME.pdf"
        download="EVANGELISTA-JAN-ILYZZA-RESUME.pdf"
        class="block px-3 py-2.5 text-sm font-medium text-primary"
        @click="closeMobile"
      >
        Download Resume
      </a>
    </div>
  </header>
</template>
