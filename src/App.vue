<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteNav from '@/components/SiteNav.vue'
</script>

<template>
  <div class="min-h-screen bg-surface text-on-surface">
    <SiteNav />
    <main class="container-shell py-8 md:py-12">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
