<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseChip from '@/components/BaseChip.vue'
import BaseSectionHeading from '@/components/BaseSectionHeading.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import SkillTagGroup from '@/components/SkillTagGroup.vue'
import TimelineItem from '@/components/TimelineItem.vue'
import profileImage from '@/assets/images/me.png'
import { profile } from '@/content/profile'
import { services } from '@/content/services'
import { skillGroups } from '@/content/skills'
import { timeline } from '@/content/timeline'
</script>

<template>
  <div class="space-y-12 animate-fade-up">
    <section class="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
      <div class="rounded-2xl p-0 m-0 flex items-end justify-start overflow-hidden">
        <img
          :src="profileImage"
          alt="Profile portrait"
          class="h-full max-h-128 w-full rounded-none object-contain object-bottom-left"
        />
      </div>
      <div class="section-block flex flex-col justify-center gap-5">
        <BaseChip pulse>{{ profile.availability }}</BaseChip>
        <h1 class="text-display text-4xl leading-tight md:text-6xl">
          {{ profile.title }} /
          <span class="text-primary">{{ profile.subtitle }}</span>
        </h1>
        <p class="max-w-xl text-on-surface-muted">{{ profile.bio }}</p>
        <div class="flex flex-wrap gap-3">
          <BaseButton as="a" href="/projects">{{ profile.ctaPrimary }}</BaseButton>
          <BaseButton as="a" variant="ghost" href="/contact">{{ profile.ctaSecondary }}</BaseButton>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <BaseSectionHeading title="Precision Services" subtitle="High-capability modules for this stack's core zones." />
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard v-for="service in services" :key="service.title" :title="service.title" :description="service.description" />
      </div>
    </section>

    <section class="space-y-6">
      <BaseSectionHeading title="The Tech Arsenal" />
      <div class="grid gap-4 md:grid-cols-2">
        <SkillTagGroup v-for="group in skillGroups" :key="group.category" :category="group.category" :items="group.items" />
      </div>
    </section>

    <section class="space-y-6">
      <BaseSectionHeading title="Professional Trajectory" />
      <div class="space-y-6 rounded-2xl bg-surface-container-low/80 p-6">
        <TimelineItem
          v-for="item in timeline"
          :key="item.company"
          :company="item.company"
          :role="item.role"
          :period="item.period"
          :notes="item.notes"
        />
      </div>
    </section>
  </div>
</template>
