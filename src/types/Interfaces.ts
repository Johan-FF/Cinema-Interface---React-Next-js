
/**
 * Each interface describes the data types or structures needed by the system to interoperate
 */

export interface Dato {
  type: string,
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
