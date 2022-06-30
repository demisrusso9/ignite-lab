import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  const [openSidebar, setOpenSidebar] = useState(true)

  function toggleSidebar() {
    setOpenSidebar(state => !state)
  }

  return (
    <div className='flex flex-col min-h-screen relative'>
      <Header isMenuOpen={openSidebar} toggleSidebar={toggleSidebar} />

      <main className='flex flex-1 mobile:flex-col relative'>
        {slug ? <Video lessonSlug={slug} /> : <div className='flex-1' />}

        <Sidebar isMenuOpen={openSidebar} toggleSidebar={toggleSidebar} />
      </main>

      <Footer />
    </div>
  )
}
