"use client"

import { useState } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { NewUser } from "../types/Interfaces"
import { typeUser } from "@/app/types/Types"
import { newUserSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"

export default function EmployeeAdmin({ searchTerm }: employeeProps) {
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
    <TableLayout type="Employee" setAction={setAction}>
      {
        action === "Add" ?
          <FormAddElement
            typeElement="Empleado"
            execute={showUser}
            model={newUser}
            schema={newUserSchema}
            inputs={inputs.record}
            aditionalCondition={{
              have: true,
              first: "password",
              second: "conPassword",
              error: "La contraseña no coincide"
            }}
            sendMessage="Agregar"
          /> :
          <Table
            headers={headers}
            filteredData={filteredData}
          />
      }
    </TableLayout>
  )
}