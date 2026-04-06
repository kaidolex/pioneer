<script setup lang="ts">
defineProps<{ company: string; role: string; period: string; notes: string }>()
</script>

<template>
  <article class="relative border-l border-outline-variant/25 pl-6">
    <span class="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-secondary" />
    <p class="text-xs tracking-[0.16em] text-on-surface-muted uppercase">{{ period }}</p>
    <h3 class="mt-1 text-base font-semibold text-primary">{{ company }}</h3>
    <p class="text-sm font-medium text-on-surface">{{ role }}</p>
    <p class="mt-2 text-sm text-on-surface-muted">{{ notes }}</p>
  </article>
</template>
