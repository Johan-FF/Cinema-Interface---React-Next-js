"use client";
import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

interface Multiplex {
  id: number;
  name: string;
  showtimes: string[];
}

const Peliculas: React.FC = () => {
  const [selectedMultiplex, setSelectedMultiplex] = useState<number | null>(
    null
  );
  const movie = {
    title: "Spider-Man: a través del Spider-Verso",
    duration: "1h 30min",
    director: "Joaquim Dos Santos",
    synopsis:
      "Después de reunirse con Gwen Stacy, el amigable vecino de tiempo completo de Brooklyn Spiderman, es lanzado a través del multiverso, donde se encuentra a un equipo de gente araña encomendada con proteger su mera existencia.",
  };
  const multiplexes: Multiplex[] = [
    { id: 1, name: "Titán", showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    {
      id: 2,
      name: "Unicentro",
      showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "9:00 PM"],
    },
    {
      id: 3,
      name: "Plaza Central",
      showtimes: ["12:00 PM", "3:00 PM", "6:00 PM", "6:30 PM"],
    },
    {
      id: 4,
      name: "Gran Estación",
      showtimes: ["12:00 AM", "1:00 PM", "2:00 PM"],
    },
    {
      id: 5,
      name: "Embajador (centro)",
      showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "10:00 PM"],
    },
    {
      id: 6,
      name: "Las Américas",
      showtimes: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM", "12:00 PM"],
    },
    {
      id: 7,
      name: "Por si acaso",
      showtimes: ["11:00 AM", "2:00 PM", "5:00 PM"],
    },
  ];
  const handleMultiplexClick = (multiplexId: number) => {
    setSelectedMultiplex(multiplexId);
  };
  return (
    <div
      className="flex flex-wrap p-4"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        top: 0,
        left: 0,
        backgroundColor: "red",
      }}
    >
      <div
        className="bg-blue-800 rounded-lg p-4 flex-none w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
        style={{
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          height: "92%",
        }}
      >
        <div className="flex flex-col gap-4 md:flex md:min-h-0">
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/1/0/2/0/40201-9-esl-CO/23105f8ea438-la-banner-web-480x670px-1-.jpg"
            alt="Póster de la película"
            className="mx-auto object-cover rounded-lg border border-black w-full"
            style={{ maxHeight: "85%", maxWidth: "85%" }}
          />
          <div className="flex-grow flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-sm">Duración: {movie.duration}</p>
              <p className="text-sm">Director: {movie.director}</p>
            </div>
            <div className="flex-grow">
              <SimpleBar style={{ maxHeight: "120px" }}>
                <p className="text-sm">Sinopsis: {movie.synopsis}</p>
              </SimpleBar>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5">
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "48px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              textTransform: "uppercase",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            Cine Pacho
          </h1>
        </div>
        <div
          className="flex flex-wrap justify-center mt-12"
          style={{
            textAlign: "center",
          }}
        >
          {multiplexes.map((multiplex) => (
            <li
              key={multiplex.id}
              className={`p-2 rounded-lg cursor-pointer m-2 ${
                selectedMultiplex === multiplex.id
                  ? "bg-blue-500 text-white"
                  : "bg-yellow-500 text-black"
              }`}
              onClick={() =>
                selectedMultiplex === multiplex.id
                  ? setSelectedMultiplex(null)
                  : handleMultiplexClick(multiplex.id)
              }
            >
              {multiplex.name}
            </li>
          ))}
        </div>
        {selectedMultiplex && (
          <div className="flex flex-col items-center mt-12">
            <div
              className="text-center"
              style={{
                marginTop: "25px",
              }}
            >
              <h3>
                Horarios para{" "}
                {
                  multiplexes.find(
                    (theater) => theater.id === selectedMultiplex
                  )?.name
                }
              </h3>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {multiplexes
                .find((theater) => theater.id === selectedMultiplex)
                ?.showtimes.map((showtime, index) => (
                  <li
                    key={`${showtime}-${index}`}
                    className="border border-black p-4 text-center rounded-md cursor-pointer"
                    onClick={() => console.log(showtime)}
                    style={{ backgroundColor: "yellow" }}
                    onMouseOver={(e: React.MouseEvent<HTMLLIElement>) =>
                      ((e.target as HTMLLIElement).style.borderColor = "blue")
                    }
                    onMouseOut={(e: React.MouseEvent<HTMLLIElement>) =>
                      ((e.target as HTMLLIElement).style.borderColor = "black")
                    }
                  >
                    {showtime}
                  </li>
                ))}
            </ul>
            <div style={{ marginTop: "20px" }} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Peliculas;
