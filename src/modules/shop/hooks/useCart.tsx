import React, { createContext, useContext, useState } from 'react'
import { Snack } from '../types/Interfaces'

interface CartContextType {
  productList: Snack[],
  addProduct: (snack: Snack) => void,
  decreaseProduct: (id: string) => void,
  removeProduct: (id: string) => void,
  getTotalPrice: () => number,
  getTotalPoints: () => number,
}

const initialCartState = {
  productList: [],
  addProduct: (snack: Snack) => { },
  decreaseProduct: (id: string) => { },
  removeProduct: (id: string) => { },
  getTotalPrice: () => 0,
  getTotalPoints: () => 0,
}

export const CartContext = createContext<CartContextType>(initialCartState)

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe utilizarse dentro de un proveedor CartContext')
  }
  return context
}

interface CartProviderProps {
  children: React.ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const [productList, setProductList] = useState<Snack[]>([])

  const addProduct = (snack: Snack) => {
    setProductList((prevProductList) => {
      const index: number = prevProductList.findIndex((product: Snack) => product.id === snack.id)
      if (index === -1)
        return [{...snack, count: 1}, ...prevProductList ]
      prevProductList[index].count += 1
      return [...prevProductList]
    })
  }

  const decreaseProduct = (id: string) => {
    setProductList((prevProductList) => {
      const index: number = prevProductList.findIndex((product: Snack) => product.id === id)
      if (index === -1)
        return prevProductList
      if (prevProductList[index].count === 1)
        return prevProductList.filter((item) => item.id !== id)
      prevProductList[index].count -= 1
      return prevProductList
    })
  }

  const removeProduct = (id: string) => {
    setProductList((prevProductList) =>
      prevProductList.filter((item) => item.id !== id)
    )
  }

  const getTotalPrice = (): number => {
    let count: number = 0
    productList.map((snack: Snack) => { count += (parseFloat(snack.price) * snack.count) })
    return count
  }

  const getTotalPoints = (): number => {
    let count: number = 0
    productList.map((snack: Snack) => { count += (snack.points * snack.count) })
    return count
  }

  const cartContextValue: CartContextType = {
    productList,
    addProduct,
    decreaseProduct,
    removeProduct,
    getTotalPrice,
    getTotalPoints,
  }

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  )
}
