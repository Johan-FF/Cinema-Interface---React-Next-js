"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import MovieLayout from "../../../../modules/shop/movie/MovieLayout"
import Background from "@/app/components/Background"
import RedButton from "@/app/components/RedButton"
import BlueButton from "@/app/components/BlueButton"
import TheaterList from "../../../../modules/shop/rooms/MultiplexList"
import SchedulesList from "../../../../modules/shop/rooms/SchedulesList"
import { Theater } from "@/app/modules/multiplex/types/Interfaces"
import { withAuth } from "@/app/middlewares/withAuth"
import { NextPage } from "next"
import { getAllSchedulesByMultiplexProxy } from "@/app/modules/multiplex/services/SchedulesService"
import Account from "@/app/services/Account"
import CartProvider from "@/app/modules/shop/hooks/useCart"
import { KEY_CART_CONTENT } from "@/app/environment"

const Rooms: NextPage = () => {
  const [selectedTheater, setSelectedTheater] = useState('')
  const [theaters, setTheaters] = useState<Theater[]>([])

  useEffect(() => {
    const account: Account = Account.getInstance()
    let idMovie: string = ''
    if (typeof window !== 'undefined') {
      const cartValue = window.localStorage.getItem(KEY_CART_CONTENT)
      if (cartValue !== null) {
        const objectCart = JSON.parse(cartValue)
        const newID = objectCart.cartMovie.id
        idMovie = newID
      }
    }
    const idMultiplex: string = account.getIDMultiplex()
    async function fetch() {
      getAllSchedulesByMultiplexProxy(idMovie,idMultiplex)
      .then(response => {
        setTheaters(response)
      })
    }
    fetch()
  }, [])

  return (
    <CartProvider>
      <MovieLayout>
        <Background hideContent={false}>
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