import { valuesInput } from "../Types"

export const inputs: 
  {
    login: {content: string, id: valuesInput, placeHolder: string}[],
    record: {content: string, id: valuesInput, placeHolder: string}[],
    schedule: {content: string, id: valuesInput, placeHolder: string}[],
    movie: {content: string, id: valuesInput, placeHolder: string}[],
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
  ],
  schedule: [
    {
      content: "Película",
      id: "movie",
      placeHolder: "Ingrese la película",
    },
    {
      content: "Hora",
      id: "hour",
      placeHolder: "Ingrese la hora",
    },
    {
      content: "Minutos",
      id: "minute",
      placeHolder: "Ingrese los minutos",
    },
  ],
  movie: [
    {
      content: "Título",
      id: "title",
      placeHolder: "Ingrese el título"
    },
    {
      content: "Duración",
      id: "duration",
      placeHolder: "Ingrese la duración"
    },
    {
      content: "Edad",
      id: "age",
      placeHolder: "Ingrese la edad"
    },
    {
      content: "Sinópsis",
      id: "synopsis",
      placeHolder: "Ingrese la sinópsis"
    },
    {
      content: "URL de la imágen",
      id: "imgUrl",
      placeHolder: "Ingrese la url de la imágen"
    },
  ]
}