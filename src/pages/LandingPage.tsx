import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useCreateSubscriptionMutation } from '../graphql/generated'
import codeImage from '../assets/code-image.png'
import { Footer } from '../components/Footer'

export function LandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriptionMutation()

  const navigate = useNavigate()

  function handleSubscribe(e: FormEvent) {
    e.preventDefault()

    createSubscriber({
      variables: { name, email }
    }).then(() => navigate('/event'))
  }

  return (
    <div className="min-h-screen bg-[url('/src/assets/blur-background.png')] bg-cover bg-no-repeat flex flex-col items-center">
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto mobile:flex-col'>
        <div className='max-w-[640px] mobile:flex flex-col mobile:items-center mobile:text-center mobile:max-w-lg px-4'>
          <Logo />

          <h1 className='mt-8 text-[2.5rem] leading-tight mobile:text-[2rem] '>
            Construa uma{' '}
            <strong className='text-blue-500'>aplicação completa</strong>, do
            zero, com <strong className='text-blue-500'>React</strong>
          </h1>

          <p className='mt-4 leading-relaxed text-gray-200 mobile:my-8'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className=' bg-gray-700 p-8 border border-gray-500 rounded mobile:w-full mobile:rounded-none'>
          <strong className='mb-6 text-2xl block'>
            Inscreva-se gratuitamente
          </strong>

          <div className='flex flex-col gap-y-2'>
            <form
              onSubmit={handleSubscribe}
              className='flex flex-col gap-2 w-full'
            >
              <input
                type='text'
                className='px-5 h-14 rounded bg-gray-900 text-gray-300'
                placeholder='Seu nome completo'
                onChange={e => setName(e.target.value)}
              />
              <input
                type='email'
                className='px-5 h-14 rounded bg-gray-900 text-gray-300'
                placeholder='Digite seu email'
                onChange={e => setEmail(e.target.value)}
              />

              <button
                type='submit'
                disabled={loading}
                className='bg-green-500 py-4 rounded mt-4 uppercase text-sm font-bold hover:bg-green-700 transition-colors disabled:opacity-50'
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
      </div>

      <img src={codeImage} className='mt-10' alt='' />

      <Footer />
    </div>
  )
}
