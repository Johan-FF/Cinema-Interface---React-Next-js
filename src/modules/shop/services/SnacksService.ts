import { get } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todos los snacks
export async function getAllSnacks(id:number): Promise<any[]> {
  const url = `${apiUrl}/snacks/all/${id}`
  return get(url)
}
