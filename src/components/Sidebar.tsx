import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

interface SidebarProps {
  isMenuOpen: boolean
  toggleSidebar(): void
}

export function Sidebar({ isMenuOpen, toggleSidebar }: SidebarProps) {
  const { data } = useGetLessonsQuery()

  if (!isMenuOpen) {
    return <div />
  }

  return (
    isMenuOpen && (
      <aside
        className={`w-[348px] bg-gray-700 p-6 border-l border-gray-600 relative ${
          isMenuOpen &&
          'mobile:w-full mobile:min-h-screen mobile:absolute mobile:top-0 z-50 '
        }`}
      >
        <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
          Cronograma de aulas
        </span>

        <div className='flex flex-col gap-8'>
          {data?.lessons.map(lesson => (
            <Lesson
              toggleSidebar={toggleSidebar}
              key={lesson.id}
              title={lesson.title}
              slugLesson={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          ))}
        </div>
      </aside>
    )
  )
}
