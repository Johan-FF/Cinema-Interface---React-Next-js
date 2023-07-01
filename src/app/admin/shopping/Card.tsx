import { useState, useCallback } from 'react'
import props from "@/app/types/props/CardProps"
import Link from "next/link"
import Cart from "@/app/services/cart"

export default function Card({url,imgUrl,productPrice,productName,productId}: props) {
 

const handleAddToCart = () => {
  Cart.getInstance().addProductToCart(productId);
 }
  return (
    <>
    <Link href={url} className="flex w-[100%] md:w-[50%] h-[20vh] bg-secondary-opacity border border-secondary rounded-lg hover:bg-secondary hover:border-secondary-opacity cursor-pointer"
    onClick={handleAddToCart}>
      <img className="w-[50%] rounded-lg" src={imgUrl} alt={productName}/>
      <div className="flex flex-col justify-around p-4">
          <h5 className="mb-2 text-2xl font-bold text-primary">
            {productName}
          </h5>
          <p className="mb-3 font-normal text-tertiary-opacity">
            ${productPrice}
          </p>
      </div>
    </Link>
    </>
  )
}