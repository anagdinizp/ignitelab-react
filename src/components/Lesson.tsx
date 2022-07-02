import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { CheckCircle, Lock } from 'phosphor-react'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps){
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • ' d 'de' LLLL • h'h'mm", {
    locale: ptBR,
  })

  return(
    <a href="#">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>
      <div className="border rounded border-gray-500 p-[16px] mt-[8px]">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
          <span className="text-sm text-blue-500 font-medium flex items-center gap-[8px]">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-[8px]">
            <Lock size={20} />
            Em breve
          </span>
          )}
          <span className="text-xs font-bold border border-green-300 rounded px-[8px] py-[2px]">
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className=" mt-[28px] block font-bold text-gray-200">
          {props.title}
        </strong>
      </div>
    </a>
    
  )
}