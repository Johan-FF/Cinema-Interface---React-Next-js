'use client'

import Card from "../snacks/Card"
import { useCart } from "../hooks/useCart"
import { Snack } from "../types/Interfaces"
import Account from "@/app/services/Account"
import { useEffect, useState } from "react"

export default function SnackSummary() {
  const {
    productList, addProduct, decreaseProduct, removeProduct, getTotalPrice, getTotalPoints
  } = useCart()
  const snackPoints = Account.getInstance().getPointsSnack()

  return (
    <>
      <div className='p-6 w-[100%] flex flex-col gap-1 max-h-[70vh] overflow-y-auto scrollbar-small'>
        {productList.map((item: Snack) => {
          return (
            <section key={item.id} className='flex-center shadow-big p-2 mb-5 bg-secondary h-[30%]'>
              <Card
                snack={item}
              />
              <div className='w-[50%] flex-col-center'>
                <p>Puntos por producto: {snackPoints}</p>
                <p>Puntos por cantidad:{parseFloat(snackPoints) * item.count}</p>
                <p>Cantidad: {item.count}</p>
              </div>
              <div className='w-[5%] h-full grid'>
                <button className="button-red rounded-2xl" onClick={() => decreaseProduct(item.id)}>
                  <svg className="w-6 h-6 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                  </svg>
                </button>
                <button className="button-red rounded-2xl" onClick={() => addProduct(item)}>
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>

                </button>
                <button className="button-red rounded-2xl" onClick={() => removeProduct(item.id)}>
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>
            </section>
          )
        })}
      </div>
      <section className="mt-10 p-6 shadow-big border-b-2 border-b-primary bg-secondary-opacity">
        <strong className='mb-3 pl-5 text-2xl w-full rounded-lg border-b-2 block border-primary'>Comidas</strong>
        <div className="p-3 m-3 border-b-2 border-b-primary shadow-big bg-secondary grid grid-cols-2">
          <p>Total compra:</p> <span className='text-primary text-opacity-90 pl-3'>{getTotalPrice()}</span>
          <p>Puntos a añadir: </p> <span className='text-primary text-opacity-90 pl-3'>{getTotalPoints()}</span>
        </div>
      </section>
    </>
  )
}