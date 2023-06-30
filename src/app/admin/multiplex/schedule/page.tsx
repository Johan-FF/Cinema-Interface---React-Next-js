"use client"

import { useState } from "react"
import Table from "../../Table"
import FormAddElement from "../../FormAddElement"
import BlueButton from "@/app/components/BlueButton"
import RedButton from "@/app/components/RedButton"
import { Schedule } from "@/app/types/interfaces/Schedule"
import { typeSchedule } from "@/app/types/interfaces/Types"
import { scheduleSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import employeeProps from "@/app/types/props/EmployeeProps"
import { tables } from "@/app/types/data/TableData"

export default function Schedule({ searchTerm }: employeeProps ) {
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
  }
  const showSchedule = (schedule: typeSchedule) => {
    console.log(schedule)
  }

  return (
    <div className="h-[90%] w-[100%] p-5 flex flex-col justify-center items-center">
    <span className="h-[90%] w-[90%] overflow-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity rounded-lg flex items-start md:shadow-2xl md:shadow-black">
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