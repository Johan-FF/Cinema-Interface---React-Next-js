"use client"

import {useEffect, useState } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { NewUser } from "../types/Interfaces"
import { typeUser } from "@/app/types/Types"
import { newEmployeeSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import { employeeProps } from "@/app/types/Props"
import { getAllAdminsProxy, createAdminProxy } from "../services/AdminService"
import TableLayout from "../../../components/TableLayout"
import { Employee } from "@/app/types/Interfaces"
import { adminsHeaders } from "../../multiplex/types/TableHeaders"

export default function EmployeeAdmin({ searchTerm }: employeeProps) {
  const [action, setAction] = useState("Add") // Add | View

  const [hasError, setHasError] = useState(false)

  const [controlMessage, setControlMessage] = useState('')

  const [employees, setEmployees] = useState<Employee[]>([])
  
  const filteredData = employees.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.startDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.multiplex.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.identification.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  useEffect(() => {
    async function fetchData() {
      getAllAdminsProxy()
        .then(response => {
          setEmployees(response)
      })
    }
    fetchData()
  },[action])
  
  const newEmployee: Employee = {
    type: 'employee',
    name: '',
    phoneNumber: '',
    identification: '',
    password: '',
    conPassword:'',
    codeEmployee:'',
    dateBirth:'',
    email:'',
    id:'',
    multiplex:'',
    salary:'',
    startDate:''
  }

  const showUser = (user: Employee) => {
    createAdminProxy(user)
    .then(response => {
      setHasError(
        response.toLowerCase().includes('inválido') ||
        response.toLowerCase().includes('inválida')
      )
      setControlMessage(response)
    })
  }


  return (
    <TableLayout type="Employee" setAction={setAction}>
      {
        action === "Add" ?
          <FormAddElement
            typeElement="Empleado"
            required={{
              execute: showUser,
              model: newEmployee,
              schema: newEmployeeSchema,
            }}
            inputs={inputs.record}
            aditionalCondition={{
              have: true,
              first: "password",
              second: "conPassword",
              error: "La contraseña no coincide"
            }}
            messages={{
              send:"Agregar",
              control: controlMessage,
              error: hasError,
              changeError: setHasError,
              changeMessage: setControlMessage
            }}
          /> :
          <Table
            headers={adminsHeaders}
            filteredData={filteredData}
          />
      }
    </TableLayout>
  )
}