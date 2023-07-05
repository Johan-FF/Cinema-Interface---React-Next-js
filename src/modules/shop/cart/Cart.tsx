'use client'

import { useState } from 'react'
import ModalButton from "@/app/components/ModalButton"
import CartHeader from './CartHeader'
import CartNavBar from './CartNavBar'
import CartSummary from './CartSummary'

export default function Cart() {
  const [showCartModal, setShowCartModal] = useState(false)
  const [typeMenu, setTypeMenu] = useState<'movie'|'snack'>('movie')

  return (
    <ModalButton message='' showModal={showCartModal} setShowModal={setShowCartModal} >
      <article className="h-[90%] w-[90%] md:w-[60%] p-[5%] overflow-y-auto scrollbar-small bg-secondary shadow-big flex flex-col">
        <CartHeader showCartModal={setShowCartModal}/>
        <CartNavBar setTypeMenu={setTypeMenu}/>
        <CartSummary typeMenu={typeMenu} setShowCartModal={setShowCartModal}/>
      </article>
    </ModalButton>
  )
}