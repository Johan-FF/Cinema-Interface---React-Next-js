'use client'

import iconoCine from "../../../public/iconoCine.webp"
import iconoCinema from "../../../public/iconoCinema.webp"
import Form from "@/app/components/Form"
import { inputs } from "@/app/types/data/InputsData"
import { userSchema } from "@/app/helpers/ValidateInputs"
import { User } from "@/app/types/Interfaces"
import Background from "@/app/components/Background"
import { login } from "@/app/services/Auth"
import { useRouter } from "next/navigation"
import Account from "@/app/services/Account"
import { useState } from "react"

export default function Login() {
  const account = Account.getInstance()
  const router = useRouter()
  const user: User = {
    type: 'user',
    identification: '',
    password: '',
  }

  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  const fetchLogin = async (data: User) => {
    await login({
      numberDocument: data.identification,
      password: data.password
    })
    redirect()
  }

  const redirect = () => {
    if (account.getRol() === "DIRECTOR")
      router.push("/admin/general")
    else if (account.getRol() === "ADMINISTRADOR")
      router.push("/admin/multiplex")
    else if (account.getRol() === "EMPLEADO")
      router.push("/admin/shopping")
  }

  return (
    <main className="bg-primary h-[100vh] min-h-[100vh] xl:h-[100vh] w-[100%] flex-center">
      <Background hideContent={false}>
        <section className="min-h-[80%] xl:h-[80%] w-[100%] md:w-[60%] flex flex-col xl:flex-row shadow-big">

          <div className="bg-tertiary bg-opacity-75 py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[40%] md:rounded-l-md">
            <section className="w-[100%] h-[15%] flex-center pt-5">
              <img src={iconoCinema.src} alt="Icono Cinema" className="h-[100%] w-[50%]" />
            </section>
            <section className="w-[100%] h-[30%] flex-center">
              <p className="text-primary text-[20px] w-[80%] text-center">Escapa a un mundo de emociones en la gran pantalla del cine.</p>
            </section>
            <section className="w-[100%] h-[50%] flex-center">
              <img src={iconoCine.src} alt="Icono Cine" className="h-[100%] w-[100%]" />
            </section>
          </div>

          <div className="bg-secondary py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[60%] md:rounded-r-md">
            <section className="w-[100%] h-[20%] p-10 flex justify-start items-center">
              <h1 className="text-primary text-5xl">Acceso</h1>
            </section>
            <section className="w-[100%] max-h-[80%] pr-[5%] flex-col-center">
              <Form
                required={{
                  execute: fetchLogin,
                  model: user,
                  schema: userSchema
                }}
                inputs={inputs.user}
                messages={{
                  send:"Ingresar",
                  control: controlMessage,
                  error: hasError,
                  changeError: setHasError,
                  changeMessage: setControlMessage
                }}
                aditionalCondition={{
                  have: false,
                  first: "",
                  second: "",
                  error: ""
                }} />
            </section>
          </div>

        </section>
      </Background>
    </main>
  )
}