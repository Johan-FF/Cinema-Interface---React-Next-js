import Link from "next/link"
import Image from "next/image"
import movieProps from "@/app/types/props/CardMovieProps"
/*
export default function CardMovie ({movieTitle,movieUrl,movieDescription,movieAge,movieDuration}: movieProps ) {
  return (
    <Link href={'/movie'} className=" max-w-[80%] xl:max-w-[80%] md:max-w-[60%] w-[30%] h-[90%] my-4 mx-2 p-4 mt-2 bg-secondary-opacity border border-secondary text-primary flex-col justify-center items-center rounded-lg shadow-2xl shadow-black overflow-y-auto hover:bg-secondary hover:border-secondary-opacity cursor-pointer">
      <section className="w-[100%] mb-3 pt-5">
        <h2 className="font-bold text-xl mb-2">{movieTitle}</h2>
        <div className="flex flex-row">
          <p className="w-2/5 bg-yellow-400 flex items-center justify-center rounded-full text-secondary text-base">{movieAge}</p>
          <p className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full text-secondary text-base">{movieDuration}</p>
        </div>
      </section>
      <div className="w-[90%] flex justify-center items-center ">
      <img className='rounded-lg ' src={movieUrl} alt={movieTitle} width={300} height={500}/>
      </div>
      <div className="w-[100%] mt-3 max-h-[80%]">
        <p className="text-base">{movieDescription}</p>
      </div>
    </Link>
  )
}
*/
export default function CardMovie ({movieTitle,movieUrl,movieDescription,movieAge,movieDuration}: movieProps ) {
  return (
    <Link href={'/movie'} className="max-w-[80%] xl:max-w-[80%] md:max-w-[60%] max-h-[90%] bg-secondary text-primary p-[3vh] rounded-lg shadow-2xl shadow-black overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity">
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
      <section className="w-[100%] mt-5">
        <p className="text-base w-[100%] text-center">{movieDescription}</p>
      </section>
    </Link>
  )
}