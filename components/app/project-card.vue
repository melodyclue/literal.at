<template>
  <ULink :to="project.url" target="_blank" class="group block py-4">
    <div class="flex items-end justify-between gap-4">
      <div class="max-w-sm">
        <h3 class="group-hover:text-primary-600 mb-1 text-lg font-semibold">
          {{ project.title }}
        </h3>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          {{ project.description }}
        </p>
      </div>

      <UAvatar
        v-if="project.logo"
        :src="project.logo"
        :ui="{ rounded: 'rounded z-10 relative object-cover' }"
        size="md"
        :alt="project.title"
      />
    </div>
  </ULink>
</template>

<script lang="ts" setup>
import type { Project } from '~/components/featured/projects.vue'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})
</script>
