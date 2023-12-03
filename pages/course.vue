<template>
  <div class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center">
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
    </div>
    <div class="flex flex-row justify-center flex-grow">
      <ChapterList />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="js">
const course = useCourse()
</script>