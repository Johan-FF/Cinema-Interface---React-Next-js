"use client"

import { useEffect, useState } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { Schedule } from "../types/Interfaces"
import { typeSchedule } from "@/app/types/Types"
import { scheduleSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"
import { scheduleHeaders } from "../types/TableHeaders"
import { getAllSchedulesProxy, createScheduleProxy } from "../services/SchedulesService"

export default function ScheduleAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View
  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const filteredData = schedules.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.hour.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.idTheater.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.minute.toLowerCase().includes(searchTerm.toLowerCase()) 
    )
  })

  useEffect(() => {
    async function fetchData() {
      getAllSchedulesProxy()
        .then(response => {
          setSchedules(response)
      })
    }
    fetchData()
  },[action])

  const schedule: Schedule = {
    id: '',
    type: 'schedule',
    movie: '',
    hour: '',
    minute: '',
    day:'',
    idTheater:''
  }

  const sendSchedule = (schedule: typeSchedule) => {
    createScheduleProxy(schedule)
      .then(response => {
        setHasError(
          response.toLowerCase().includes('inválido') ||
          response.toLowerCase().includes('inválida')
        )
        setControlMessage(response)
      })
  }

  return (
    <TableLayout type="Schedule" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Horario"
          required={{
            execute: sendSchedule,
            model: schedule,
            schema: scheduleSchema,
          }}
          inputs={inputs.schedule}
          aditionalCondition={{
            have:false,
            first:"",
            second:"",
            error: ""
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
          headers={scheduleHeaders}
          filteredData={filteredData}
        />
      }
    </TableLayout>
  )
}