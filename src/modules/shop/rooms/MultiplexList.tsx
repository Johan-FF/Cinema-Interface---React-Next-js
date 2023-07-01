'use client'

import { multiplexListProps } from "@/app/types/Props"

export default function MultiplexList(
  {selectedMultiplex,multiplexes, setSelectedMultiplex}: multiplexListProps
) {
  const handleMultiplexClick = (multiplexId: number) => {
    setSelectedMultiplex(multiplexId)
  }

  return (
    <section className="w-[100%] h-[60%] flex-col-center bg-secondary-opacity shadow-big">
      <h1 className="text-center text-[25px] md:text-[48px] font-bold mb-10 border-b-2 border-b-primary w-[100%] md:w-[80%] shadow-big"> Multiplex</h1>
      <ul className="flex flex-wrap justify-center p-1 md:p-2 text-center">
        {multiplexes.map((multiplex, index) => (
          <li
            key={index}
            className={`p-1 md:p-2 rounded-lg cursor-pointer m-1 md:m-2 border ${selectedMultiplex === multiplex.id ? "bg-secondary border-secondary" : "bg-tertiary hover:bg-tertiary-opacity border-primary hover:border-secondary"} shadow-big`}
            onClick={() =>
              selectedMultiplex === multiplex.id
                ? setSelectedMultiplex(-1)
                : handleMultiplexClick(multiplex.id)
            }
          >
            {multiplex.name}
          </li>
        ))}
      </ul>
    </section>
  )
}