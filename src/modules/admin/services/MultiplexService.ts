import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todos los empleados de un multiplex
async function getAllMultiplex(): Promise<any[]> {
    const url = `${apiUrl}/multiplex/all`
  return get(url)
}


// Operación POST para crear un nuevo multiplex
async function createMultiplex(multiplexData: any): Promise<any> {
  const url = `${apiUrl}/multiplex/new`
  return post(url, multiplexData)
}

//Operación PUT para modificar los puntos de los multiplex
async function updateMultiplexPoints(id:number): Promise<any> {
  const url = `${apiUrl}/multiplex/new`
  return put(url)
}

// Operación GET para los puntos de los multiplex
async function getMultiplexPoints(id:number): Promise<any> {
    const url = `${apiUrl}/multiplex/points/${id}`
    return get(url)
  }
