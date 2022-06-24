import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import { isPast, format } from 'date-fns'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  // With date-fns
  const isLessonAvailable = isPast(availableAt)

  const availableAtFormatted = format(
    availableAt,
    "EEEE '•' d 'de' MMMM '•' k'h'mm",
    { locale: ptBR }
  )
  // Without date-fns
  // const isLessonAvailable = new Date(availableAt) < new Date()

  // const availableAtFormatted = new Date(availableAt).toLocaleDateString(
  //   'pt-BR',
  //   {
  //     weekday: 'long',
  //     month: 'long',
  //     day: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     hour12: false,
  //     timeZone: 'America/Sao_Paulo'
  //   }
  // )

  return (
    <a href='#'>
      <span className='text-gray-300'>{availableAtFormatted}</span>

      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className='text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold'>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='text-gray-200 mt-5 block'>{title}</strong>
      </div>
    </a>
  )
}
