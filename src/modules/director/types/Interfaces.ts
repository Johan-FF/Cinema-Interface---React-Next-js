import { Dato } from "@/app/types/Interfaces";

export interface NewUser extends Dato {
  name: string,
  position: string,
  phoneNumber: string,
  identification: string,
  password: string,
  conPassword: string,
}

export interface Multiplex extends Dato {
  id: string,
  name: string,
  numSala: string,
  pointTicket: string,
  pointSnack: string
}

export interface StatisticsMovie extends Dato {
  movie: string,
  qualification: string
}

export interface StatisticsSales extends Dato {
  multiplex: string,
  sales: string
}