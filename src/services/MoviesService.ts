import { get, post, generateAuthHeader } from "@/app/services/HttpService"
import { Movie } from "../types/Interfaces"
import { createMovieAdapter, getMoviesAdapter } from "../adapters/MovieAdapter"
import { API_URL_MULTIPLEX } from "../environment"

// Operación GET para obtener todas las peliculas
async function getAllMovies(): Promise<any[]> {
  const url = `${API_URL_MULTIPLEX}/movies/all`
  return get(url,generateAuthHeader())
}
export async function getAllMoviesProxy():Promise<Movie[]>{
  let list: Movie[] = []
  await getAllMovies()
    .then(response => {
      list = getMoviesAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (allMovies): ${error}`)
    })
  return list
}

// Operación POST para crear una nueva pelicula
async function createMovie(movieData: Movie): Promise<any> {
  const url = `${API_URL_MULTIPLEX}/movies/new`
  return post(
    url, 
    createMovieAdapter(movieData), 
    generateAuthHeader()
  )
}
export async function createMovieProxy(movieData: Movie):Promise<string>{
  let message: string = ''
  await createMovie(movieData)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (createMovie): ${error}`)
    })
  return message
}
