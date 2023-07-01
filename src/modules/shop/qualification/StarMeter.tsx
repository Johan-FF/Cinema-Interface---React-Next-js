'use client'

import { useState } from "react"
import Star from "./Star"

export default function StarMeter() {
  const maxStar = [0,1,2,3,4]
  const [countSelected, setCountSelected] = useState(0)

  return (
    <div className="w-[90%] flex-center px-2 xl:p-[5%] gap-x-1 overflow-x-auto scrollbar-small">
      {
        maxStar.map(value => {
          return (
            <Star key={value} func={()=>{}} />  
          )
        })
      }
    </div>
  )
}