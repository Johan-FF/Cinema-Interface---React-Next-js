
/**
 * Each interface describes the data types or structures needed by the system to interoperate
 */

export interface Dato {
  type: string,
}

export interface Movie extends Dato {
  title: string,
  duration: string,
  age: string,
  synopsis: string,
  imgUrl: string,
}

export interface Multiplex extends Dato {
  id: number
  name: string
  showtimes: string[]
}

export interface Schedule extends Dato {
  movie: string,
  hour: string,
  minute: string,
}

export interface NewUser extends Dato {
  name: string,
  position: string,
  phoneNumber: string,
  identification: string,
  password: string,
  conPassword: string,
}

export interface User extends Dato {
  identification: string,
  password: string,
}

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