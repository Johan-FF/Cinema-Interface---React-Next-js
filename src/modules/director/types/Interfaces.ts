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