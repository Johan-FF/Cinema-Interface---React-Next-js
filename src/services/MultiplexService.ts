import { get, put, post } from "@/app/services/HttpService"
import { Multiplex } from "../modules/shop/types/Interfaces"
import { createMultiplexAdapter } from "../modules/director/adapters/MultiplexAdapter"
import { MultiplexPoints } from "../modules/admin/types/Interfaces"
import {createMultiplexPointsAdapter} from "../modules/admin/adapters/MultiPointsAdapter"
import { getMultiplexAdapter } from "../modules/director/adapters/MultiplexAdapter"

const apiUrl = ''

// Operación GET para obtener todos los multiplex
export async function getAllMultiplex(): Promise<any[]> {
  const url = `${apiUrl}/multiplex/all`
  let list=[]
  const response: Promise<any> =  get(url)
  response
  .then(responseFetch => {
    list= getMultiplexAdapter(responseFetch);
    })
    .catch(error => {
      console.log(error)
    })
  return list
}

//Los create no retornan

// Operación POST para crear un nuevo multiplex
export async function createMultiplex(multiplexData: Multiplex): Promise<any> {
  const url = `${apiUrl}/multiplex/new`
  return post(url, createMultiplexAdapter( multiplexData))
}


//Operación PUT para modificar los puntos de los multiplex
export async function updateMultiplexPoints(id:number, pointsData: MultiplexPoints): Promise<any> {
  const url = `${apiUrl}/multiplex/points/new`
  return put(url,createMultiplexPointsAdapter(pointsData))
}

// Operación GET para los puntos de los multiplex
export async function getMultiplexPoints(id:number): Promise<any> {
  const url = `${apiUrl}/multiplex/points/${id}`
  return get(url)
}