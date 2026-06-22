<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Certificates from './components/Certificates.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen mesh-bg text-body">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
