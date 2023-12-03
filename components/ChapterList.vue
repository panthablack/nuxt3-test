<template>
  <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[35ch] flex flex-col">
    <h3>Chapters</h3>
    <ul class="list-none p-0">
      <li
        v-for="chapter in chapters"
        :key="chapter.slug"
        class="space-y-1 mb-4 flex flex-col p-0"
      >
        <h4>{{ chapter.title }}</h4>
        <ol class="list-none p-0">
          <li
            v-for="lesson in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
          >
            <NuxtLink
              :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
              class="no-underline"
            >
              <div class="link flex flex-row">
                <span class="mr-3 text-gray-500">{{ lesson.number }}.</span>
                <span class="hover:text-indigo-800">{{ lesson.title }}</span>
              </div>
            </NuxtLink>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
const course = useCourse()
const chapters = course.chapters
</script>