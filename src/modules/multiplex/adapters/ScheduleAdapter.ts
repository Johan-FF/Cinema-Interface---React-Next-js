import { Schedule, Theater } from "../types/Interfaces"
import { divideHourFormater, completeHourFormater, splitByComma } from "@/app/helpers/DateFormater"

export const createScheduleAdapter = (schedule: Schedule): any => {return {
    movie_name: schedule.movie,
    id_theater: schedule.idTheater,
    day: schedule.day,
    schedule: completeHourFormater(schedule.hour,schedule.minute)
  }
}

export const getSchedulesAdapter = (response: any[]): Schedule[] => {
  let scheduleFormated: string[] = []
  return response.map((item) => {
    scheduleFormated = divideHourFormater(item.schedule)
    return {
      type: 'schedule',
      id: item.id,
      movie: item.movie_name,
      hour: scheduleFormated[0],
      minute: scheduleFormated[1],
      day: item.day,
      idTheater: item.id_theater,
    }
  })
}

export const getSchedulesByMultiplexAdapter = (response: any[]): Theater[] => {
  let id: number = 0
  let scheduleFormated: string[] = []
  return response.map((item) => {
    scheduleFormated = splitByComma(item.hours)
    return {
      type: 'Sala',
      id: (id++).toString(),
      idTheater: item.id_theater,
      hours: scheduleFormated,
    }
  })
}