import { CaretRight, FileArrowDown, Image } from 'phosphor-react'

interface CardProps {
  title: string
  description: string
  icon: 'fileArrow' | 'image'
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <a
      className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
      href='#'
    >
      <div className='bg-green-700 p-6 flex items-center'>
        {icon === 'fileArrow' ? (
          <FileArrowDown size={40} />
        ) : (
          <Image size={40} />
        )}
      </div>

      <div className='py-6 leading-relaxed'>
        <strong className='text-2xl'>{title}</strong>

        <p className='text-sm text-gray-200'>{description}</p>
      </div>

      <div className='h-full p-6 flex items-center mobile:my-auto'>
        <CaretRight size={24} />
      </div>
    </a>
  )
}
