import { Schedule, Theater } from "../types/Interfaces"
import { divideHourFormater, completeHourFormater, splitByComma } from "@/app/helpers/DateFormater"

export const createScheduleAdapter = (schedule: Schedule): any => {return {
    movieName: schedule.movie,
    idTheater: schedule.idTheater,
    day: schedule.day,
    schedule: completeHourFormater(schedule.hour,schedule.minute)
  }
}

export const getSchedulesAdapter = (response: any[]): Schedule[] => {
  let scheduleFormated: string[] = []
  return response.map((item) => {
    scheduleFormated = divideHourFormater(item.schedule)
    return {
      type: 'Horario',
      id: item.id,
      movie: item.movieName,
      hour: scheduleFormated[0],
      minute: scheduleFormated[1],
      day: item.day,
      idTheater: item.idTheater,
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
      id: (++id).toString(),
      day: item.day,
      idTheater: item.idTheater,
      hours: scheduleFormated,
    }
  })
}