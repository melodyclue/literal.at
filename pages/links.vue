<template>
  <main class="">
    <h2 class="mb-8 text-xl font-semibold text-zinc-800">Links</h2>
    <ul class="space-y-4">
      <li v-for="link in links" :key="link.url">
        <a
          :href="link.url"
          target="_blank"
          class="-m-2 flex min-w-0 items-center gap-3 rounded-lg p-2 text-sm hover:bg-zinc-100 dark:hover:bg-white/10"
        >
          <UAvatar
            :src="getThumbnail(link.url)"
            :alt="link.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-zinc-700 dark:text-zinc-200">
            {{ link.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-zinc-400 dark:text-zinc-600">
            {{ link.username }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
import { getThumbnail } from '~/utils/getThumbnail'

useSeoMeta({
  title: 'Links | literal',
  description: '',
})

const links = [
  {
    label: 'GitHub',
    url: 'https://github.com/melodyclue',
    username: 'melodyclue',
  },
  {
    label: 'Zenn',
    url: 'https://zenn.dev/melodyrouter',
    username: 'melodyrouter',
  },
  {
    label: 'X',
    url: 'https://x.com/literal_at',
    username: 'literal_at',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/melodyclue_router',
    username: 'melodyclue_router',
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@melodyclue',
    username: 'melodyclue',
  },
]
</script>
