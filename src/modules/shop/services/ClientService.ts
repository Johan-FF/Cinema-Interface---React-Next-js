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
export async function verifyClient(id: number): Promise<any> {
  const url = `${API_URL}/users/client/${id}`
  return get(url)
}

// Operación PUT para los puntos de los clientes
export async function modifyUserPoints(id: number, pointsData:any): Promise<any> {
  const url = `${API_URL}/users/points/${id}`
  return put(url,pointsData)
}