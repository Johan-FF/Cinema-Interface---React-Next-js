'use client'

import CardMovie from "../movie/CardMovie"
import { seats } from "@/app/types/data/SeatsData"
import { products } from "@/app/types/data/ProductData"

export default function MovieSummary() {
  const movieData = products.movies[0]

  return (
    <>
      <div className='p-6'>
        <span className="w-[100%] flex justify-center items-center">
          <CardMovie isInHome={false} url={movieData.url} age={movieData.age} description={movieData.description} duration={movieData.duration}
            title={movieData.title} id={movieData.id} />
        </span>
      </div>
      <div className="p-6 shadow-big border-b-2 border-b-primary bg-secondary-opacity">
        <strong className='mb-3 pl-5 text-2xl w-full rounded-lg border-b-2 block border-primary'>Asientos</strong>
        {
          seats.map((item, index) => (
            <div key={index} className="p-3 m-3 border-b-2 border-b-primary shadow-big bg-secondary grid grid-cols-2">
              <p>Codigo asiento:</p> <span className='text-primary text-opacity-90 pl-3'>{item.seatCode} </span>
              <p>Tipo asiento:</p> <span className='text-primary text-opacity-90 pl-3'>{item.seatType}</span>
              <p>Puntos a añadir:</p> <span className='text-primary text-opacity-90 pl-3'>{item.points} </span>
            </div>
          ))
        }
      </div>
    </>
  )
}