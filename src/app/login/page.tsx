'use client'

import Image from "next/image"
import Form from "@/app/components/Form"
import { inputs } from "@/app/types/data/InputsData"
import { userSchema } from "@/app/helpers/ValidateInputs"
import { User } from "@/app/types/interfaces/User"
import { typeUser } from "@/app/types/interfaces/Types"
import { useRouter } from "next/navigation"
import { fetchData } from "@/app/services/data"
import Account from "@/app/services/Account"
import Background from "@/app/components/Background"

export default function Login() {
  const router = useRouter()
  const user: User = {
    type: 'user',
    identification: '',
    password: '',
  }

  const verifyUserType = async (data: typeUser) => {
    const response =  await fetchData(data.identification, data.password)
    const account: Account = Account.getInstance()
    account.setName(response.name)
    account.setRol(response.rol)
    if(response.rol==="ROLE_DIRECTOR")
      router.push("/admin/general")
    else if(response.rol==="ROLE_ADMIN")
      router.push("/admin/multiplex")
    else if(response.rol==="ROLE_EMPLOYEE")
      router.push("/admin/shopping")
  }

  return (
    <main className="bg-primary min-h-[100vh] xl:h-[100vh] md:py-[5%] xl:py-0 w-[100%] flex justify-center items-center">
        <Background viewProducts={true}>
        <section className="min-h-[80%] xl:h-[80%] w-[100%] md:w-[60%] flex flex-col xl:flex-row rounded-md md:shadow-2xl md:shadow-black">

          <div className="bg-tertiary bg-opacity-75 py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[40%] md:rounded-l-md">
            <section className="w-[100%] h-[15%] flex justify-center pt-5">
              <Image src="/iconoCinema.webp" alt="Icono Cinema" width={100} height={100}/>
            </section>
            <section className="w-[100%] h-[30%] flex justify-center items-center">
              <p className="text-primary text-[20px] w-[80%] text-center">Escapa a un mundo de emociones en la gran pantalla del cine.</p>
            </section>
            <section className="w-[100%] h-[50%] flex justify-center items-center">
              <Image src="/iconoCine.webp" alt="Icono Cine" width={500} height={500}/>
            </section>
          </div>

          <div className="bg-secondary py-[5%] xl:py-0 h-[80%] xl:h-[100%] w-[100%] xl:w-[60%] md:rounded-r-md">
            <section className="w-[100%] h-[20%] p-10 flex justify-start items-center">
              <h1 className="text-primary text-5xl">Acceso</h1>
            </section>
            <section className="w-[100%] max-h-[80%] pr-[5%] flex flex-col justify-center items-center">
                <Form
                  execute={verifyUserType}
                  model={user}
                  schema={userSchema}
                  inputs={inputs.login}
                  sendMessage={"Ingresar"}
                  aditionalCondition={{
                    have:false,
                    first:"",
                    second:"",
                    error: "" 
                }}/>
            </section>
          </div>

        </section>
    </Background>
      </main>
  )
}
