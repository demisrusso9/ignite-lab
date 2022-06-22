import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query lessons {
    lessons {
      id
      title
    }
  }
`

interface Lessons {
  id: string
  title: string
}

export function App() {
  const { data } = useQuery<{ lessons: Lessons[] }>(GET_LESSONS_QUERY)

  return (
    <div>
      <ul>
        {data?.lessons.map(lesson => (
          <li className='text-3xl text-center text-cyan-300' key={lesson.id}>
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
