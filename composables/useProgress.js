export const useProgress = (chapter, lesson, key = 'progress') => {
  const progress = useLocalStorage(key, {})

  const isLessonComplete = computed(() => {
    // if chapter does not exist, return false
    if (!progress.value[chapter.value.number]) return false
    // if lesson does not exist, return false
    else if (!progress.value[chapter.value.number][lesson.value.number]) return false
    // else return progress value for lesson
    else return !!progress.value[chapter.value.number][lesson.value.number]
  })

  const updateIsLessonComplete = e => {
    // if chapter does not exist, create it
    if (!progress.value[chapter.value.number]) progress.value[chapter.value.number] = {}
    // if third lesson, simulate error
    if (lesson.value.number == 3) throw createError("Yo, this ain't allowed, yo!")
    // mark lesson as innverse of current value
    progress.value[chapter.value.number][lesson.value.number] = e
  }

  return { progress, isLessonComplete, updateIsLessonComplete }
}
