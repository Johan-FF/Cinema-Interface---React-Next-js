import { Dato } from "@/app/types/Interfaces"

export interface Snack extends Dato {
  id: string,
  name: string,
  price: string,  
  count: number,
  url: string,
}

export interface Invoice extends Dato{
  idMovie: string,
  idTheater: string,
  schedule: string,
  chairGeneral: string,
  chairPreferential: string,
  identification: string,
  snacks:{idSnack:string,quantitySnack:string}[]
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
