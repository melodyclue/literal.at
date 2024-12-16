<template>
  <main class="min-h-screen">
    <ContentDoc>
      <template v-slot="{ doc }">
        <UBreadcrumb :links="breadcrumb(doc.title)" class="mb-4" divider="/" />
        <div
          class="prose text-zinc-800 dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:rounded-lg prose-img:ring-1 prose-img:ring-gray-200 dark:text-zinc-200 dark:prose-img:ring-white/10"
        >
          <article>
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </div>

        <div class="mt-4">
          <ULink
            to="/bookmarks"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center gap-1"
          >
            <UIcon name="i-heroicons-chevron-left" />
            Back
          </ULink>
        </div>
      </template>

      <template #not-found>
        <h1>This bookmark does not exist</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { slug } = route.params as { slug: string }

useSeoMeta({
  ogImage: `https://literal.at/bookmarks/img/${slug}.png`,
  twitterCard: 'summary_large_image',
})

const breadcrumb = (title?: string) => {
  return [
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      to: '/',
    },
    {
      label: 'Bookmarks',
      icon: 'i-heroicons-square-3-stack-3d',
      to: '/bookmarks',
    },
    ...(title
      ? [
          {
            label: title,
            icon: 'i-heroicons-link',
          },
        ]
      : []),
  ]
}
</script>
