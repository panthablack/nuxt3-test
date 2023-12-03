<template>
  <div class="flex flex-row justify-center flex-grow">
    <ChapterList />
    <NuxtPage />
  </div>
</template>

<script setup lang="js">
definePageMeta({ layout: 'lessons' })
</script>