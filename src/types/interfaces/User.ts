import Dato from "./Dato"

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
