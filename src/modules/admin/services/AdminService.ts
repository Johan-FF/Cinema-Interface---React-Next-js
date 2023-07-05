import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todos los administradores de usuarios
async function getAllAdmins(): Promise<any[]> {
  const url = `${apiUrl}/users/all/admins`
  return get(url)
}

// Operación PUT para actualizar un administrador de usuarios por su ID
async function updateAdmin(id: number, adminData: any): Promise<any> {
  const url = `${apiUrl}/users/admins/${id}`
  return put(url, adminData)
}

// Operación DELETE para eliminar un administrador de usuarios por su ID
async function deleteAdmin(id: number): Promise<any> {
  const url = `${apiUrl}/users/admins/${id}`
  return del(url)
}

// Operación POST para crear un nuevo administrador de usuarios
async function createAdmin(adminData: any): Promise<any> {
  const url = `${apiUrl}/users/admin/new`
  return post(url, adminData)
}
