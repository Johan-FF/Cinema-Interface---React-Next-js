'use client'

import ChairDescription from "../../../../modules/shop/movie/ChairDescription"
import MovieLayout from "../../../../modules/shop/movie/MovieLayout"
import Cinema from "../../../../modules/shop/movie/Cinema"
import RedButton from "@/app/components/RedButton"
import BlueButton from "@/app/components/BlueButton"
import Link from "next/link"
import Background from "@/app/components/Background"
import { NextPage } from "next"
import { withAuth } from "@/app/middlewares/withAuth"
import { createInvoiceProxy } from "@/app/modules/shop/services/InvoicesService"
import { useCart } from "@/app/modules/shop/hooks/useCart"
import { useClient } from "@/app/modules/shop/hooks/useClient"
import { initChairsFormater, productFormater } from "@/app/helpers/DateFormater"

const Movie: NextPage = () => {
  const {movie, productList, chairGeneral, chairPreferential} = useCart()
  const {idTheater, identification, schedule} = useClient()

  const sendInvoice = async () => {
    await createInvoiceProxy({
      type: 'Factura',
      idMovie: movie.id,
      idTheater: idTheater,
      identification: identification,
      schedule: schedule,
      snacks: productFormater(productList),
      chairGeneral: initChairsFormater(chairGeneral),
      chairPreferential: initChairsFormater(chairPreferential)
    })
      .then(response => {
        console.log(response)
      })
  }

  return (
      <MovieLayout>
        <Background hideContent={false}>
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
                <span onClick={() => sendInvoice()}>
                  <RedButton content="Pagar" leftRounded={false} rightRounded={true} />
                </span>
              </div>
            </section>
          </div>
        </Background>
      </MovieLayout>
  )
}

Movie.displayName = 'Movie'
export default withAuth(Movie)