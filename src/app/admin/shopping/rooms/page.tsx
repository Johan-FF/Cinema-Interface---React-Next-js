"use client"

import { useState } from "react"
import Link from "next/link"
import MovieLayout from "../../../../modules/shop/movie/MovieLayout"
import Background from "@/app/components/Background"
import RedButton from "@/app/components/RedButton"
import BlueButton from "@/app/components/BlueButton"
import MultiplexList from "../../../../modules/shop/rooms/MultiplexList"
import SchedulesList from "../../../../modules/shop/rooms/SchedulesList"
import { Multiplex } from "@/app/modules/director/types/Interfaces"
import { withAuth } from "@/app/middlewares/withAuth"
import { NextPage } from "next"

const multiplexes: Multiplex[] = [
  { type: 'multiplex', id: 1, name: "Titán", showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"] },
  { type: 'multiplex', id: 2, name: "Unicentro", showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "9:00 PM"], },
  { type: 'multiplex', id: 3, name: "Plaza Central", showtimes: ["12:00 PM", "3:00 PM", "6:00 PM", "6:30 PM"], },
  { type: 'multiplex', id: 4, name: "Gran Estación", showtimes: ["12:00 AM", "1:00 PM", "2:00 PM"], },
  { type: 'multiplex', id: 5, name: "Embajador (centro)", showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "10:00 PM"], },
  { type: 'multiplex', id: 6, name: "Las Américas", showtimes: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM", "12:00 PM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM", "12:00 PM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM", "12:00 PM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM", "12:00 PM"], },
  { type: 'multiplex', id: 7, name: "Por si acaso", showtimes: ["11:00 AM", "2:00 PM", "5:00 PM"], },
]

const Rooms: NextPage = () => {
  const [selectedMultiplex, setSelectedMultiplex] = useState(-1)

  return (
    <MovieLayout>
      <Background viewProducts={true}>
        
          <section className="w-[100%] h-[80%] p-[2%] shadow-big">
            <div className="shadow-big w-[100%] h-[100%] p-3 flex-col-center">
              <MultiplexList setSelectedMultiplex={setSelectedMultiplex} selectedMultiplex={selectedMultiplex} multiplexes={multiplexes} />
              <SchedulesList multiplexes={multiplexes} selectedMultiplex={selectedMultiplex}/>
            </div>
          </section>
          <section className="h-[20%] w-[100%] flex-center">
            <div className="h-[30%] flex-center py-5">
              <Link href={'/admin/shopping'}>
                <RedButton leftRounded={true} rightRounded={false} content="Volver"/>
              </Link>
              <Link href={'/admin/shopping/movie'}>
                <BlueButton leftRounded={false} rightRounded={true} content="Sillas"/>
              </Link>
            </div>
          </section>
      </Background>
    </MovieLayout>
  )
}

export default withAuth(Rooms)