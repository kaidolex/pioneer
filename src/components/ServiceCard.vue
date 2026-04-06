<script setup lang="ts">
import BaseCard from './BaseCard.vue'

defineProps<{ title: string; description: string }>()
</script>

<template>
  <BaseCard>
    <h3 class="mb-2 text-sm font-semibold text-primary">{{ title }}</h3>
    <p class="text-sm text-on-surface-muted">{{ description }}</p>
  </BaseCard>
</template>
