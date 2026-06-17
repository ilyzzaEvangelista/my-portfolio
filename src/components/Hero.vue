<script setup lang="ts">

import { ArrowDown, Download } from '@lucide/vue'



const stack = ['Vue 3', 'Nuxt 3', 'TypeScript', 'Laravel', 'Pinia']

</script>



<template>

  <section id="home" class="relative min-h-screen flex items-center px-6 pt-28 pb-20">

    <div

      class="absolute top-1/3 right-[10%] w-72 h-72 rounded-full hero-glow-1 blur-[100px] animate-pulse-glow pointer-events-none"

    />

    <div

      class="absolute bottom-1/4 left-[5%] w-56 h-56 rounded-full hero-glow-2 blur-[80px] animate-pulse-glow pointer-events-none"

      style="animation-delay: 2s"

    />



    <div class="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

      <div class="space-y-7">

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted">

          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          Available for opportunities

        </div>



        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-heading leading-[1.1] tracking-tight">

          Building scalable

          <span class="gradient-text block mt-1">web experiences</span>

        </h1>



        <p class="text-lg text-body leading-relaxed max-w-xl">

          Hi, I'm <span class="text-heading font-semibold">Ilyzza Evangelista</span> — a Frontend Developer

          with 4+ years building enterprise web applications using Vue.js, Nuxt.js, Vuetify, and Laravel APIs.

        </p>



        <div class="flex flex-wrap gap-2">

          <span v-for="tech in stack" :key="tech" class="tag">{{ tech }}</span>

        </div>



        <div class="flex flex-wrap gap-4 pt-2">

          <a href="#contact" class="btn-primary">Hire Me</a>

          <a href="#projects" class="btn-outline">View Projects</a>

          <a

            href="/EVANGELISTA-JAN-ILYZZA-RESUME.pdf"

            download="EVANGELISTA-JAN-ILYZZA-RESUME.pdf"

            class="btn-ghost"

          >

            <Download :size="16" />

            Resume

          </a>

        </div>

      </div>



      <div class="relative flex justify-center lg:justify-end">

        <div class="relative animate-float">

          <div

            class="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-glow-1)] to-[var(--color-glow-2)] blur-3xl scale-110"

          />

          <img

            src="/icon.png"

            alt="Ilyzza Evangelista"

            class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover icon-ring shadow-2xl"

          />

        </div>

        <div class="absolute -top-2 -right-2 glass-card px-5 py-3 hidden sm:block">

          <p class="text-sm font-display font-semibold text-heading">Vue.js</p>

          <p class="text-xs text-muted">Primary stack</p>

        </div>

      </div>

    </div>



    <a

      href="#about"

      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors animate-scroll"

      aria-label="Scroll down"

    >

      <ArrowDown :size="24" />

    </a>

  </section>

</template>


