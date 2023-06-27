'use client'

import { useState } from "react"

export default function Chair() {
  const [clicked, setClicked] = useState(false)

  return (
    <button 
      onClick={() => {setClicked(!clicked)}} 
      className={`${clicked?'bg-tertiary':'bg-primary'} w-[10%] h-[15%] rounded-full hover:bg-tertiary-opacity`}>
    </button>
  )
}