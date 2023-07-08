import { API_URL } from "@/app/environment"
import { generateAuthHeader, get, post } from "@/app/services/HttpService"
import { Schedule } from "../types/Interfaces"
import { getSchedulesAdapter, createScheduleAdapter } from "../adapters/ScheduleAdapter"

// Operación GET para obtener todos los horarios
async function getAllSchedules(): Promise<any> {
  const url = `${API_URL}/schedules/all`
  return get(url,generateAuthHeader())
}
export async function getAllSchedulesProxy(): Promise<Schedule[]> {
  let list: Schedule[] = []
  await getAllSchedules()
    .then(response => {
      list = getSchedulesAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (allSchedules): ${error}`)
    })
  return list
}

// Operación POST para crear un nuevo horario
async function createSchedule(scheduleData: Schedule): Promise<any> {
  const url = `${API_URL}/schedules/new`
  return post(
    url, 
    createScheduleAdapter(scheduleData), 
    generateAuthHeader()
  )
}
export async function createScheduleProxy(scheduleData: Schedule): Promise<string> {
  let message: string = ''
  await createSchedule(scheduleData)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (createSchedules): ${error}`)
    })
  return message
}
