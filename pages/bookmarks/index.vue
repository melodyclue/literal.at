<template>
  <main class="">
    <h2 class="mb-6 text-xl font-semibold text-zinc-800">Bookmarks</h2>
    <ul class="space-y-4">
      <li v-for="bookmark in bookmarks" :key="bookmark.slug">
        <NuxtLink
          :to="bookmark._path"
          class="-m-2 flex min-w-0 cursor-pointer items-center gap-3 rounded-lg p-4 hover:bg-zinc-100 dark:hover:bg-white/10"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.title"
            :ui="{ rounded: 'rounded-md' }"
          />
          <div class="flex flex-col gap-1">
            <p
              class="truncate text-lg font-semibold text-zinc-800 dark:text-zinc-200"
            >
              {{ bookmark.title }}
            </p>
            <p class="text-sm text-zinc-600 dark:text-zinc-600">
              {{ bookmark.description }}
            </p>
          </div>
          <span class="flex-1"></span>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'
import { getThumbnail } from '~/utils/getThumbnail'

useSeoMeta({
  title: 'Bookmarks | Literal.at',
  description: '',
})

export interface Bookmark extends ParsedContent {
  url: string
  description: string
  published: string
  slug: string
}
const { data: bookmarks } = await useAsyncData('bookmarks', () =>
  queryContent<Bookmark>('/bookmarks').sort({ published: -1 }).find(),
)

console.log(bookmarks)
</script>
