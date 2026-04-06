<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; subtitle?: string }>()
</script>

<template>
  <header class="space-y-2">
    <p v-if="eyebrow" class="text-xs tracking-[0.2em] text-on-surface-muted uppercase">{{ eyebrow }}</p>
    <h2 class="text-display text-3xl md:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="max-w-2xl text-sm text-on-surface-muted md:text-base">{{ subtitle }}</p>
  </header>
</template>
