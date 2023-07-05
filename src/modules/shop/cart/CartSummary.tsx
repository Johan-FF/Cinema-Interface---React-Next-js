'use client'

import MovieSummary from "./MovieSummary"
import SnackSummary from "./SnackSummary"
import { cartSummaryProps } from "../types/Props"

export default function CartSummary({typeMenu, setShowCartModal}: cartSummaryProps ) {

  return (
    <section className='w-full '>
      {typeMenu === "movie" ?
        <MovieSummary/>
        :
        <SnackSummary/>
      }
      <div className="flex items-center justify-end pt-6 ">
        <button className="bg-tertiary-opacity hover:bg-tertiary font-bold uppercase px-6 py-3 rounded-lg" type="button" onClick={() => setShowCartModal(false)}>
          Confirmar compra
        </button>
      </div>

    </section>
  )
}