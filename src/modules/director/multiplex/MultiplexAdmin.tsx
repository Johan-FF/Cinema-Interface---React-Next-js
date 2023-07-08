"use client"

import { useState } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { Multiplex } from "../types/Interfaces"
import { typeMultiplex } from "@/app/types/Types"
import { multiplexSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"

export default function MultiplexAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View

  const headers: string[] = ['Rol','id','Nombre', 'Número de salas', 'Puntos por ticket', 'Puntos por snack']
  const filteredData = tables.multiplex.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.numSala.toLowerCase().includes(searchTerm.toLowerCase())
      )
  })

  const multiplex: Multiplex = {
    type: 'movie',
    id:'',
    name:'',
    numSala:'',
    pointSnack:'',
    pointTicket: ''
  }
  const showMultiplex = (multiplex: typeMultiplex) => {
    console.log(multiplex)
  }

  return (
    <TableLayout type="Multiplex" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Puntos multiplex"
          execute={showMultiplex}
          model={multiplex}
          schema={multiplexSchema}
          inputs={inputs.multiplex}
          aditionalCondition={{
            have:false,
            first:"",
            second:"",
            error: ""
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