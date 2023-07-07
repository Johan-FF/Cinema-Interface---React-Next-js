import { get, put, post } from "@/app/services/HttpService"
import { createClientAdapter } from "../adapters/ClientAdapter"
import { Client } from "../types/Interfaces"

const apiUrl = ''

// Operación POST para crear un nuevo cliente
export async function createClient(clientData: Client): Promise<any> {
  const url = `${apiUrl}/users/client/new`
  return post(url, createClientAdapter(clientData))
}

// Operación POST para verificar existencia de cliente
export async function verifyClient(id: number): Promise<any> {
  const url = `${apiUrl}/users/client/${id}`
  return get(url)
}

// Operación PUT para los puntos de los clientes
export async function modifyUserPoints(id: number, pointsData:any): Promise<any> {
  const url = `${apiUrl}/users/points/${id}`
  return put(url,pointsData)
}