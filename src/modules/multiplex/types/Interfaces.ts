import { Dato } from "@/app/types/Interfaces"

export interface MultiplexPoints extends Dato{
  pointsTicket: string,
  pointsSnack: string
}

export interface Schedule extends Dato {
  id: string,
  movie: string,
  hour: string,
  minute: string,
  day:string,
  idTheater:string
}

export interface Theater extends Dato {
  id: string,
  idTheater: string,
  hours: string[]
}