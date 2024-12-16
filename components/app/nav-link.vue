<template>
  <UTooltip :text="name" :ui="{ popper: { strategy: 'absolute' } }">
    <ULink
      :to="path"
      class="hover:text-primary-500 dark:hover:text-primary-400 relative flex items-center justify-center px-3 py-4 transition"
      active-class="text-primary-600 dark:text-primary-400"
    >
      <Icon :name="icon" class="z-10 h-5 w-5" />

      <template v-if="$route.path === path">
        <span
          class="from-primary-500/10 via-primary-500/80 to-primary-500/10 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0 absolute inset-x-1 -bottom-px h-px bg-gradient-to-r"
        />
      </template>

      <span class="sr-only">{{ name }}</span>
    </ULink>
  </UTooltip>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>
