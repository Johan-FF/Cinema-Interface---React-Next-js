import React from "react"
import Form from "@/app/components/Form"
import { NewUser } from "@/app/types/interfaces/User"
import { newUserSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { typeUser } from "@/app/types/interfaces/Types"

export default function AddEmployer() {
  const newUser: NewUser = {
    type: 'newUser',
    name: '',
    position: '',
    phoneNumber: '',
    identification: '',
    password: '',
    conPassword: '',
  }
  const showUser = (user: typeUser) => {
    console.log(user)
  }

  return (
    <article className="bg-secondary min-h-[100%] md:h-[100%] w-[100%] flex justify-center items-center">
      <div className="min-h-[100%] xl:h-[90%] w-[100%] md:w-[80%] flex flex-col rounded-md md:shadow-2xl md:shadow-secondary-opacity py-[5%]">
          <section className="w-[100%] h-[10%]  flex justify-center items-center">
            <h2 className="text-[25px] w-[70%] text-center">
              Nuevo Empleado
            </h2>
          </section>
          <section className="w-[100%] max-h-[100%] pr-[5%] flex flex-col justify-center items-center">
          <Form
              execute={showUser}
              model={newUser}
              schema={newUserSchema}
              inputs={inputs.record}
              sendMessage={"Registrar"}
              aditionalCondition={{
                have:true,
                first:"password",
                second:"conPassword",
                error: "La contraseña no coincide" 
              }}/>
          </section>
      </div>
    </article>
  )
}
