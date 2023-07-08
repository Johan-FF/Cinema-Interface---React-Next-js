import { get, put, post, generateAuthHeader } from "@/app/services/HttpService"
import { Multiplex } from "../modules/director/types/Interfaces"
import { createMultiplexAdapter } from "../modules/director/adapters/MultiplexAdapter"
import { MultiplexPoints } from "../modules/multiplex/types/Interfaces"
import { createMultiplexPointsAdapter, getMultiplexPointsAdapter } from "../modules/multiplex/adapters/MultiPointsAdapter"
import { getMultiplexAdapter } from "../modules/director/adapters/MultiplexAdapter"
import { API_URL } from "../environment"

const apiUrl = ''

// Operación GET para obtener todos los multiplex
async function getAllMultiplex(): Promise<any[]> {
  const url = `${API_URL}/multiplex/all`
  return get(url,generateAuthHeader())
}

export async function getAllMultiplexProxy(): Promise<Multiplex[]>{
  let list: Multiplex[] = []
  await getAllMultiplex()
    .then(response => {
      list = getMultiplexAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (allMultiplex): ${error}`)
    })
  return list
}

// Operación POST para crear un nuevo multiplex
async function createMultiplex(multiplexData: Multiplex): Promise<any> {
  const url = `${API_URL}/multiplex/new`
  return post(
    url, 
    createMultiplexAdapter(multiplexData), 
    generateAuthHeader()
  )
}

export async function createMultiplexProxy(multiplexData: Multiplex): Promise<string>{
  let message: string = ''
  await createMultiplex(multiplexData)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (createMultiplex): ${error}`)
    })
  return message
}




//Operación PUT para modificar los puntos de los multiplex
async function updateMultiplexPoints(id:string, pointsData: MultiplexPoints): Promise<any> {
  const url = `${API_URL}/multiplex/points/${id}`
  return post(
    url, 
    createMultiplexPointsAdapter(pointsData), 
    generateAuthHeader()
  )
}

export async function updateMultiplexPointsProxy(id:string, pointsData: MultiplexPoints):Promise<string>{
  let message: string = ''
  await updateMultiplexPoints(id,pointsData)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (updatePointsMultiplex): ${error}`)
    })
  return message

}

// Operación GET para los puntos de los multiplex
async function getMultiplexPoints(id:string): Promise<any> {
  const url = `${API_URL}/multiplex/points/${id}`
  return get(url,generateAuthHeader())
}

export async function getMultiplexPointsProxy(id:string): Promise<MultiplexPoints[]> {
  let list: MultiplexPoints[] = []
  await getMultiplexPoints(id)
    .then(response => {
      list = getMultiplexPointsAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (get Points): ${error}`)
    })
  return list
}