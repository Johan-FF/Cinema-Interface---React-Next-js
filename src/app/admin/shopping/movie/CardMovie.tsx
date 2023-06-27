import Link from "next/link"
import Image from "next/image"
import movieProps from "@/app/types/props/CardMovieProps"

export default function CardMovie ({isInHome,movieTitle,movieUrl,movieDescription,movieAge,movieDuration}: movieProps ) {
  return (
    <Link href={'/admin/shopping/movie'} className={`${isInHome ? 'ml-[10%] w-[100%] h-[70%] md:ml-auto md:w-[49%] md:h-[55%] xl:w-[33%] xl:h-[90%]': 'w-[80%] h-[90%]'} max-w-[80%] xl:max-w-[80%] md:max-w-[60%] max-h-[90%] bg-secondary hover:bg-secondary-opacity text-primary p-[3vh] rounded-lg shadow-2xl shadow-black overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity`}>
      <section className="w-[100%]">
        <h2 className="font-bold text-[35px] w-[100%] text-center">{movieTitle}</h2>
        <div className="flex flex-row w-[100%] justify-center mb-5">
          <p className="w-2/5 bg-yellow-400 flex items-center justify-center rounded-full text-secondary text-base">{movieAge}</p>
          <p className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full text-secondary text-base">{movieDuration}</p>
        </div>
      </section>
      <section className="w-[100%] flex justify-center">
        <Image src={movieUrl} alt={movieTitle} width={300} height={500}/>
      </section>
      {
        !isInHome ? 
        <section className="w-[100%] mt-5">
          <p className="text-base w-[100%] text-center">{movieDescription}</p>
        </section> : <></>
      }
    </Link>
  )
}