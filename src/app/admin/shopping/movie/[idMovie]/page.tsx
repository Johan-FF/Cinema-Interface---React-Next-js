'use client'

import ChairDescription from "../../../../../modules/shop/movie/ChairDescription"
import MovieLayout from "../../../../../modules/shop/movie/MovieLayout"
import Cinema from "../../../../../modules/shop/movie/Cinema"
import RedButton from "@/app/components/RedButton"
import BlueButton from "@/app/components/BlueButton"
import Link from "next/link"
import Background from "@/app/components/Background"
import { NextPage } from "next"
import { withAuth } from "@/app/middlewares/withAuth"
import { useRouter } from "next/router"
import CartProvider from "@/app/modules/shop/hooks/useCart"

const Movie: NextPage = () => {
  const router = useRouter()
  const { idMovie } = router.query

  return (
    <CartProvider>
      <MovieLayout>
        <Background>
          <div className="size-all">
            <section className="h-[80%] w-[100%] p-5 shadow-big">
              <span className="shadow-big flex flex-col md:flex-row rounded-md p-3 h-[100%] w-[100%]">
                <Cinema />
                <ChairDescription />
              </span>
            </section>
            <section className="h-[20%] w-[100%] flex-center">
              <div className="h-[30%] flex">
                <Link href="/admin/shopping/rooms">
                  <BlueButton content="Volver" leftRounded={true} rightRounded={false} />
                </Link>
                <RedButton content="Pagar" leftRounded={false} rightRounded={true} />
              </div>
            </section>
          </div>
        </Background>
      </MovieLayout>
    </CartProvider>
  )
}

export default withAuth(Movie)