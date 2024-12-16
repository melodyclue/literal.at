<template>
  <div>
    <h2 class="mb-8 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
      Projects
    </h2>
    <div class="divide-y divide-slate-100">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'

export interface Project extends ParsedContent {
  url: string
  logo?: string
  thumbnail?: string
  status: 'Completed' | 'In Progress' | 'On Hold' | 'Cancelled'
  opensource: boolean
}

const { data: projects } = await useAsyncData('projects', () =>
  queryContent<Project>('/projects').limit(3).find(),
)
</script>
