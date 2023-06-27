import Image from "next/image"
import props from "@/app/types/props/CardMovieProps"

export default function CardMovie ({movieTitle,url,movieDescription,movieAge,movieDuration}: props ) {
  return (
    <article className="max-w-[80%] xl:max-w-[80%] md:max-w-[60%] max-h-[90%] bg-secondary text-primary p-[3vh] rounded-lg shadow-2xl shadow-black overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity">
      <section className="w-[100%]">
        <h2 className="font-bold text-[35px] w-[100%] text-center">{title}</h2>
        <div className="flex flex-row w-[100%] justify-center mb-5">
          <p className="w-2/5 bg-yellow-400 flex items-center justify-center rounded-full text-secondary text-base">{age}</p>
          <p className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full text-secondary text-base">{duration}</p>
        </div>
      </section>
      <section className="w-[100%] flex justify-center">
        <Image src={image} alt={title} width={300} height={500}/>
      </section>
      <section className="w-[100%] mt-5">
        <p className="text-base w-[100%] text-center">{description}</p>
      </section>
    </article>
  )
}