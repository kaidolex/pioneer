<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSectionHeading from '@/components/BaseSectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import RepoCard from '@/components/RepoCard.vue'
import { featuredProjects, repositories } from '@/content/projects'

const visibleRepos = ref(3)
const shownRepos = computed(() => repositories.slice(0, visibleRepos.value))

function loadMore() {
  visibleRepos.value = Math.min(visibleRepos.value + 3, repositories.length)
}
</script>

<template>
  <div class="space-y-10 animate-fade-up">
    <BaseSectionHeading
      eyebrow="Technical Portfolio"
      title="Engineered Solutions."
      subtitle="Architecting the future of the kinetic monolith through precise code and immersive digital environments."
    />

    <section class="space-y-6">
      <h2 class="text-xl font-semibold">Featured Artifacts</h2>
      <div class="grid gap-4 lg:grid-cols-2">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :tags="project.tags"
        />
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-xl font-semibold">Active Repositories</h2>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <RepoCard v-for="repo in shownRepos" :key="repo.name" :name="repo.name" :description="repo.description" :tech="repo.tech" />
      </div>
      <BaseButton v-if="visibleRepos < repositories.length" as="button" @click="loadMore">Load More Repository Data</BaseButton>
    </section>
  </div>
</template>
