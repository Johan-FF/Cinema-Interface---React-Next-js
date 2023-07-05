'use client'

import Link from "next/link"
import Image from "next/image"
import { movieProps } from "../types/Props"

export default function CardMovie (
  {isInHome,title,url,description,age,duration}: movieProps 
) {
  return (
    <Link href={`${isInHome ?'/admin/shopping/rooms':''}`} className={`${isInHome ? 'ml-[10%] w-[100%] h-[70%] md:ml-auto md:w-[49%] md:h-[55%] xl:w-[33%] xl:h-[90%] hover:bg-secondary-opacity cursor-pointer': 'w-[80%] h-[90%] cursor-default'} max-w-[80%] xl:max-w-[80%] md:max-w-[60%] max-h-[90%] bg-secondary text-primary p-[3vh] shadow-big overflow-y-auto scrollbar-small`}>
      <section className="w-[100%]">
        <h2 className="font-bold text-[35px] w-[100%] text-center">{title}</h2>
        <div className="flex flex-row w-[100%] justify-center mb-5">
          <p className="w-2/5 bg-yellow-400 flex-center rounded-full text-secondary text-base">{age}</p>
          <p className="w-2/5 bg-blue-200 flex-center rounded-full text-secondary text-base">{duration}</p>
        </div>
      </section>
      <section className="w-[100%] flex-center">
        <Image src={url} alt={title} width={300} height={500}/>
      </section>
      {
        !isInHome ? 
        <section className="w-[100%] mt-5">
          <p className="text-base w-[100%] text-center">{description}</p>
        </section> : <></>
      }
    </Link>
  )
}