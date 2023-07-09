"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import MovieLayout from "../../../../../modules/shop/movie/MovieLayout"
import Background from "@/app/components/Background"
import RedButton from "@/app/components/RedButton"
import BlueButton from "@/app/components/BlueButton"
import TheaterList from "../../../../../modules/shop/rooms/MultiplexList"
import SchedulesList from "../../../../../modules/shop/rooms/SchedulesList"
import { Theater } from "@/app/modules/multiplex/types/Interfaces"
import { withAuth } from "@/app/middlewares/withAuth"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { getAllSchedulesByMultiplexProxy } from "@/app/modules/multiplex/services/SchedulesService"
import Account from "@/app/services/Account"
import CartProvider from "@/app/modules/shop/hooks/useCart"

const Rooms: NextPage = () => {
  const router = useRouter()
  const { idMovie } = router.query
  const [selectedTheater, setSelectedTheater] = useState('')
  const [theaters, setTheaters] = useState<Theater[]>([])

  useEffect(() => {
    const account: Account = Account.getInstance()
    const existsMovieId: string = idMovie?.toString() ? idMovie.toString() : ''
    getAllSchedulesByMultiplexProxy(existsMovieId,account.getIDMultiplex())
      .then(response => {
        setTheaters(response)
      })
  }, [])

  return (
    <CartProvider>
      <MovieLayout>
        <Background>
            <section className="w-[100%] h-[80%] p-[2%] shadow-big">
              <div className="shadow-big w-[100%] h-[100%] p-3 flex-col-center">
                <TheaterList setSelectedTheater={setSelectedTheater} selectedTheater={selectedTheater} theaters={theaters} />
                <SchedulesList theaters={theaters} selectedTheater={selectedTheater}/>
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
    </CartProvider>
  )
}

export default withAuth(Rooms)