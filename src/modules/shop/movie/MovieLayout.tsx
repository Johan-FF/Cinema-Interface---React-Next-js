
import React from "react"
import CardMovie from "./CardMovie"
import { movieLayoutProps } from "@/app/types/Props"

export default function MovieLayout({children}: movieLayoutProps ) {
  return (
    <main className="flex flex-col xl:flex-row w-[100%] h-[100vh] min-h-[100vh] xl:h-[100vh]">

      <section className="w-[100%] xl:w-[40%] h-[100vh] xl:h-[100%] bg-tertiary flex-center">
        <CardMovie
          isInHome={false}
          id=""
          title="Paseo"
          url="https://m.media-amazon.com/images/M/MV5BZTlkMWUyNDQtNjBkMi00ZmM5LTljYTMtOGNlZjliMTUzZTA1XkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_.jpg"
          description="Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala"
          age="7 anos"
          duration="69 mins"
        />
      </section>

      <article className="w-[100%] xl:w-[60%] h-[100vh] min-h-[100vh] xl:h-[100%]">
        {children}
      </article>
    </main>
  )
}
