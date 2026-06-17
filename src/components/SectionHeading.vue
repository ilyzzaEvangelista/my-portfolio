<script setup lang="ts">
defineProps<{
  title: string
  number: string
}>()
</script>

<template>
  <div class="mb-14">
    <p class="font-display text-sm font-semibold tracking-widest text-primary uppercase mb-2">
      {{ number }}
    </p>
    <h2 class="font-display text-3xl md:text-4xl font-bold text-heading tracking-tight">
      {{ title }}
    </h2>
    <div class="mt-4 h-px w-full max-w-xs bg-gradient-to-r from-[var(--color-primary)]/60 via-[var(--color-accent)]/40 to-transparent" />
  </div>
</template>
