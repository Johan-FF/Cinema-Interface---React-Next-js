import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todas las peliculas
async function getAllMovies(): Promise<any[]> {
    const url = `${apiUrl}/movies/all/`
    return get(url)
  }
  
// Operación POST para crear una nueva pelicula
async function createMovie(movieData: any): Promise<any> {
    const url = `${apiUrl}/movies/new`
    return post(url, movieData)
  }
    

