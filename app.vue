<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <div class="grid min-h-screen grid-cols-[100%] grid-rows-[1fr_auto]">
    <AppHeaderNav />
    <UContainer class="w-full pt-28">
      <NuxtPage />
    </UContainer>
    <AppFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
