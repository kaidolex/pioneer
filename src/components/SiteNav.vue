<script setup lang="ts">
import { Code2, Github, Sparkles } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-outline-variant/15 bg-surface/85 backdrop-blur-xl">
    <nav class="container-shell flex h-16 items-center justify-between">
      <RouterLink to="/" class="text-display text-xl text-primary">Kaidstack</RouterLink>
      <ul class="hidden items-center gap-7 md:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="text-sm text-on-surface-muted transition-colors hover:text-on-surface"
            :class="{ 'text-primary': route.path === link.to }"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
      <div class="flex items-center gap-3 text-primary">
        <Sparkles class="size-4" />
        <Code2 class="size-4" />
        <Github class="size-4" />
      </div>
    </nav>
  </header>
</template>
