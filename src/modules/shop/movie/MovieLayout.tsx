
import React from "react"
import CardMovie from "./CardMovie"
import { movieLayoutProps } from "../types/Props"
import { useCart } from "../hooks/useCart"

export default function MovieLayout({children}: movieLayoutProps ) {
  const { movie } = useCart()

  return (
    <main className="flex flex-col xl:flex-row w-[100%] h-[100vh] min-h-[100vh] xl:h-[100vh]">

      <section className="w-[100%] xl:w-[40%] h-[100vh] xl:h-[100%] bg-tertiary flex-center">
        <CardMovie
          isInHome={false}
          id={movie.id}
          title={movie.title}
          url={movie.imgUrl}
          description={movie.synopsis}
          age={movie.age+" años"}
          duration={movie.duration+" min"}
        />
      </section>

      <article className="w-[100%] xl:w-[60%] h-[100vh] min-h-[100vh] xl:h-[100%]">
        {children}
      </article>
    </main>
  )
}
