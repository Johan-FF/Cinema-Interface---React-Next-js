import { API_URL_MULTIPLEX } from "@/app/environment"
import { generateAuthHeader, get, post } from "@/app/services/HttpService"
import { Schedule, Theater } from "../types/Interfaces"
import { getSchedulesAdapter, createScheduleAdapter, getSchedulesByMultiplexAdapter } from "../adapters/ScheduleAdapter"

// Operación GET para obtener todos los horarios
async function getAllSchedules(): Promise<any> {
  const url = `${API_URL_MULTIPLEX}/show/schedules/all`
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
  const url = `${API_URL_MULTIPLEX}/show/schedules/new`
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

// Operación GET para obtener todos los horarios
async function getAllSchedulesByMultiplex(
  idMovie: string, idMultiplex: string
): Promise<any> {
  const url = `${API_URL_MULTIPLEX}/show/schedules/all/${idMovie}/${idMultiplex}`
  console.log(url)
  return get(url,generateAuthHeader())
}
export async function getAllSchedulesByMultiplexProxy(
  idMovie: string, idMultiplex: string
): Promise<Theater[]> {
  let list: Theater[] = []
  await getAllSchedulesByMultiplex(idMovie, idMultiplex)
    .then(response => {
      list = getSchedulesByMultiplexAdapter(response)
    })
    .catch(error => {
      throw new Error(`Error request (allSchedulesByMultiplex): ${error}`)
    })
  return list
}
