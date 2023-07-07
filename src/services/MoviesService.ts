import { get, post } from "@/app/services/HttpService"
import { Movie } from "../types/Interfaces"
import { createMovieAdapter } from "../adapters/MovieAdapter"

// Operación GET para obtener todas las peliculas
export async function getAllMovies(): Promise<any[]> {
  const url = `${process.env.API_URL}/movies/all`
  return get(url)
}

// Operación POST para crear una nueva pelicula
export async function createMovie(movieData: Movie): Promise<any> {
  const url = `${process.env.API_URL}/movies/new`
  return post(url, createMovieAdapter(movieData))
}
