<script setup lang="ts">
defineProps<{ pulse?: boolean }>()
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full bg-surface-bright/60 px-3 py-1 text-xs tracking-[0.16em] text-on-surface-muted uppercase"
  >
    <span
      v-if="pulse"
      class="size-2 rounded-full bg-secondary animate-pulse-dot"
      aria-hidden="true"
    />
    <slot />
  </span>
</template>
