import { Dato } from "@/app/types/Interfaces"

export interface Employee extends Dato {
  id: string,
  name: string,
  position: string,
  phoneNumber: string,
  identification: string,
  startDate: string,
  salary: string,
  multiple: string
}

export interface Movie extends Dato {
  id:string,
  title: string,
  duration: string,
  age: string,
  synopsis: string,
  imgUrl: string,
}

export interface Schedule extends Dato {
  movie: string,
  hour: string,
  minute: string,
  day:string,
  idTheater:string
}