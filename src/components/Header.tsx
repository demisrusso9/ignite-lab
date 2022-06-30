import { Logo } from './Logo'
import { List, X } from 'phosphor-react'

interface HeaderProps {
  isMenuOpen: boolean
  toggleSidebar(): void
}

export function Header({ isMenuOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className='w-full py-5 px-0 flex items-center justify-center bg-gray-700 border-b border-gray-600 mobile:justify-between mobile:px-4 mobile:relative'>
      <Logo />

      <span
        className='flex items-center justify-center text-gray-200 invisible mobile:visible'
        onClick={toggleSidebar}
      >
        Aulas
        {isMenuOpen ? (
          <X className='text-blue-500 ml-2' size={30} />
        ) : (
          <List className='text-blue-500 ml-2' size={30} />
        )}
      </span>
    </header>
  )
}
