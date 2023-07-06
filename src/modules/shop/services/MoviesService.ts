import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todas las peliculas
async function getAllMovies(): Promise<any[]> {
    const url = `${apiUrl}/movies/all/`
    return get(url)
  }
  
    

