'use client'

import { useClient } from "../hooks/useClient"
import { schedulesListProps } from "../types/Props"

export default function SchedulesList(
  {selectedTheater, theaters}: schedulesListProps 
) {
  const { setSchedule, setIdTheater, setDay } = useClient()

  const setSelectedSchedule = (schedule: string) => {
    setSchedule(schedule)
    const theater = theaters.find((theater) => theater.id === selectedTheater)
    setIdTheater(theater?theater.idTheater:'')
    setDay(theater?theater.day:'')
  }

  return (
    <section className="h-[35%] w-[100%] mt-[2%] bg-secondary-opacity shadow-big flex-col-center">
      {selectedTheater && (
        <span className="flex-col-center size-all">
            <h3 className="text-center mt-2 md:mt-[25px] text-opacity-90 text-[15px] mb-2 md:mb-0 md:text-[25px] w-[95%] md:w-[80%] ">
              Horarios para sala{" "}
              {theaters.find((theater) => theater.id === selectedTheater)?.idTheater}
            </h3>
          <ul className="flex gap-0.5 w-[95%] md:w-[90%] overflow-x-auto my-1 md:my-5 px-2 md:px-5 scrollbar-small pb-1 md:pb-2 border-b-2 border-b-primary shadow-big">
            {theaters.find((theater) => theater.id === selectedTheater)
              ?.hours.map((showtime, index) => (
                <li
                  key={`${showtime}-${index}`}
                  className="border bg-tertiary hover:bg-tertiary-opacity border-primary hover:border-secondary p-1 md:p-2 min-w-[33%] md:min-w-[20%] xl:min-w-[15%] text-center rounded-md cursor-pointer shadow-big"
                  onClick={() => setSelectedSchedule(showtime)}
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