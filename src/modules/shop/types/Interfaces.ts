import { Dato } from "@/app/types/Interfaces"

export interface Multiplex extends Dato {
  id: string,
  name: string,
  numSala: string,
  pointTicket: string,
  pointSnack: string
}

export interface Snack extends Dato {
  id: string,
  name: string,
  price: string,  
  count: number,
  url: string,
}

export interface Invoice extends Dato{
  id:string,
  chairGeneral: string,
  chairPreferential: string,
  idClient: string,
  snacks:string[]
}

export interface Client extends Dato {
  identification: string,
  name: string,
  dateBirth: string,
  phoneNumber: string,
  email: string,
  ratingCinema: string,
  salaryPoints: string
}
