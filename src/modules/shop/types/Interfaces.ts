import { Dato } from "@/app/types/Interfaces"

export interface Multiplex extends Dato {
  id: number,
  name: string,
  numSala: number,
  pointTicket: number,
  pointSnack: number
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
