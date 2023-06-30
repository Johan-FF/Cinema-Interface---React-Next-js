import Dato from "./Dato"

export interface Schedule extends Dato {
  movie: string,
  hour: string,
  minute: string,
}