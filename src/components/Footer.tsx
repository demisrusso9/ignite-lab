import logoRocketseat from '../assets/rocketseat-logo.png'

export function Footer() {
  return (
    <div className='h-16 p-8 w-full flex items-center justify-between border-t border-gray-600 bg-gray-700 mobile:flex-col mobile:justify-center mobile:h-44'>
      <div className='flex items-center mobile:flex-col'>
        <img src={logoRocketseat} alt='Logo Rocketseat' />
        <span className='text-gray-400 text-sm ml-6 mobile: my-6'>
          Rocketseat - Todos os direitos reservados
        </span>
      </div>

      <span className='text-gray-400 text-sm '>Políticas de privacidade</span>
    </div>
  )
}
