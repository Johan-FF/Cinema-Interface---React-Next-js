import Image from "next/image"
import props from "@/app/types/props/CardMovieProps"

export default function CardMovie ({movieTitle,url,movieDescription,movieAge,movieDuration}: props ) {
  return (
    <article className=" max-w-[80%] xl:max-w-[80%] md:max-w-[60%] w-[30%] h-[90%] my-4 mx-2 p-4 mt-2 bg-secondary-opacity border border-secondary text-primary flex-col justify-center items-center rounded-lg shadow-2xl shadow-black overflow-y-auto hover:bg-secondary hover:border-secondary-opacity cursor-pointer">
      <section className="w-[100%] mb-3 pt-5">
        <h2 className="font-bold text-xl mb-2">{movieTitle}</h2>
        <div className="flex flex-row">
          <p className="w-2/5 bg-yellow-400 flex items-center justify-center rounded-full text-secondary text-base">{movieAge}</p>
          <p className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full text-secondary text-base">{movieDuration}</p>
        </div>
      </section>
      <div className="w-[90%] flex justify-center items-center ">
      <img className='rounded-lg ' src={url} alt={movieTitle} width={300} height={500}/>
      </div>
      <div className="w-[100%] mt-3 max-h-[80%]">
        <p className="text-base">{movieDescription}</p>
      </div>
    </article>
  )
}