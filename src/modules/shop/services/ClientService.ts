import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''


// Operación POST para crear un nuevo cliente
async function createClient(clientData: any): Promise<any> {
  const url = `${apiUrl}/users/client/new`
  return post(url, clientData)
}

// Operación POST para verificar existencia de cliente
async function verifyClient(id: number): Promise<any> {
    const url = `${apiUrl}/users/client/${id}`
    return post(url)
  }
// Operación PUT para los puntos de los clientes
async function modifyUserPoints(id: number, pointsData:any): Promise<any> {
    const url = `${apiUrl}/users/points/${id}`
    return post(url,pointsData)
  }

