"use client"

import { useState } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { Movie } from "@/app/types/Interfaces"
import { typeMovie } from "@/app/types/Types"
import { movieSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"

export default function MovieAdmin({ searchTerm }: employeeProps ) {
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
  const showMovie = (movie: typeMovie) => {
    console.log(movie)
  }

  return (
    <TableLayout type="Movie" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Película"
          execute={showMovie}
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
    </TableLayout>
  )
}