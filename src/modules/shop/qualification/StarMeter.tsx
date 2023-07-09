'use client'

import Star from "./Star"
import { starMeterProps } from "../types/Props"

export default function StarMeter({type}: starMeterProps ) {
  const maxStar = [0,1,2,3,4]

  return (
    <div className="w-[90%] flex-center px-2 xl:p-[5%] gap-x-1 overflow-x-auto scrollbar-small">
      {
        maxStar.map(value => {
          return (
            <Star key={value} type={type} qualification={value} />  
          )
        })
      }
    </div>
  )
}