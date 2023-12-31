<template>
  <div class="prose p-12 bg-white rounded-md lessonContainer flex-col flex-grow">
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
        :href="lesson.sourceUrl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
        :href="lesson.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <div
      v-if="lesson.videoId"
      class="videoPlayerContainer mb-8"
    >
      <VideoPlayer :videoId="lesson.videoId" />
    </div>
    <p>{{ lesson.text }}</p>
    <NuxtErrorBoundary>
      <LessonCompleteButton
        :model-value="isLessonComplete"
        @update:model-value="updateIsLessonComplete"
      />
      <template #error="{ error }">
        <p>
          Oh, no! Something broke... :(
          <br>
          <code>{{ error }}</code>
          <br>
          <br>
          <button
            class="rounded text-white font-bold py-2 px-4 cursor-pointer bg-red-400"
            @click="resetError(error)"
          >Reset</button>
        </p>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="js">
const { state: course } = useCourse()
const route = useRoute()

const chapter = computed(
  () => course.chapters.find(chapter => chapter.slug === route.params.chapter)
)

const lesson = computed(
  () => chapter.value?.lessons?.find(lesson => lesson.slug === route.params.lesson)
)

// if either chapter or lesson missing, throw 404 error
if (!(chapter.value && lesson.value)) throw createError({ statusCode: 404 })

// update title
const title = computed(() => lesson.value.title)
useHead({ title })

const { isLessonComplete, updateIsLessonComplete } = useProgress(chapter, lesson)

const resetError = (error) => error.value = null
</script>

<style scoped>
.lessonContainer {
  width: 100%;
  height: 100%;
  max-width: 800px;
}

.videoPlayerContainer {
  width: 560px;
  height: 315px;
}
</style>