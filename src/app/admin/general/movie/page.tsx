"use client"

import { useState } from "react"
import Table from "../../Table"
import FormAddElement from "../../FormAddElement"
import BlueButton from "@/app/components/BlueButton"
import RedButton from "@/app/components/RedButton"
import { Movie } from "@/app/types/interfaces/Movie"
import { typeMovie } from "@/app/types/interfaces/Types"
import { movieSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import employeeProps from "@/app/types/props/EmployeeProps"

export default function Movie({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View

  const headers: string[] = ['Rol','Título', 'Duración', 'Edad', 'Sinópsis', 'Url Imágen']
  const filteredData = tables.movies.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.synopsis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.imgUrl.toLowerCase().includes(searchTerm.toLowerCase()) 
      )
  })

  const movie: Movie = {
    type: 'movie',
    title: '',
    duration: '',
    age: '',
    synopsis: '',
    imgUrl: '',
  }
  const showUser = (user: typeMovie) => {
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
          model={movie}
          schema={movieSchema}
          inputs={inputs.movie}
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