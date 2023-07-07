import { get, post } from "@/app/services/HttpService"
import { createAdminAdapter } from "../adapters/AdminAdapter"
import { Employee } from "../types/Interfaces"

// Operación GET para obtener todos los administradores
export async function getAllAdmins(): Promise<any[]> {
  const url = `${process.env.API_URL}/users/all/admins`
  return get(url)
}

// Operación POST para crear un nuevo administrador
export async function createAdmin(adminData: Employee): Promise<any> {
  const url = `${process.env.API_URL}/users/admins/new`
  return post(url, createAdminAdapter(adminData))
}
