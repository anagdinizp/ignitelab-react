import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps){
  const { slug } = useParams<{slug: string}>()
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • ' d 'de' LLLL • h'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug

  return(
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>
      <div className={`border rounded border-gray-500 p-[16px] mt-[8px] group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
          <span className={`text-sm text-blue-500 font-medium flex items-center gap-[8px] ${isActiveLesson ? 'text-white' : ''}`}>
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          ) : (
            <span className={'text-sm text-orange-500 font-medium flex items-center gap-[8px]'}>
            <Lock size={20} />
            Em breve
          </span>
          )}
          <span className={`text-xs font-bold border border-green-300 rounded px-[8px] py-[2px] ${isActiveLesson ? 'text-white border-gray-50' : ''}`}>
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={`mt-[28px] block font-bold ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
          {props.title}
        </strong>
      </div>
    </Link>
    
  )
}