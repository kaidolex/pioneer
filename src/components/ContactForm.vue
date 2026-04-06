<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <form class="section-block space-y-4 glass-panel ghost-border" @submit.prevent="handleSubmit">
    <label class="block space-y-2">
      <span class="text-xs uppercase tracking-[0.14em] text-on-surface-muted">Identity</span>
      <input
        v-model="name"
        required
        class="w-full rounded-xl border border-outline-variant/20 bg-surface-container-high/75 px-3 py-2 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_10px_rgba(129,236,255,0.25)]"
        placeholder="Agent Name"
      />
    </label>

    <label class="block space-y-2">
      <span class="text-xs uppercase tracking-[0.14em] text-on-surface-muted">Comm Channel</span>
      <input
        v-model="email"
        type="email"
        required
        class="w-full rounded-xl border border-outline-variant/20 bg-surface-container-high/75 px-3 py-2 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_10px_rgba(129,236,255,0.25)]"
        placeholder="email@nexus.com"
      />
    </label>

    <label class="block space-y-2">
      <span class="text-xs uppercase tracking-[0.14em] text-on-surface-muted">Transmission</span>
      <textarea
        v-model="message"
        required
        rows="5"
        class="w-full rounded-xl border border-outline-variant/20 bg-surface-container-high/75 px-3 py-2 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_10px_rgba(129,236,255,0.25)]"
        placeholder="Describe the mission parameters..."
      />
    </label>

    <BaseButton as="button" variant="primary" type="submit">Initiate Transfer</BaseButton>
    <p v-if="submitted" class="text-sm text-primary">Transmission queued. I will respond soon.</p>
  </form>
</template>
