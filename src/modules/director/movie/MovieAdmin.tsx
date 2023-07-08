"use client"

import { useEffect, useState } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { Movie } from "@/app/types/Interfaces"
import { typeMovie } from "@/app/types/Types"
import { movieSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"
import { getAllMoviesProxy, createMovieProxy } from "@/app/services/MoviesService"
import { movieHeaders } from "../../multiplex/types/TableHeaders"

export default function MovieAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View

  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const filteredData = movies.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.synopsis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.imgUrl.toLowerCase().includes(searchTerm.toLowerCase()) 
      )
  })

  useEffect(() => {
    async function fetchData() {
      getAllMoviesProxy()
        .then(response => {
          setMovies(response)
      })
    }
    fetchData()
  },[action])

  const movie: Movie = {
    id:'',
    type: 'movie',
    title: '',
    duration: '',
    age: '',
    synopsis: '',
    imgUrl: '',
  }
  const sendMovie = (movie: typeMovie) => {
    createMovieProxy(movie)
      .then(response => {
        setHasError(
          response.toLowerCase().includes('inválido') ||
          response.toLowerCase().includes('inválida')
        )
        setControlMessage(response)
      })
  }

  return (
    <TableLayout type="Movie" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Película"
          required={{
            execute: sendMovie,
            model: movie,
            schema: movieSchema,
          }}
          inputs={inputs.movie}
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
          headers={movieHeaders}
          filteredData={filteredData}
        />
      }
    </TableLayout>
  )
}