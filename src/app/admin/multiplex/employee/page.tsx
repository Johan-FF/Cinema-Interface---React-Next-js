"use client"

import { useState } from "react"
import Table from "../../Table"
import FormAddElement from "../../FormAddElement"
import BlueButton from "@/app/components/BlueButton"
import RedButton from "@/app/components/RedButton"
import { NewUser } from "@/app/types/interfaces/User"
import { typeUser } from "@/app/types/interfaces/Types"
import { newUserSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import employeeProps from "@/app/types/props/EmployeeProps"

export default function Employee({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View

  const headers: string[] = ['Rol', 'Código', 'Cédula', 'Cargo', 'Nombre', 'Número de telefono', 'Fecha inicio de contrato', 'Salario', 'Múltiple']
  const filteredData = tables.users.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.multiple.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.identification.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

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
    <div className="h-[90%] w-[100%] p-5 flex flex-col justify-center items-center">
    <span className="h-[90%] w-[90%] overflow-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity rounded-lg flex items-start md:shadow-2xl md:shadow-black">
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Empleado"
          execute={showUser}
          model={newUser}
          schema={newUserSchema}
          inputs={inputs.record}
          aditionalCondition={{
            have:true,
            first:"password",
            second:"conPassword",
            error: "La contraseña no coincide"
          }}
          sendMessage="Agregar"
        /> :
        <Table 
          headers={headers}
          filteredData={filteredData}
        />
      }
    </span>
    <span className="bg-transparent h-[10%] w-[90%] flex justify-center items-center">
      <span onClick={()=>{setAction("Add")}}>
      <BlueButton content="Añadir" leftRounded={true} rightRounded={false} />
      </span>
      <span onClick={()=>{setAction("View")}}>
      <RedButton content="Ver" leftRounded={false} rightRounded={true}/>
      </span>
    </span>
    </div>
  )
}