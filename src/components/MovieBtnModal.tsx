'use client'
import { useState } from 'react'
import { products } from '@/app/types/data/ProductData'
import { seats } from '../types/data/SeatsData';
import CardMovie from '../app/movie/CardMovie';

export default function MovieBtnModal() {
  const [showMovieModal, setShowMovieModal] = useState(false);

  const movieData = products.movies[0];
  return (
    <>
      <button className="button-blue rounded-2xl" onClick={() => setShowMovieModal(true)} >
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
        </svg></button>

      {showMovieModal ? (
        <>
          <div
            className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-900 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Resumen de compra
                  </h3>
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowMovieModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-3 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                
                <div className="relative p-6 flex-auto">
                <p>Cliente 123123123 </p>
                <div className=''>
                  <div className="w-[100%] flex justify-center items-center ">
                    <CardMovie movieUrl={movieData.movieUrl} movieAge={movieData.movieAge} movieDescription={movieData.movieDescription} movieDuration={movieData.movieDuration}
                    movieTitle={movieData.movieTitle} movieId={movieData.movieId}/>
                  
                  </div>
                  
                </div>
                  
                </div>
                <div className=" items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <p>Asientos</p>

                  {
                    seats.map((item, idx) => (
                      <div className=" justify-end p-6 border-t border-solid border-bg-cyan-200 rounded-b">
                        <p>Codigo asiento: {item.seatCode}</p>
                        <p>Tipo asiento: {item.seatType}</p>
                        <p>Puntos a añadir: {item.points}</p>
                        
                      </div>
                      
                      
                    ))
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowMovieModal(false)}
                  >
                    Confirmar compra
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

  )
}