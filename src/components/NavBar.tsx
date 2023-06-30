import Image from "next/image"
import BlueButton from "./BlueButton"
import props from "../types/props/NavBarProps"
import { useState } from "react"
import { pages } from "../types/data/NavData"

export default function NavBar({ type, changeCurrentPane }: props) {
  const [viewMenu, setViewMenu] = useState(false)

  return (
    <>
      <button onClick={() => { setViewMenu(!viewMenu) }} className={`z-50 md:hidden transition-all duration-4000 ease-in-out fixed top-[2%] left-[5%] h-[5vh] w-[5vh] bg-tertiary hover:bg-tertiary-opacity rounded-2xl ${viewMenu ? "rotate-180 left-auto right-[5%]" : ""}`}>
        <div className="h-full w-full relative rounded-2xl">
          <span className={`transition-all duration-500 w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] ${viewMenu ? " rotate-45 translate-y-2 top-[22%] " : "top-[18%]"}`}></span>
          <span className={`w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] top-[48%] ${viewMenu ? "hidden" : ""}`}></span>
          <span className={`transition-all duration-500 w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] ${viewMenu ? "-rotate-45 -translate-y-2 top-[72%] " : "top-[78%]"}`}></span>
        </div>
      </button>

      <nav className={`z-40 transition-all duration-500 h-[100%] ${viewMenu ? "visible fixed top-0 left-0 w-[100%]" : " w-0 invisible md:visible md:w-[20%]"} bg-tertiary shadow-2xl shadow-black`}>
        <section className="w-[100%] h-[40%] flex flex-col justify-center items-center">
          <Image className="shadow-2xl shadow-black" src="/iconoPanelControl.webp" alt="Icono Cinema" width={500} height={500} />
          <h2 className="text-[20px] w-full text-center py-0 my-0 border-t-2 border-primary pt-2 rounded-lg">
            Carmen de los Ríos
          </h2>
          <h3 className="text-[15px] w-full text-center py-0 my-0 text-opacity-90 border-b-2 border-primary pb-2 rounded-lg shadow-2xl shadow-black">
            Gerente
          </h3>
        </section>
        <ul className= "w-[100%] h-[40%] max-h-[40%] flex flex-col justify-center items-center overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity">
          {
            type === "ShopSnacks" || type === "ShopMovies" || type === "ShopQualification" ?
            pages.employee.map((value, index) => {
              return (
                <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex justify-center items-center cursor-pointer shadow-2xl shadow-black">{value.name}</li>
              )
            }) : <></>
          }
          {
            type === "GenEmployee" || type === "GenMovie" ?
            pages.admin.map((value, index) => {
              return (
                <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex justify-center items-center cursor-pointer shadow-2xl shadow-black">{value.name}</li>
              )
            }) : <></>
          }
          {
            type === "MulSchedule" || type === "MulEmployee" ?
            pages.multiplex.map((value, index) => {
              return (
                <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex justify-center items-center cursor-pointer shadow-2xl shadow-black">{value.name}</li>
              )
            }) : <></>
          }
        </ul>
        <section className= "w-[100%] h-[20%] flex justify-center items-center">
          <div className="h-[30%]">
            <BlueButton content="Cerrar sesión" leftRounded={true} rightRounded={true} />
          </div>
        </section>
      </nav>
    </>
  )
}
