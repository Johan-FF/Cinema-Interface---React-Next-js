import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
  edad: string;
  duracion: string;
}

const CardPeliculas: React.FC<CardProps> = ({
  title,
  image,
  description,
  edad,
  duracion,
}) => {
  return (
    <article className="w-full flex flex-col justify-center items-center shadow-2xl shadow-black">
      <section className="w-[50%]">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <div className="flex flex-row">
          <p className="w-2/5 bg-yellow-400 flex items-center justify-center rounded-full text-gray-700 text-base">{edad}</p>
          <p className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full text-gray-700 text-base">{duracion}</p>
        </div>
      </section>
      <Image src={image} alt={title} width={300} height={500}/>
      <div className="w-[50%]">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </article>
  )
}

export default CardPeliculas
