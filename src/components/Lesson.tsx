import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import { isPast, format } from 'date-fns'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slugLesson: string
  availableAt: Date
  type: 'live' | 'class'
  toggleSidebar?(): void
}

export function Lesson({
  title,
  slugLesson,
  availableAt,
  type,
  toggleSidebar
}: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(availableAt)
  const availableAtFormatted = format(
    availableAt,
    "EEEE '•' d 'de' MMMM '•' k'h'mm",
    { locale: ptBR }
  )

  const isActiveLesson = slugLesson === slug

  return (
    <Link to={`/event/lesson/${slugLesson}`} className='group'>
      <span className='text-gray-300'>{availableAtFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${
          isActiveLesson && 'bg-green-500'
        } `}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${
                isActiveLesson && 'text-white'
              } `}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold ${
              isActiveLesson && 'border-white'
            }`}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={`text-gray-200 mt-5 block ${
            isActiveLesson && 'text-white'
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
