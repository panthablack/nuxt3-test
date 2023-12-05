<template>
  <NuxtLayout>
    <div class="prose w-[65ch]">
      <h1>Error: {{ error?.statusCode }}</h1>
      <div class="w-full">
        <div class="my-8">
          <p v-if="error?.statusCode == 404">Oh, no! We could not find that... :&#x28;</p>
          <p v-else>Oh, no! Something broke... :&#x28;</p>
        </div>
        <p class="my-8 align-middle">
          <span class="mr-4">{{ error?.message }}</span>
          <button
            @click="showDetail = !showDetail"
            class="text flat text-sm text-gray-500"
          >{{ showDetail ? 'show less' : 'show more'
          }}</button>
        </p>
        <div
          class="detailView my-8"
          v-if="showDetail"
        >
          <code>{{ error }}</code>
        </div>
        <button
          class="rounded text-white font-bold py-2 px-4 cursor-pointer bg-red-400"
          @click="goHome"
        >Go Home</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="js">
const error = useError()

const showDetail = ref(false)

const goHome = () => navigateTo('/')
</script>