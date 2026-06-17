<script setup lang="ts">
import { ref } from 'vue'
import { MapPin, Link2, Send } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'
import SocialIcon from './SocialIcon.vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Philippines', href: '#' },
  { icon: Link2, label: 'GitHub', value: 'github.com/ilyzzaEvangelista', href: 'https://github.com/ilyzzaEvangelista', social: 'github' as const },
  { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/ilyzzaevanz', href: 'https://www.linkedin.com/in/ilyzzaevanz/', social: 'linkedin' as const },
]

const socials = [
  { name: 'github' as const, href: 'https://github.com/ilyzzaEvangelista', label: 'GitHub' },
  { name: 'linkedin' as const, href: 'https://www.linkedin.com/in/ilyzzaevanz/', label: 'LinkedIn' },
]

function handleSubmit() {
  alert('Thanks for reaching out! This form is a demo — connect your backend to send messages.')
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <section id="contact" class="py-28 px-6 section-alt">
    <div class="max-w-6xl mx-auto">
      <SectionHeading number="06" title="Let's Connect" />

      <div class="grid lg:grid-cols-2 gap-10">
        <div class="space-y-4">
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            Have a project in mind or want to discuss an opportunity? Reach out — I'm always open to
            connecting with fellow developers and teams.
          </p>

          <a
            v-for="info in contactInfo"
            :key="info.label"
            :href="info.href"
            :target="info.href.startsWith('http') ? '_blank' : undefined"
            :rel="info.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="flex items-center gap-4 p-5 glass-card hover:-translate-y-0.5 group"
          >
            <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <SocialIcon v-if="info.social" :name="info.social" :size="18" class="text-primary" />
              <component v-else :is="info.icon" :size="18" class="text-primary" />
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase tracking-wider">{{ info.label }}</p>
              <p class="text-sm font-medium text-slate-200">{{ info.value }}</p>
            </div>
          </a>

          <div class="flex gap-3 pt-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-primary hover:-translate-y-0.5 transition-all"
            >
              <SocialIcon :name="social.name" />
            </a>
          </div>
        </div>

        <form class="glass-card p-6 md:p-8 space-y-4" @submit.prevent="handleSubmit">
          <input v-model="form.name" type="text" placeholder="Your Name" required class="input-dark" />
          <input v-model="form.email" type="email" placeholder="Your Email" required class="input-dark" />
          <textarea
            v-model="form.message"
            placeholder="Your Message"
            rows="5"
            required
            class="input-dark resize-none"
          />
          <button type="submit" class="btn-primary w-full justify-center !rounded-xl">
            <Send :size="16" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
