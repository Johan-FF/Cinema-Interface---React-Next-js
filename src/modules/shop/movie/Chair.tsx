'use client'

import { useEffect, useState } from "react"
import { chairProps } from "../types/Props"
import { useCart } from "../hooks/useCart"

export default function Chair({ id, isGeneral, chairs }: chairProps ) {
  const { chairGeneral, setChairGeneral, chairPreferential, setChairPreferential } = useCart()
  const [color, setColor] = useState('')
  const [isOcuppied, setIsOccupied] = useState(false)

  const setChair = () => {
    if(color==='chair-occupied'){
      if(chairs.includes(id))
        return
      if(isGeneral){
        setChairGeneral(
          chairGeneral.filter((item) => item !== id)
        )
        setColor('chair-general')
      }
      else{
        setChairPreferential(
          chairPreferential.filter((item) => item!==id)
        )
        setColor('chair-preferential')
      }
    } else {
      if(isGeneral)
        setChairGeneral([...chairGeneral, id])
      else
        setChairPreferential([...chairPreferential, id])
      setColor('chair-occupied')
    }
  }

  useEffect(() => {
    setIsOccupied(chairs.includes(id))
    if(isOcuppied)
      setColor('chair-occupied')
    else{
      if(isGeneral)
        setColor('chair-general')
      else
        setColor('chair-preferential')
    }
  }, [chairs])

  return (
    <button 
      onClick={() => setChair()}
      className={`bg-${color} w-[10%] h-[15%] rounded-full ${color==='chair-occupied'?'':'hover:bg-chair-free'}`}>
    </button>
  )
}