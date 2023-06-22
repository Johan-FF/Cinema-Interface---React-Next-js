import Image from "next/image"
import BlueButton from "./BlueButton"
import props from "../types/props/NavBarProps"
import { useState } from "react"

export default function NavBar({ changeProduct }: props) {
  const [viewMenu, setViewMenu] = useState(false)

  return (
    <nav className={`z-50 absolute left-0 top-0 transition-all duration-500 h-[100%] ${viewMenu?'w-[100%]':' w-0 md:w-[20%]'} bg-tertiary shadow-2xl shadow-black`}> 
      <section className={`${viewMenu?'visible':'invisible md:visible'} w-[100%] h-[40%] flex flex-col justify-center items-center`}>
        <Image className="shadow-2xl shadow-black" src="/iconoPanelControl.webp" alt="Icono Cinema" width={500} height={500}/>
        <h2 className="text-[20px] w-full text-center py-0 my-0 border-t-2 border-primary pt-2 rounded-lg">Carmen de los Ríos</h2>
        <h3 className="text-[15px] w-full text-center py-0 my-0 text-opacity-90 border-b-2 border-primary pb-2 rounded-lg shadow-2xl shadow-black">Gerente</h3>
      </section>
      <ul className={`${viewMenu?'visible':'invisible md:visible'} w-[100%] h-[40%] flex flex-col justify-center items-center`}>
        <li onClick={() => {changeProduct('snacks')}} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex justify-center items-center cursor-pointer shadow-2xl shadow-black">Comida</li>
        <li onClick={() => {changeProduct('movies')}} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex justify-center items-center cursor-pointer shadow-2xl shadow-black">Películas</li>
      </ul>
      <section className={`${viewMenu?'visible':'invisible md:visible'} w-[100%] h-[20%] flex justify-center items-center`}>
        <div className="h-[30%]">
          <BlueButton content="Cerrar sesión" leftRounded={true} rightRounded={true}/>
        </div>
      </section>
      <button onClick={() => {setViewMenu(!viewMenu)}} className={`z-100 md:hidden transition-all duration-1000 absolute top-[1%] left-[15%] h-[5vh] w-[5vh] bg-tertiary hover:bg-tertiary-opacity rounded-2xl ${viewMenu?'rotate-180':''}`}>
        <div className="h-full w-full relative rounded-2xl">
          <span className={`transition-all duration-500 w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] ${viewMenu?' rotate-45 translate-y-2 top-[22%] ':'top-[18%]'}`}></span>
          <span className={`w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] top-[48%] ${viewMenu?'hidden':''}`}></span>
          <span className={`transition-all duration-500 w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] ${viewMenu?'-rotate-45 -translate-y-2 top-[72%] ':'top-[78%]'}`}></span>
        </div>
      </button>
    </nav>
  )
}