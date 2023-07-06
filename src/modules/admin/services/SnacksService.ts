import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todos los snacks de un multiplex
async function getAllSnacksFromMultiplex(id:number): Promise<any[]> {
    const url = `${apiUrl}/snacks/all/${id}`
  return get(url)
}

// Operación POST para crear un nuevo snack
async function createSnack(snackData: any): Promise<any> {
  const url = `${apiUrl}/snacks/new`
  return post(url, snackData)
}
