"use client"

import { useState } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { MultiplexPoints } from "../types/Interfaces"
import { typeMultiplex } from "@/app/types/Types"
import { multiplexPointsSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"

export default function MultiplexPointsAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View

  const headers: string[] = ['Rol','Puntos por snack', 'Puntos por ticket']
  const filteredData = tables.multiplexPoints.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pointsSnack.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pointsTicket.toLowerCase().includes(searchTerm.toLowerCase())
      )
  })

  const points: MultiplexPoints = {
    type: 'movie',
    pointsSnack:'',
    pointsTicket: ''
  }
  const showPoints = (points: typeMultiplex) => {
    console.log(points)
  }

  return (
    <TableLayout type="MultiplexPoints" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Puntos del multiplex"
          execute={showPoints}
          model={points}
          schema={multiplexPointsSchema}
          inputs={inputs.multiplexPoints}
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