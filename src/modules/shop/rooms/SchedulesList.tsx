'use client'

import { schedulesListProps } from "@/app/types/Props"

export default function SchedulesList({selectedMultiplex, multiplexes}: schedulesListProps ) {
  return (
    <section className="h-[35%] w-[100%] mt-[2%] bg-secondary-opacity shadow-big flex-col-center">
      {selectedMultiplex && (
        <span className="flex-col-center size-all">
            <h3 className="text-center mt-2 md:mt-[25px] text-opacity-90 text-[15px] mb-2 md:mb-0 md:text-[25px] w-[95%] md:w-[80%] ">
              Horarios para{" "}
              {multiplexes.find((theater) => theater.id === selectedMultiplex)?.name}
            </h3>
          <ul className="flex gap-0.5 w-[95%] md:w-[90%] overflow-x-auto my-1 md:my-5 px-2 md:px-5 scrollbar-small pb-1 md:pb-2 border-b-2 border-b-primary shadow-big">
            {multiplexes.find((theater) => theater.id === selectedMultiplex)
              ?.showtimes.map((showtime, index) => (
                <li
                  key={`${showtime}-${index}`}
                  className="border bg-tertiary hover:bg-tertiary-opacity border-primary hover:border-secondary p-1 md:p-2 min-w-[33%] md:min-w-[20%] xl:min-w-[15%] text-center rounded-md cursor-pointer shadow-big"
                  onClick={() => console.log(showtime)}
                >
                  {showtime}
                </li>
              ))}
          </ul>
        </span>
      )}
    </section>
  )
}