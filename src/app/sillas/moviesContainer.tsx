import React from "react";
import CardPeliculas from "./cardPeliculas";

const MoviesContainer = () => {
  return (
    <main className="flex w-screen h-screen">
      <div className="w-[40%] h-full">
        <CardPeliculas
          title="Paseo"
          image="https://m.media-amazon.com/images/M/MV5BZTlkMWUyNDQtNjBkMi00ZmM5LTljYTMtOGNlZjliMTUzZTA1XkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_.jpg"
          description="Palícula pa mala"
          edad="7 anos"
          duracion="69 mins"
        />
      </div>
      <div className="w-3/5 bg-yellow-200">Hola aca deben estar las sillas</div>
    </main>
  );
};

export default MoviesContainer;
