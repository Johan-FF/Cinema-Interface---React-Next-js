"use client"

import { useState } from "react"
import Table from "../components/Table"
import FormAddElement from "../components/FormAddElement"
import { Schedule } from "@/app/modules/admin/types/Interfaces"
import { typeSchedule } from "@/app/types/Types"
import { scheduleSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { employeeProps } from "../types/Props"
import { tables } from "@/app/types/data/TableData"
import TableLayout from "../components/TableLayout"

export default function ScheduleAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View

  const headers: string[] = ['Tipo','Película','Hora', 'Minutos']
  const filteredData = tables.schedules.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.hour.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.minute.toLowerCase().includes(searchTerm.toLowerCase()) 
    )
  })

  const schedule: Schedule = {
    type: 'schedule',
    movie: '',
    hour: '',
    minute: '',
    day:'',
    idTheater:''
  }
  const showSchedule = (schedule: typeSchedule) => {
    console.log(schedule)
  }

  return (
    <TableLayout type="Schedule" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Horario"
          execute={showSchedule}
          model={schedule}
          schema={scheduleSchema}
          inputs={inputs.schedule}
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