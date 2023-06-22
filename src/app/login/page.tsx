'use client'

import Image from "next/image"
import { useState } from "react"
import BlueButton from "@/app/components/BlueButton"
import RedButton from "@/app/components/RedButton"
import { inputs } from "@/app/types/data/InputsForms"
import LoginForm from "./LoginForm"

export default function Login() {
  const [nameForm, setNameForm] = useState('login')

  return (
      <main className="bg-primary min-h-[100vh] xl:h-[100vh] md:py-[5%] xl:py-0 w-[100%] flex justify-center items-center">
        <section className="min-h-[80%] xl:h-[80%] w-[100%] md:w-[60%] flex flex-col xl:flex-row rounded-md md:shadow-2xl md:shadow-black">

          <div className="bg-tertiary bg-opacity-75 py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[40%] md:rounded-l-md">
            <section className="w-[100%] h-[15%] flex justify-center pt-5">
              <Image src="/iconoCinema.webp" alt="Icono Cinema" width={100} height={100}/>
            </section>
            <section className="w-[100%] h-[30%] flex justify-center items-center">
              <p className="text-primary text-[20px] w-[80%] text-center">Escapa a un mundo de emociones en la gran pantalla del cine.</p>
            </section>
            <section className="w-[100%] h-[50%] flex justify-center items-center">
              <Image src="/iconoCine.webp" alt="Icono Cinema" width={500} height={500}/>
            </section>
          </div>

          <div className="bg-secondary py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[60%] md:rounded-r-md">
            <section className="w-[100%] h-[10%] p-3 flex justify-end items-center">
              <div onClick={() => {setNameForm('login')}}>
                <BlueButton content="Ingreso" leftRounded={true} rightRounded={false} />
              </div>
              <div onClick={() => {setNameForm('record')}}>
                <RedButton content="Registro" leftRounded={false} rightRounded={true} />
              </div>
            </section>
            <section className="w-[100%] max-h-[80%] pr-[5%] flex flex-col justify-center items-center">
              {
                nameForm==='login' ?
                  <LoginForm inputs={inputs.login} sendMessage={"Ingresar"}/>
                : 
                  <LoginForm inputs={inputs.record} sendMessage={"Registrarse"}/>
              }
            </section>
          </div>

        </section>
      </main>
    )
}
