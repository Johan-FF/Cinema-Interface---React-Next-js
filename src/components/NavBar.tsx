'use client'

import Image from "next/image"
import BlueButton from "./BlueButton"
import RedButton from "./RedButton"
import { navBarProps } from "../types/Props"
import Link from "next/link"
import { useState } from "react"
import { pages } from "../types/data/NavData"
import Account from "../services/Account"
import ClientButton from "../modules/shop/components/ClientButton"
import { set } from "zod"

export default function NavBar(
  { type, func, changeCurrentPane }: navBarProps
) {
  const [viewMenu, setViewMenu] = useState(false)
  const [typeMenu, setTypeMenu] = useState<'mul'|'gen'|'shop'>()
  const account: Account = Account.getInstance()

  const getType = () => {
    type === "ShopSnacks" || type === "ShopMovies" || type === "ShopQualification" ?
      setTypeMenu('shop') : ''
  }

  return (
    <>
      <button onClick={() => { setViewMenu(!viewMenu) }} className={`z-50 md:hidden transition-all duration-2000 ease-in-out fixed top-[2%] left-[5%] h-[5vh] w-[5vh] bg-tertiary hover:bg-tertiary-opacity rounded-2xl ${viewMenu ? "rotate-180 left-auto right-[5%]" : ""}`}>
        <div className="size-all relative rounded-2xl">
          <span className={`transition-all duration-500 w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] ${viewMenu ? " rotate-45 translate-y-2 top-[22%] " : "top-[18%]"}`}></span>
          <span className={`w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] top-[48%] ${viewMenu ? "hidden" : ""}`}></span>
          <span className={`transition-all duration-500 w-[70%] h-[8%] rounded-lg bg-primary absolute left-[15%] ${viewMenu ? "-rotate-45 -translate-y-2 top-[72%] " : "top-[78%]"}`}></span>
        </div>
      </button>

      <nav className={`z-40 transition-all duration-500 h-[100%] ${viewMenu ? "visible fixed top-0 left-0 w-[100%]" : " w-0 invisible md:visible md:w-[20%]"} bg-tertiary`}>
        <section className="w-[100%] h-[40%] flex-col-center">
          <Image className="shadow-big" src="/iconoPanelControl.webp" alt="Icono Cinema" width={500} height={500} />
          <h2 className="text-[20px] w-full text-center py-0 my-0 border-t-2 border-primary pt-2 rounded-lg">
            {account.getName()}
          </h2>
          <h3 className="text-[15px] w-full text-center py-0 my-0 text-opacity-90 border-b-2 border-primary pb-2 shadow-big">
          {account.getRol()}
          </h3>
        </section>
        <ul className= "w-[100%] h-[40%] max-h-[40%] flex flex-col justify-center items-center overflow-y-auto scrollbar-small">
          {
            type === "ShopSnacks" || type === "ShopMovies" || type === "ShopQualification" ?
            pages.employee.map((value, index) => {
              return (
                <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex-center cursor-pointer shadow-big">{value.name}</li>
              )
            }) : <></>
          }
          {
            type === "GenEmployee" || type === "GenMovie" ?
            pages.admin.map((value, index) => {
              return (
                <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex-center cursor-pointer shadow-big">{value.name}</li>
              )
            }) : <></>
          }
          {
            type === "MulSchedule" || type === "MulEmployee" ?
            pages.multiplex.map((value, index) => {
              return (
                <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex-center cursor-pointer shadow-big">{value.name}</li>
              )
            }) : <></>
          }
        </ul>
        <section className= "w-[100%] h-[20%] ">
          {
            type === "ShopSnacks" || type === "ShopMovies" || type === "ShopQualification" ?
            <>
              <div className="h-[40%] flex-center">
                <input className="text-input" type="number" name="" id="" placeholder="Ingrese cédula" />
              </div>
              <div className="h-[30%] flex-center">
                <ClientButton func={func} />
                <Link href={'/'} className="h-[100%]">
                  <RedButton content="Cerrar sesión" leftRounded={true} rightRounded={true} />
                </Link>
              </div>
            </>
            :
            <>
              <Link href={'/'} className="h-[30%] w-[100%] flex-center">
                <BlueButton content="Cerrar sesión" leftRounded={true} rightRounded={true} />
              </Link>
            </>
          }
        </section>
      </nav>
    </>
  )
}
