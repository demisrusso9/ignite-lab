import { useState } from 'react'
import logoRocketseat from '../assets/rocketseat-logo.png'

export function Footer() {
  return (
    <div className='h-16 w-full px-8 flex items-center justify-between border-t border-gray-600 bg-gray-700 '>
      <div className='flex items-center'>
        <img src={logoRocketseat} alt='Logo Rocketseat' />
        <span className='text-gray-400 text-sm ml-6'>
          Rocketseat - Todos os direitos reservados
        </span>
      </div>

      <span className='text-gray-400 text-sm'>Políticas de privacidade</span>
    </div>
  )
}
