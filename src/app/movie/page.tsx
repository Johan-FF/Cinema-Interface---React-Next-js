import CardPeliculas from "./CardMovie"
import Silla from "./Chair"

export default function Movie() {
  const getList = (max: number) => {
    let list = []
    for(let i=0; i<max; i++)
      list.push(i)
    return list
  }
  const rowLimit: number[] = getList(10)
  const preferencial: number[] = getList(20)
  const general: number[] = getList(40)
  const rowCode: string[] = ['A','B','C','D','E','F']

  return (
    <main className="flex flex-col xl:flex-row w-[100%]  xl:h-[100vh]">

      <section className="w-[100%] xl:w-[40%] h-[100vh] xl:h-[100%] bg-tertiary flex justify-center items-center">
        <CardPeliculas
          title="Paseo"
          image="https://m.media-amazon.com/images/M/MV5BZTlkMWUyNDQtNjBkMi00ZmM5LTljYTMtOGNlZjliMTUzZTA1XkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_.jpg"
          description="Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala Palícula pa mala"
          age="7 anos"
          duration="69 mins"
        />
      </section>

      <article className="w-[100%] xl:w-[60%] h-[100vh] xl:h-[100%]">
        <section className="h-[80%] w-[100%] p-5 flex flex-col md:flex-row bg-secondary shadow-2xl shadow-black">
          <div className="h-[100%] w-[100%] md:w-[70%] pr-3 flex flex-col justify-evenly items-center rounded-xl shadow-2xl bg-secondary-opacity">
            <h3 className="font-bold text-5xl w-[100%] text-center border-b-2 rounded-lg text-primary mb-10 shadow-2xl shadow-black py-2 ml-3">Sala 2</h3>
            <div className="h-[60%] w-[100%] flex">
              <span className="flex flex-col justify-between h-[100%] w-[10%] pt-[8%] pb-[2%]">
                {
                  rowCode.map(value => {
                    return(
                      <span className="w-[100%] h-[9%] flex justify-center items-center font-bold text-primary">{value}</span>
                    )
                  })
                }
              </span>
              <div className="h-[100%] w-[90%] flex flex-col">
                <span className="flex justify-between w-[100%] h-[10%]">
                  {
                    rowLimit.map(value => {
                      return (
                        <span className="w-[10%] flex justify-center text-primary font-bold">{value+1}</span>
                      )
                    })
                  }
                </span>
                <span className="h-[100%] w-[100%] ">
                  {
                    preferencial.map(value => {
                      return (
                        <Silla key={value} />
                      )
                    })
                  }
                  {
                    general.map(value => {
                      return (
                        <Silla key={value} />
                      )
                    })
                  }
                </span>
              </div>
              <span></span>
            </div>
            <span className="h-[5%] w-[80%] rounded-lg bg-tertiary-opacity mt-5"></span>
          </div>
          <ul className="h-[15%] md:h-[100%] w-[100%] md:w-[30%] px-5 md:px-0 mt-2 md:mt-0 ml-1 flex flex-row md:flex-col justify-center items-center gap-5 rounded-xl shadow-2xl overflow-x-auto md:overflow-x-none bg-secondary-opacity">
            <li className="w-[80%] flex justify-start items-center">
              <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
              <span className="font-bold text-primary">Ocupado</span>
            </li>
            <li className="w-[80%] flex justify-start items-center">
              <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
              <span className="font-bold text-primary">Disponible</span>
            </li>
            <li className="w-[80%] flex justify-start items-center">
              <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
              <span className="font-bold text-primary">Preferencial</span>
            </li>
            <li className="w-[80%] flex justify-start items-center">
              <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
              <span className="font-bold text-primary">General</span>
            </li>
          </ul>
        </section>

        <div className="h-[20%] w-[100%] "></div>
      </article>
    </main>
  )
}
