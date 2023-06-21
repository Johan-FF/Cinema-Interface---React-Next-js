import React from "react";
import CardPeliculas from "./cardPeliculas";

const MoviesContainer = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-2/5 flex items-center justify-center">
        <CardPeliculas
          title="monda"
          image="https://m.media-amazon.com/images/M/MV5BZTlkMWUyNDQtNjBkMi00ZmM5LTljYTMtOGNlZjliMTUzZTA1XkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_.jpg"
          description="no se que va aca"
          edad="7 anos"
          duracion="69 mins"
        />
      </div>
      <div className="w-3/5 bg-yellow-200">Hola aca deben estar las sillas</div>
    </div>
  );
};

export default MoviesContainer;
