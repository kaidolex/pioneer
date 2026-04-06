<script setup lang="ts">
import BaseChip from '@/components/BaseChip.vue'
import BaseSectionHeading from '@/components/BaseSectionHeading.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactInfoCard from '@/components/ContactInfoCard.vue'
import LiveLocationMap from '@/components/LiveLocationMap.vue'
import { contactLinks } from '@/content/contact'
import { contactMethods } from '@/content/profile'
</script>

<template>
  <div class="space-y-8 animate-fade-up">
    <section class="space-y-5">
      <BaseChip pulse>Available For Hire</BaseChip>
      <BaseSectionHeading
        title="Let’s Build the Kinetic Future"
        subtitle="Whether you have a question about my stack or want to initiate a new project protocol, my channels are open."
      />
    </section>

    <section class="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
      <div class="space-y-4">
        <ContactForm />
        <LiveLocationMap />
      </div>

      <div class="space-y-4">
        <div class="space-y-4">
          <ContactInfoCard
            v-for="method in contactMethods"
            :key="method.label"
            :title="method.label"
            :value="method.value"
          />
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <a
            v-for="link in contactLinks"
            :key="link.title"
            :href="link.href"
            class="rounded-2xl bg-surface-container-low p-5 ghost-border transition hover:bg-surface-container-high"
            target="_blank"
            rel="noreferrer"
          >
            <p class="text-lg font-semibold text-on-surface">{{ link.title }}</p>
            <p class="text-sm text-on-surface-muted">{{ link.subtitle }}</p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
