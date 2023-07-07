import { get, put, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todos los multiplex
export async function getAllMultiplex(): Promise<any[]> {
  const url = `${apiUrl}/multiplex/all`
  return get(url)
}

// Operación POST para crear un nuevo multiplex
export async function createMultiplex(multiplexData: any): Promise<any> {
  const url = `${apiUrl}/multiplex/new`
  return post(url, multiplexData)
}

//Operación PUT para modificar los puntos de los multiplex
export async function updateMultiplexPoints(id:number): Promise<any> {
  const url = `${apiUrl}/multiplex/new`
  return put(url)
}

// Operación GET para los puntos de los multiplex
export async function getMultiplexPoints(id:number): Promise<any> {
  const url = `${apiUrl}/multiplex/points/${id}`
  return get(url)
}