import { get, post } from "@/app/services/HttpService"

// Operación GET para obtener todos los horarios
export async function getAllSchedules(): Promise<any[]> {
  const url = `${process.env.API_URL}/schedules/all`
  return get(url)
}

// Operación POST para crear un nuevo horario
export async function createSchedule(scheduleData: any): Promise<any> {
  const url = `${process.env.API_URL}/schedules/new`
  return post(url, scheduleData)
}
