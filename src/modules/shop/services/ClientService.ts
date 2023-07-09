import { get, put, post, generateAuthHeader } from "@/app/services/HttpService"
import { createClientAdapter } from "../adapters/ClientAdapter"
import { Client } from "../types/Interfaces"
import { API_URL } from "@/app/environment"

// Operación POST para crear un nuevo cliente
async function createClient(clientData: Client): Promise<any> {
  const url = `${API_URL}/users/client/new`
  return post(
    url,
    createClientAdapter(clientData),
    generateAuthHeader()
  )
}
export async function createClientProxy(clientData: Client): Promise<string> {
  let message: string = ''
  await createClient(clientData)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (createClient): ${error}`)
    })
  return message
}


// Operación POST para verificar existencia de cliente
async function verifyClient(identification: string): Promise<any> {
  const url = `${API_URL}/users/client/${identification}`
  return get(url, generateAuthHeader())
}
export async function verifyClientProxy(id: string): Promise<string> {
  let message: string = ''
  await verifyClient(id)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (verifyClient): ${error}`)
    })
  return message
}

// Operación PUT para los puntos de los clientes
async function modifyUserPoints(id: string, pointsData:any): Promise<any> {
  const url = `${API_URL}/users/points/${id}`
  return put(url,pointsData)
}

// Operación PUT para la calificacion de los clientes
async function modifyUserQualification(
  identification: string, qualificationData: any
): Promise<any> {
  const url = `${API_URL}/users/qualification/${identification}`
  return put(url,qualificationData, generateAuthHeader())
}
export async function modifyUserQualificationProxy(id: string, qualification: any): Promise<string> {
  let message: string = ''
  await modifyUserQualification(id, qualification)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (qualificationClient): ${error}`)
    })
  return message
}