import Image from "next/image"

interface CardProps {
  title: string
  image: string
  description: string
  edad: string
  duracion: string
}

export default function CardPeliculas ({
  title,
  image,
  description,
  edad,
  duracion,
}: CardProps ) {
  return (
    <article className="w-[80%] h-[90%] bg-secondary text-primary p-5 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-black">
      <section className="w-[80%] mb-3">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <div className="flex flex-row">
          <p className="w-2/5 bg-yellow-400 flex items-center justify-center rounded-full text-secondary text-base">{edad}</p>
          <p className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full text-secondary text-base">{duracion}</p>
        </div>
      </section>
      <Image src={image} alt={title} width={300} height={500}/>
      <div className="w-[80%] mt-3 max-h-[50%] overflow-y-auto">
        <p className="text-base">{description}</p>
      </div>
    </article>
  )
}