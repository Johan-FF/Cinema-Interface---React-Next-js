import { API_URL } from "@/app/environment"
import { get, generateAuthHeader } from "@/app/services/HttpService"
import { Snack } from "../types/Interfaces"
import { getSnacksAdapter } from "../adapters/SnacksAdapter"

// Operación GET para obtener todos los snacks
async function getAllSnacks(): Promise<any[]> {
  const url = `${API_URL}/snacks/all`
  return get(url, generateAuthHeader())
}
export async function getAllSnacksProxy(): Promise<Snack[]> {
  let list: Snack[] = []
  await getAllSnacks()
    .then(response => {
      list = getSnacksAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (allSnacks): ${error}`)
    })
  return list
}
