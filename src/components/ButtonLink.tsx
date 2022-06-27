import { DiscordLogo, Lightning } from 'phosphor-react'

interface ButtonProps {
  link: string
  variant: 'primary' | 'secondary'
}

export function ButtonLink({ link, variant }: ButtonProps) {
  return variant === 'primary' ? (
    <a
      href={link}
      className='p-4 text-sm flex items-center justify-center rounded font-bold uppercase gap-2 bg-green-500 hover:bg-green-700 transition-colors'
    >
      <DiscordLogo size={24} />
      Comunidade Discord
    </a>
  ) : (
    <a
      href={link}
      className='p-4 text-sm flex items-center justify-center rounded font-bold uppercase gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors'
    >
      <Lightning size={24} />
      Acesse o desafio
    </a>
  )
}
