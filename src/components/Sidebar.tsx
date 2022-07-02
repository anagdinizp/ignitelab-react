import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS = gql`
  query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    availableAt
    slug
    title
    lessonType
  }
}
`
interface QueryLessonsAvailableResponse {
   lessons: {
      id: string
      availableAt: string
      slug: string
      title: string
      lessonType: 'live' | 'class'
  }[]
}

export function Sidebar(){
  const {data} = useQuery<QueryLessonsAvailableResponse>(GET_LESSONS)
  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-1 border-l border-gray-600">
      <span className="block font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {return (
          <Lesson 
          key={lesson.id}
          title={lesson.title}
          slug={lesson.slug}
          availableAt={new Date(lesson.availableAt)}
          type={lesson.lessonType}
          />
        )})}
      </div>
    </aside>
  )
}