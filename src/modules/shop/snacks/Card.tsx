'use client'

import { cardProps } from "@/app/types/Props"
import Link from "next/link"

export default function Card({url,imgUrl,price,name}: cardProps) {
  return (
    <Link href={url} className="flex w-[100%] md:w-[50%] h-[20vh] bg-secondary-opacity border border-secondary rounded-lg hover:bg-secondary hover:border-secondary-opacity cursor-pointer">
      <img className="w-[50%] rounded-lg" src={imgUrl} alt={name}/>
      <div className="flex flex-col justify-around p-4">
          <h5 className="mb-2 text-2xl font-bold">
            {name}
          </h5>
          <p className="mb-3 font-normal text-tertiary-opacity">
            ${price}
          </p>
      </div>
    </Link>
  )
}