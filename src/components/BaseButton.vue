<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'ghost'
  as?: 'button' | 'a'
  href?: string
}>()
</script>

<template>
  <component
    :is="as ?? 'button'"
    :href="href"
    class="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300"
    :class="
      variant === 'ghost'
        ? 'ghost-border text-primary hover:bg-surface-bright/40'
        : 'primary-gradient text-surface hover:shadow-[0_0_16px_rgba(129,236,255,0.35)]'
    "
  >
    <slot />
  </component>
</template>
