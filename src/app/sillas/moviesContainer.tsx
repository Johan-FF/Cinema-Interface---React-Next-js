import CardPeliculas from "./cardPeliculas"
import Silla from "./Silla"

export default function MoviesContainer() {
  const preferencial: [] = []
  const general = [] 

  function initSillas(sillaList: []) {
    for(let i=0; i<20; i++){
      sillaList.push(<Silla/>)
    }
  }

  return (
    <main className="flex flex-col md:flex-row w-screen h-screen">
      <div className="w-[40%] h-full bg-tertiary flex justify-center items-center">
        <CardPeliculas
          title="Paseo"
          image="https://m.media-amazon.com/images/M/MV5BZTlkMWUyNDQtNjBkMi00ZmM5LTljYTMtOGNlZjliMTUzZTA1XkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_.jpg"
          description="Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala"
          edad="7 anos"
          duracion="69 mins"
        />
      </div>
      <div className="w-[60%] bg-primary">
        <section className="h-[80%] w-full p-5">
          {
            
          }
        </section>
      </div>
    </main>
  )
}
