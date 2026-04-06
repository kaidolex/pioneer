<script setup lang="ts">
defineProps<{ title: string; description: string; image: string; tags: string[] }>()
</script>

<template>
  <article class="overflow-hidden rounded-2xl bg-surface-container-low ghost-border">
    <img :src="image" :alt="title" class="h-48 w-full object-cover" loading="lazy" />
    <div class="space-y-3 p-4">
      <h3 class="text-lg font-semibold text-on-surface">{{ title }}</h3>
      <p class="text-sm text-on-surface-muted">{{ description }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-surface-bright/70 px-2.5 py-1 text-xs uppercase tracking-wide text-primary"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
