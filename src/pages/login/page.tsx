'use client'

import Image from "next/image"
import BlueButton from "@/app/components/BlueButton"
import RedButton from "@/app/components/RedButton"
import { inputs } from "@/app/types/InputsForms"
import { useState } from "react"
import LoginForm from "./LoginForm"

export default function Login() {
  const [form, setForm] = useState('login')

  return (
      <main className="bg-primary min-h-[100vh] xl:h-[100vh] md:py-[5%] xl:py-0 w-[100%] flex justify-center items-center">
        <section className="min-h-[80%] xl:h-[80%] w-[100%] md:w-[60%] flex flex-col xl:flex-row rounded-md md:shadow-2xl md:shadow-black">

          <div className="bg-tertiary bg-opacity-75 py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[40%] rounded-l-md">
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

          <div className="bg-secondary py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[60%] rounded-r-md">
            <section className="w-[100%] h-[10%] p-3 flex justify-end items-center">
              <div onClick={() => {setForm('login')}}>
                <BlueButton contenido="Ingreso" izqRedondo={true} derRedondo={false} />
              </div>
              <div onClick={() => {setForm('registro')}}>
                <RedButton contenido="Registro" izqRedondo={false} derRedondo={true} />
              </div>
            </section>
            <section className="w-[100%] flex flex-col justify-center items-center">
              {
                form==='login' ? <LoginForm inputs={inputs.login}/>
                : <LoginForm inputs={inputs.registro}/>
              }
            </section>
            <section className="w-[100%] h-[10%] p-3 pl-[10%] ">
            {
                form==='login' ? <RedButton contenido="Ingresar" izqRedondo={true} derRedondo={true} />
                : <RedButton contenido="Registrarse" izqRedondo={true} derRedondo={true} />
              }
            </section>
          </div>

        </section>
      </main>
    )
}
