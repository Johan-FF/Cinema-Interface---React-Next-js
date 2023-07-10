import { get, post, generateAuthHeader } from "@/app/services/HttpService"
import { createAdminAdapter, getAdminsAdapter } from "../adapters/AdminAdapter"
import { Employee } from "@/app/types/Interfaces"
import { API_URL_USER } from "@/app/environment"

// Operación GET para obtener todos los administradores
async function getAllAdmins(): Promise<any[]> {
  const url = `${API_URL_USER}/users/all/admins`
  return get(url,generateAuthHeader())
}
export async function getAllAdminsProxy(): Promise<Employee[]> {
  let list: Employee[] = []
  await getAllAdmins()
    .then(response => {
      list = getAdminsAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (allAdmins): ${error}`)
    })
  return list
}

// Operación POST para crear un nuevo administrador
 async function createAdmin(adminData: Employee): Promise<any> {
  const url = `${API_URL_USER}/users/admins/new`
  return post(
    url, 
    createAdminAdapter(adminData),
    generateAuthHeader()
  )
}
export async function createAdminProxy(adminData:Employee):Promise<string>{
  let message: string = ''
  await createAdmin(adminData)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (createAdmin): ${error}`)
    })
  return message
}
