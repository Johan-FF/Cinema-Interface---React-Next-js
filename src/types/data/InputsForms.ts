import { valuesLoginInput } from "./ValuesInput";

export const inputs: 
  {
    login: {content: string, id: valuesLoginInput, placeHolder: string}[],
    record: {content: string, id: valuesLoginInput, placeHolder: string}[]
  } = {
  login: [
    {
      content: "Cédula",
      id: "identification",
      placeHolder: "Ingrese su cédula",
    },
    {
      content: "Contraseña",
      id: "password",
      placeHolder: "Ingrese su contraseña",
    },
  ],
  record: [
    {
      content: "Nombre",
      id: "name",
      placeHolder: "Ingrese su nombre",
    },
    {
      content: "Cargo",
      id: "position",
      placeHolder: "Ingrese su cargo",
    },
    {
      content: "Número de Celular",
      id: "phoneNumber",
      placeHolder: "Ingrese su número de celular",
    },
    {
      content: "Cédula",
      id: "identification",
      placeHolder: "Ingrese su cédula",
    },
    {
      content: "Contraseña",
      id: "password",
      placeHolder: "Ingrese su contraseña",
    },
    {
      content: "Confirmar contraseña",
      id: "conPassword",
      placeHolder: "Ingrese su contraseña",
    },
  ]
}