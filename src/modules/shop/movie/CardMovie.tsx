'use client'

import Image from "next/image"
import { movieProps } from "../types/Props"
import { useRouter } from "next/navigation"
import { KEY_CART_CONTENT } from "@/app/environment"

export default function CardMovie (
  {isInHome,title,url,description,age,duration,id}: movieProps 
) {
  const router = useRouter()

  const redirectAndSetMovie = () => {
    if(isInHome && typeof window !== 'undefined') {
      const cartValue = window.localStorage.getItem(KEY_CART_CONTENT)
      if (cartValue !== null) {
        const objectCart = JSON.parse(cartValue)
        objectCart.cartMovie = {
          id: id,
          isInHome: false,
          title: title,
          imgUrl: url,
          synopsis: description,
          age: age,
          duration: duration
        }
        window.localStorage.setItem(
          KEY_CART_CONTENT,
          JSON.stringify(objectCart)  
        )
      }
      router.push('/admin/shopping/rooms')
    }
  }

  return (
    <article onClick={() => redirectAndSetMovie()} className={`${isInHome ? 'ml-[10%] w-[100%] h-[70%] md:ml-auto md:w-[49%] md:h-[55%] xl:w-[33%] xl:h-[90%] hover:bg-secondary-opacity cursor-pointer': 'w-[80%] h-[90%] cursor-default'} max-w-[80%] xl:max-w-[80%] md:max-w-[60%] max-h-[90%] bg-secondary text-primary p-[3vh] shadow-big overflow-y-auto scrollbar-small`}>
      <section className="w-[100%]">
        <h2 className="font-bold text-[35px] w-[100%] text-center">{title}</h2>
        <div className="flex flex-row w-[100%] justify-center mb-5">
          <p className="w-2/5 bg-quaternary flex-center rounded-full text-secondary text-base">{age}</p>
          <p className="w-2/5 bg-primary flex-center rounded-full text-secondary text-base">{duration}</p>
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
    </article>
  )
}