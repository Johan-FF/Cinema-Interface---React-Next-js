'use client'

import Image from "next/image"
import BlueButton from "./BlueButton"
import RedButton from "./RedButton"
import { navBarProps } from "../types/Props"
import { useEffect, useState, ChangeEvent } from "react"
import { pages } from "../types/data/NavData"
import Account from "../services/Account"
import ClientButton from "../modules/shop/components/ClientButton"
import Cookies from 'js-cookie'
import { KEY_CART_CONTENT, KEY_CLIENT, KEY_USER_TOKEN } from "../environment"
import { useRouter } from "next/navigation"
import { useClient } from "../modules/shop/hooks/useClient"

export default function NavBar(
  { type, changeCurrentPane }: navBarProps
) {
  const { setIdentification, setHide } = useClient()
  const [viewMenu, setViewMenu] = useState(false)
  const [menuType, setMenuType] = useState<'gen' | 'mul' | 'shop' | ''>('')
  const router = useRouter()
  const account: Account = Account.getInstance()

  useEffect(() => {
    if(type==='Dashboard' || type==='GenEmployee' || type==='GenMultiplex' || type==='GenMovie')
      setMenuType('gen')
    else if (type==='MulPoints' || type==='MulSchedule')
      setMenuType('mul')
    else if (type==='ShopMovies' || type==='ShopQualification' || type==='ShopSnacks')
      setMenuType('shop')
  }, [])

  const changeIdentification = (event: ChangeEvent<HTMLInputElement>) => {
    setIdentification(event.target.value)
  }

  const finallySale = () => {
    if(typeof window !== 'undefined'){
      const idClient = window.localStorage.getItem(KEY_CLIENT)
      if(idClient!==null)
        window.localStorage.removeItem(KEY_CLIENT)
      setHide(true)
    }
  }

  const logOut = () => {
    if (typeof window !== 'undefined'){
      window.localStorage.removeItem(KEY_CART_CONTENT)
      window.localStorage.removeItem(KEY_CLIENT)
    }
    Cookies.remove(KEY_USER_TOKEN)
    router.push('/')
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
        <ul className={`w-[100%] ${menuType === 'shop' ? "h-[30%] max-h-[30%]" : "h-[40%] max-h-[40%]"} flex flex-col justify-center items-center overflow-y-auto scrollbar-small`}>
          {
            menuType === "shop" ?
              pages.employee.map((value, index) => {
                return (
                  <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex-center cursor-pointer shadow-big">{value.name}</li>
                )
              }) : <></>
          }
          {
            menuType === "gen" ?
              pages.admin.map((value, index) => {
                return (
                  <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex-center cursor-pointer shadow-big">{value.name}</li>
                )
              }) : <></>
          }
          {
            menuType === "mul" ?
              pages.multiplex.map((value, index) => {
                return (
                  <li key={index} onClick={() => { changeCurrentPane(value.tag) }} className="h-[20%] w-[100%] border-y-2 my-1 border-primary hover:bg-tertiary-opacity flex-center cursor-pointer shadow-big">{value.name}</li>
                )
              }) : <></>
          }
        </ul>
        <section className={`w-[100%] ${menuType === 'shop' ? "h-[30%]" : "h-[20%]"} `}>
          {
            menuType === "shop" ?
              <>
                <div className="h-[40%] flex-center">
                  <input onChange={changeIdentification} className="text-input max-w-[90%]" type="number" placeholder="Cédula de cliente" />
                </div>
                <div className="h-[40%] flex-center flex flex-col">
                  <div className="flex justify-center" >
                    <ClientButton/>
                    <span onClick={() => finallySale()}>
                      <BlueButton content="Finalizar" leftRounded={true} rightRounded={true} />
                    </span>
                  </div>
                  <div className="flex justify-center mt-4">
                    <span onClick={() => logOut()} className="h-[100%]">
                      <RedButton content="Cerrar sesión" leftRounded={true} rightRounded={true} />
                    </span>
                  </div>
                </div>
              </>
              :
              <>
                <span className="h-[30%] w-[100%] flex-center">
                  <div onClick={() => logOut()}>
                    <BlueButton content="Cerrar sesión" leftRounded={true} rightRounded={true} />
                  </div>
                </span>
              </>
          }
        </section>
      </nav>
    </>
  )
}
