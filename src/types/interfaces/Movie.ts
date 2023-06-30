import Dato from "./Dato"

export interface Movie extends Dato {
  title: string,
  duration: string,
  age: string,
  synopsis: string,
  imgUrl: string,
}