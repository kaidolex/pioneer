<script setup lang="ts">
defineProps<{ category: string; items: string[] }>()
</script>

<template>
  <section class="rounded-2xl bg-surface-container-low/80 p-4">
    <h3 class="mb-3 text-xs tracking-[0.16em] text-primary uppercase">{{ category }}</h3>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="item in items"
        :key="item"
        class="rounded-full bg-surface-bright/70 px-2.5 py-1 text-xs text-on-surface-muted"
      >
        {{ item }}
      </span>
    </div>
  </section>
</template>
