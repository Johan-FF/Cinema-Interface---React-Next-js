import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación GET para obtener todos los horarios
async function getAllSchedules(): Promise<any[]> {
    const url = `${apiUrl}/schedules/all`
  return get(url)
}


// Operación POST para crear un nuevo horario
async function createSchedule(scheduleData: any): Promise<any> {
  const url = `${apiUrl}/schedule/new`
  return post(url, scheduleData)
}
