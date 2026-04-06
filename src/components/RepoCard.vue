<script setup lang="ts">
defineProps<{ name: string; description: string; techs: string[]; url: string }>()
</script>

<template>
  <article class="rounded-2xl bg-surface-container-low p-4 ghost-border">
    <div class="flex items-start justify-between gap-3">
      <h3 class="font-semibold text-on-surface">{{ name }}</h3>
      <a
        :href="url"
        target="_blank"
        rel="noreferrer"
        class="text-xs uppercase tracking-[0.14em] text-primary transition hover:text-secondary"
      >
        Visit
      </a>
    </div>
    <p class="mt-2 text-sm text-on-surface-muted">{{ description }}</p>
    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="tech in techs"
        :key="tech"
        class="rounded-full bg-surface-bright/70 px-2.5 py-1 text-xs uppercase tracking-[0.14em] text-primary"
      >
        {{ tech }}
      </span>
    </div>
  </article>
</template>
