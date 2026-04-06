<script setup lang="ts">
defineProps<{ name: string; description: string; tech: string }>()
</script>

<template>
  <article class="rounded-2xl bg-surface-container-low p-4 ghost-border">
    <h3 class="font-semibold text-on-surface">{{ name }}</h3>
    <p class="mt-2 text-sm text-on-surface-muted">{{ description }}</p>
    <p class="mt-3 text-xs uppercase tracking-[0.14em] text-primary">{{ tech }}</p>
  </article>
</template>
