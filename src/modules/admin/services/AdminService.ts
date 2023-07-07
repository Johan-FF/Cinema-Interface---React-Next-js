import { get, post } from "@/app/services/HttpService"
import { createAdminAdapter, getAdminsAdapter } from "../adapters/AdminAdapter"
import { Employee } from "../types/Interfaces"

const apiUrl=""
// Operación GET para obtener todos los administradores
export async function getAllAdmins(): Promise<any[]> {
  const url = `${apiUrl}/multiplex/all`
  try{
    const response= await get(url);
    const list = getAdminsAdapter(response);
    return list;
  }catch(error){
    console.log(error)
    return []
  }
}

// Operación POST para crear un nuevo administrador
export async function createAdmin(adminData: Employee): Promise<any> {
  const url = `${process.env.API_URL}/users/admins/new`
  return post(url, createAdminAdapter(adminData))
}
