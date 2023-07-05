'use client'

import { cartHeaderProps } from "../types/Props"

export default function CartHeader( {showCartModal}: cartHeaderProps ) {
  return (
    <section className="flex justify-between w-full p-5 border-b-2 border-primary bg-secondary-opacity shadow-big">
    <h3 className="text-3xl font-bold"> Resumen de compra</h3>
    <button className=" text-3xl font-bold " onClick={() => showCartModal(false)}>
      X
    </button>
  </section>
  )
}