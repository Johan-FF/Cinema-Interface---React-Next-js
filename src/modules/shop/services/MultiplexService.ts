import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''


// Operación GET para los puntos de los multiplex
async function getMultiplexPoints(id:number): Promise<any> {
    const url = `${apiUrl}/multiplex/points/${id}`
    return get(url)
  }
