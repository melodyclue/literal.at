<template>
  <div ref="headerRef" :style="styles" class="fixed top-0 z-50 w-full">
    <nav class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
      <ul
        class="my-4 flex items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/20"
      >
        <div class="mx-4">Literal.at</div>
        <li v-for="item in items" :key="item.path" class="ml-2">
          <AppNavLink v-bind="item" />
        </li>
        <li class="flex flex-1 justify-end">
          <AppToggleTheme />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useFixedHeader } from 'vue-use-fixed-header'

const headerRef = ref(null)
const { styles } = useFixedHeader(headerRef)

const items = [
  { name: 'Home', path: '/', icon: 'solar:home-smile-outline' },
  { name: 'Links', path: '/links', icon: 'solar:link-linear' },
  { name: 'Bookmarks', path: '/bookmarks', icon: 'solar:bookmark-linear' },
]
</script>
