import { Route, Routes } from 'react-router-dom'
import { Event } from './pages/Event'
import { LandingPage } from './pages/LandingPage'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  )
}
