<script setup lang="ts">
import { Download } from '@lucide/vue'

const resumeUrl = `${import.meta.env.BASE_URL}EVANGELISTA-JAN-ILYZZA-RESUME.pdf`
</script>

<template>
  <footer>
    <div class="relative py-20 px-6 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-fuchsia-500/10" />
      <div class="absolute inset-0 border-t footer-border" />

      <div class="relative max-w-3xl mx-auto text-center">
        <h2 class="font-display text-2xl md:text-3xl font-bold text-heading mb-3">
          Want to work together?
        </h2>
        <p class="text-body text-sm mb-8 max-w-md mx-auto">
          Download my resume or get in touch — I'd love to hear about your next project.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            :href="resumeUrl"
            download="EVANGELISTA-JAN-ILYZZA-RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            <Download :size="18" />
            Download Resume
          </a>
          <a href="#contact" class="btn-outline">Get in Touch</a>
        </div>
      </div>
    </div>

    <div class="py-6 px-6 border-t footer-border text-center">
      <p class="text-sm text-muted">
        &copy; {{ new Date().getFullYear() }} Ilyzza Evangelista. All rights reserved.
      </p>
    </div>
  </footer>
</template>
