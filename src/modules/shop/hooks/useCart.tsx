import React, { createContext, useContext, useEffect, useState } from 'react'
import { Snack } from '../types/Interfaces'
import { Movie } from '@/app/types/Interfaces'
import { KEY_CART_CONTENT } from '@/app/environment'
import Account from '@/app/services/Account'

interface CartContextType {
  movie: Movie,
  setMovie: (movie: Movie) => void,
  chairGeneral: string[],
  setChairGeneral: (chair: string[]) => void,
  chairPreferential: string[],
  setChairPreferential: (chair: string[]) => void,
  productList: Snack[],
  addProduct: (snack: Snack) => void,
  decreaseProduct: (id: string) => void,
  removeProduct: (id: string) => void,
  getTotalPrice: () => number,
  getTotalPoints: () => number,
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

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
  const account: Account = Account.getInstance()
  const [productList, setProductList] = useState<Snack[]>([])
  const [movie, setMovie] = useState<Movie>({
    type: '',
    id: '',
    title: '',
    synopsis: '',
    age: '',
    duration: '',
    imgUrl: ''
  })
  const [chairGeneral, setChairGeneral] = useState<string[]>([])
  const [chairPreferential, setChairPreferential] = useState<string[]>([])

  const addProduct = (snack: Snack) => {
    setProductList((prevProductList) => {
      const index: number = prevProductList.findIndex((product: Snack) => product.id === snack.id)
      if (index === -1)
        return [{ ...snack, count: 1 }, ...prevProductList]
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
    const points: number = parseFloat(account.getPointsSnack())
    productList.map((snack: Snack) => { count += (points * snack.count) })
    return count
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartValue = window.localStorage.getItem(KEY_CART_CONTENT)
      if (cartValue !== null) {
        const objectCart = JSON.parse(cartValue)
        setChairGeneral(objectCart.cartChairGeneral)
        setChairPreferential(objectCart.cartChairPreferential)
        setMovie(objectCart.cartMovie)
        setProductList(objectCart.cartProductList)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartValue = window.localStorage.getItem(KEY_CART_CONTENT)
      window.localStorage.setItem(
        KEY_CART_CONTENT,
        JSON.stringify({
          cartMovie: movie,
          cartChairGeneral: chairGeneral,
          cartChairPreferential: chairPreferential,
          cartProductList: productList,
        })
      )
    }
  }, [movie, chairGeneral, chairPreferential, productList])

  const cartContextValue: CartContextType = {
    movie,
    setMovie,
    chairGeneral,
    setChairGeneral,
    chairPreferential,
    setChairPreferential,
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
