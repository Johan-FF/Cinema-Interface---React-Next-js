import { useState } from "react"
import Star from "./Star"

export default function StarMeter() {
  const maxStar = [0,1,2,3,4]
  const [countSelected, setCountSelected] = useState(0)

  return (
    <div className="flex p-[5%] gap-x-1">
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