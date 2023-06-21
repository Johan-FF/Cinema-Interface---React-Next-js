import React from "react";

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
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="flex flex-row">
            <div className="w-2/5 bg-blue-200 flex items-center justify-center rounded-full">
              <div className="text-gray-700 text-base">{edad}</div>
            </div>
            <div className="w-2/5 bg-yellow-200 flex items-center justify-center rounded-full ml-1 ">
              <div className="text-gray-700 text-base">{duracion}</div>
            </div>
          </div>
        </div>
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardPeliculas;
