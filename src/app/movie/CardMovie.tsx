import Image from "next/image"
import props from "@/app/types/props/CardMovieProps"

export default function CardMovie ({title,image,description,age,duration}: props ) {
  return (
    <article className="max-w-[80%] xl:max-w-[80%] md:max-w-[60%] h-[90%] bg-secondary text-primary p-5 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-black py-5 overflow-y-auto">
      <section className="w-[80%] mb-3 pt-5">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <div className="flex flex-row">
          <p className="w-2/5 bg-yellow-400 flex items-center justify-center rounded-full text-secondary text-base">{age}</p>
          <p className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full text-secondary text-base">{duration}</p>
        </div>
      </section>
      <Image src={image} alt={title} width={300} height={500}/>
      <div className="w-[80%] mt-3 max-h-[50%]">
        <p className="text-base">{description}</p>
      </div>
    </article>
  )
}