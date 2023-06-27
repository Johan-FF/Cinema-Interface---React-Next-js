import ChairDescription from "./ChairDescription"
import CardPeliculas from "./CardMovie"
import Cinema from "./Cinema"
import RedButton from "@/app/components/RedButton"
import BlueButton from "@/app/components/BlueButton"
import Link from "next/link"

export default function Movie() {
  return (
    <main className="flex flex-col xl:flex-row w-[100%]  xl:h-[100vh]">

      <section className="w-[100%] xl:w-[40%] h-[100vh] xl:h-[100%] bg-tertiary flex justify-center items-center">
        <CardPeliculas
          movieId=""
          movieTitle="Paseo"
          movieUrl="https://m.media-amazon.com/images/M/MV5BZTlkMWUyNDQtNjBkMi00ZmM5LTljYTMtOGNlZjliMTUzZTA1XkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_.jpg"
          movieDescription="Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala"
          movieAge="7 anos"
          movieDuration="69 mins"
        />
      </section>

      <article className="w-[100%] xl:w-[60%] h-[100vh] xl:h-[100%]">
        <section className="h-[80%] w-[100%] p-5 flex flex-col md:flex-row bg-secondary shadow-2xl shadow-black">
          <Cinema/>
          <ChairDescription/>
        </section>

        <section className="h-[20%] w-[100%] flex justify-center items-center">
          <div className="h-[30%] flex">
            <Link href="/shopping">
              <BlueButton content="Volver" leftRounded={true} rightRounded={false} />
            </Link>
            <RedButton content="Pagar" leftRounded={false} rightRounded={true} />
          </div>
        </section>
      </article>
    </main>
  )
}
