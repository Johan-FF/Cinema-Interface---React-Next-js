import { Dato } from "@/app/types/Interfaces"

export interface Multiplex extends Dato {
  id: number,
  name: string,
  showtimes: string[]
}

export interface Snack extends Dato {
  id: string,
  name: string,
  price: string,  
  points: number,
  count: number,
  url: string,
}
