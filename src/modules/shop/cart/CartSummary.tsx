'use client'

import MovieSummary from "./MovieSummary"
import SnackSummary from "./SnackSummary"
import { cartSummaryProps } from "../types/Props"
import RedButton from "@/app/components/RedButton"
import { useClient } from "../hooks/useClient"
import { createInvoiceProxy } from "../services/InvoicesService"
import { useCart } from "../hooks/useCart"
import { productFormater } from "@/app/helpers/DateFormater"
import { useState } from "react"

export default function CartSummary({typeMenu, setShowCartModal}: cartSummaryProps ) {
  const { schedule, idTheater, identification } = useClient()
  const { movie, chairGeneral, chairPreferential, productList } = useCart()
  const [controlMessage, setControlMessage] =useState('')
  const [hasError, setHasError] = useState(false)

  const sendInvoice = async () => {
    setShowCartModal(false)
    await createInvoiceProxy({
      type: 'Factura',
      idMovie: movie.id,
      identification: identification,
      idTheater: idTheater,
      schedule: schedule,
      chairGeneral: chairGeneral,
      chairPreferential: chairPreferential,
      snacks: productFormater(productList)
    }).then(response => {
      setHasError(
        response.toLowerCase().includes('inválido') ||
        response.toLowerCase().includes('inválida')
      )
      setControlMessage(response)
    })
  }

  return (
    <section className='w-full '>
      {typeMenu === "movie" ?
        <MovieSummary/>
        :
        <SnackSummary/>
      }
      <span onClick={() => sendInvoice()} className="flex items-center justify-end pt-6 ">
        <RedButton content="Confirmar compra" leftRounded={true} rightRounded={true} />
      </span>
      {
        controlMessage!=='' ?
        <span className={`${hasError?'label-error':'label-correct'} flex items-center justify-start pt-6`}>
          {controlMessage}
        </span> : <></>
      }
    </section>
  )
}