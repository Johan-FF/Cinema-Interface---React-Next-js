'use client'

import { useCart } from "../hooks/useCart"
import CardMovie from "../movie/CardMovie"
import { useEffect, useState } from "react"
import { Movie } from "@/app/types/Interfaces"
import { divideChairFormater } from "@/app/helpers/DateFormater"
import Account from "@/app/services/Account"

export default function MovieSummary() {
  const { movie, chairGeneral, chairPreferential } = useCart()
  const [currentMovie, setCurrentMovie] = useState<Movie>({
    type: 'Película',
    id: '',
    imgUrl: '',
    duration: '',
    age: '',
    title: '',
    synopsis: ''
  })
  const [general, setGeneral] = useState('')
  const [preferential, setPreferential] = useState('')
  const pointsMovie = Account.getInstance().getPointsTicket()

  useEffect(() => {
    setCurrentMovie(movie)
    setGeneral(chairGeneral)
    setPreferential(chairPreferential)
  }, [movie, chairGeneral, chairPreferential])

  return (
    <>
      <div className='p-6'>
        <span className="w-[100%] flex justify-center items-center">
          <CardMovie 
            isInHome={false}
            url={currentMovie.imgUrl}
            age={currentMovie.age}
            description={currentMovie.synopsis}
            duration={currentMovie.duration}
            title={currentMovie.title}
            id={currentMovie.id}
          />
        </span>
      </div>
      <div className="p-6 shadow-big border-b-2 border-b-primary bg-secondary-opacity">
        <strong className='mb-3 pl-5 text-2xl w-full rounded-lg border-b-2 block border-primary'>Asientos</strong>
        {
          divideChairFormater(preferential).map((item, index) => (
            <div key={index} className="p-3 m-3 border-b-2 border-b-primary shadow-big bg-secondary grid grid-cols-2">
              <p>Codigo asiento:</p> <span className='text-primary text-opacity-90 pl-3'>{item} </span>
              <p>Tipo asiento:</p> <span className='text-primary text-opacity-90 pl-3'>Preferencial</span>
              <p>Puntos a añadir:</p> <span className='text-primary text-opacity-90 pl-3'>{pointsMovie} </span>
            </div>
          ))
        }
        {
          divideChairFormater(general).map((item, index) => (
            <div key={index} className="p-3 m-3 border-b-2 border-b-primary shadow-big bg-secondary grid grid-cols-2">
              <p>Codigo asiento:</p> <span className='text-primary text-opacity-90 pl-3'>{item} </span>
              <p>Tipo asiento:</p> <span className='text-primary text-opacity-90 pl-3'>General</span>
              <p>Puntos a añadir:</p> <span className='text-primary text-opacity-90 pl-3'>{pointsMovie} </span>
            </div>
          ))
        }
      </div>
    </>
  )
}