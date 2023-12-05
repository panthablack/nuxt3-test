import courseData from './courseData'

interface Chapter {
  lessons: Lesson[]
  number: number
  slug: string
  title: string
}

interface Lesson {
  downloadUrl?: string
  path?: string
  slug: string
  sourceUrl?: string
  text: string
  title: string
  videoId: number
}

export const useCourse = () => {
  const getLessonPath = (chapter: Chapter, lesson: Lesson) =>
    `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`

  const getChapterLessons = (chapter: Chapter): Lesson[] =>
    chapter.lessons.map(
      (lesson: Lesson): Lesson => ({ ...lesson, path: getLessonPath(chapter, lesson) })
    )

  const chapters: Chapter[] = courseData.chapters.map(
    (chapter: Chapter): Chapter => ({ ...chapter, lessons: getChapterLessons(chapter) })
  )

  const state = reactive({ chapters })

  return { state }
}
