import { Dato } from "@/app/types/Interfaces"

export interface Employee extends Dato {
  id: string,
  identification: string,
  name: string,
  dateBirth: string,
  phoneNumber: string,
  email: string,
  codeEmployee: string,
  salary: string,
  startDate: string,
  multiplex: string,
  password: string
}

export interface Schedule extends Dato {
  id: string,
  movie: string,
  hour: string,
  minute: string,
  day:string,
  idTheater:string
}

export interface MultiplexPoints extends Dato{
  pointsTicket: string,
  pointsSnack: string
}