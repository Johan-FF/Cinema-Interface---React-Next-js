import { get, put, post, generateAuthHeader } from "@/app/services/HttpService"
import { Multiplex } from "../modules/director/types/Interfaces"
import { createMultiplexAdapter } from "../modules/director/adapters/MultiplexAdapter"
import { MultiplexPoints } from "../modules/multiplex/types/Interfaces"
import { updateMultiplexPointsAdapter, getMultiplexPointsAdapter } from "../modules/multiplex/adapters/MultiPointsAdapter"
import { getMultiplexAdapter } from "../modules/director/adapters/MultiplexAdapter"
import { API_URL_MULTIPLEX } from "../environment"

// Operación GET para obtener todos los multiplex
async function getAllMultiplex(): Promise<any[]> {
  const url = `${API_URL_MULTIPLEX}/multiplex/all`
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
  const url = `${API_URL_MULTIPLEX}/multiplex/new`
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
  const url = `${API_URL_MULTIPLEX}/multiplex/points/${id}`
  return put(
    url, 
    updateMultiplexPointsAdapter(pointsData), 
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
  const url = `${API_URL_MULTIPLEX}/multiplex/points/${id}`
  return get(url,generateAuthHeader())
}
export async function getMultiplexPointsProxy(id:string): Promise<MultiplexPoints> {
  let points: MultiplexPoints = {type: 'Puntos', pointsSnack: '0', pointsTicket: '0'} 
  await getMultiplexPoints(id)
    .then(response => {
      points = getMultiplexPointsAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (getMultiplexPoints): ${error}`)
    })
  return points
}