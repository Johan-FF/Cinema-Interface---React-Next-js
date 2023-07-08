
/**
 * Each interface describes the data types or structures needed by the system to interoperate
 */

export interface Dato {
  type: string,
}

export interface User extends Dato {
  identification: string,
  password: string,
}

export interface Movie extends Dato {
  id:string,
  title: string,
  duration: string,
  age: string,
  synopsis: string,
  imgUrl: string,
}

export interface Employee extends Dato {
  id: string,
  identification: string,
  name: string,
  dateBirth: string,
  phoneNumber: string,
  email: string,
  codeEmployee: string,
  salary: string,
  startDate: string,
  multiplex: string,
  password: string
}
