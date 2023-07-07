import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todos los empleados de un multiplex
async function getAllEmployeesFromMulti(idMultiplex:number): Promise<any[]> {
    const url = `${apiUrl}/users/all/employee/${idMultiplex}`
  return get(url)
}

// Operación PUT para actualizar un empleado usando su ID
async function updateEmployee(id: number, employeeData: any): Promise<any> {
  const url = `${apiUrl}/users/employee/${id}`
  return put(url, employeeData)
}

// Operación DELETE para eliminar un empleado
async function deleteEmployee(id: number): Promise<any> {
  const url = `${apiUrl}/users/employee/${id}`
  return del(url)
}

// Operación POST para crear un nuevo administrador de usuarios
async function createEmployee(employeeData: any): Promise<any> {
  const url = `${apiUrl}/users/employee/new`
  return post(url, employeeData)
}
