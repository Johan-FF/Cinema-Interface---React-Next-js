import { Schedule } from "../types/Interfaces"

const scheduleFormater = (hour: string, minute: string) => hour+'-'+minute+'-00' 

export const createScheduleAdapter = (schedule: Schedule): any => {return {
    movie_name: schedule.movie,
    id_theater: schedule.idTheater,
    day: schedule.day,
    schedule: scheduleFormater(schedule.hour,schedule.minute)
  }
}

const hourAndMinuteFormater = (schedule: string) => schedule.split('-')

export const getSchedulesAdapter = (response: any[]): Schedule[] => {
  let scheduleFormated: string[] = []
  return response.map((item) => {
    scheduleFormated = hourAndMinuteFormater(item.schedule)
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