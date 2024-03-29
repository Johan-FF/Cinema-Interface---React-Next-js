'use client'

import { theaterListProps } from "../types/Props"

export default function TheaterList(
  {selectedTheater,theaters, setSelectedTheater}: theaterListProps
) {
  const handleTheaterClick = (theaterId: string) => {
    setSelectedTheater(theaterId)
  }

  return (
    <section className="w-[100%] h-[60%] flex-col-center bg-secondary-opacity shadow-big">
      <h1 className="text-center text-[25px] md:text-[48px] font-bold mb-10 border-b-2 border-b-primary w-[100%] md:w-[80%] shadow-big"> Salas</h1>
      <ul className="flex justify-center w-full p-1 md:p-2 text-center overflow-x-auto scrollbar-small">
        {theaters.map((theater, index) => (
          <li
            key={index}
            className={`p-1 md:p-2 rounded-lg w-[30%] md:w-[20%] cursor-pointer m-1 md:m-2 border ${selectedTheater === theater.id ? "bg-secondary border-secondary" : "bg-tertiary hover:bg-tertiary-opacity border-primary hover:border-secondary"} shadow-big`}
            onClick={() =>
              selectedTheater === theater.id
                ? setSelectedTheater('')
                : handleTheaterClick(theater.id)
            }
          >
            Sala: {theater.idTheater} <br />
            Día: {theater.day}
          </li>
        ))}
      </ul>
    </section>
  )
}