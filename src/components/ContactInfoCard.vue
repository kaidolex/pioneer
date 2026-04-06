<script setup lang="ts">
defineProps<{ title: string; value: string }>()
</script>

<template>
  <article class="rounded-2xl bg-surface-container-low p-5 ghost-border">
    <p class="text-xs uppercase tracking-[0.14em] text-on-surface-muted">{{ title }}</p>
    <p class="mt-2 text-lg font-semibold text-on-surface">{{ value }}</p>
  </article>
</template>
