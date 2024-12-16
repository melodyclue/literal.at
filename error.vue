<template>
  <article class="flex h-screen items-center justify-center">
    <section class="max-w-md text-center">
      <h1 class="mb-4 text-5xl font-bold text-zinc-800">
        {{ error?.statusCode || 500 }}
      </h1>
      <p class="mb-4 text-zinc-600">
        {{ error?.message || 'Something went wrong.' }}
      </p>
      <NuxtLink to="/" class="text-zinc-600"> Go back home </NuxtLink>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps({
  error: Object as () => NuxtError,
})

useHead({
  title: `${props.error?.statusCode || 500} | Literal`,
})
</script>
