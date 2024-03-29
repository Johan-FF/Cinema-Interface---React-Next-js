import { valuesInput } from "../Types"

export const inputs: 
  {
    user: {content: string, id: valuesInput, placeHolder: string}[],
    employee: {content: string, id: valuesInput, placeHolder: string}[],
    client: {content: string, id: valuesInput, placeHolder: string}[],
    schedule: {content: string, id: valuesInput, placeHolder: string}[],
    movie: {content: string, id: valuesInput, placeHolder: string}[],
    multiplex: {content: string, id: valuesInput, placeHolder: string}[]
    multiplexPoints: {content: string, id: valuesInput, placeHolder: string}[]
  } = {
  user: [
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
  employee: [
    {
      content: "Cédula",
      id: "identification",
      placeHolder: "Ingrese la cédula",
    },
    {
      content: "Nombre",
      id: "name",
      placeHolder: "Ingrese el nombre",
    },
    {
      content: "Fecha de nacimiento",
      id: "dateBirth",
      placeHolder: "Ingrese la fecha",
    },
    {
      content: "Correo electrónico",
      id: "email",
      placeHolder: "Ingrese la fecha",
    },
    {
      content: "Salario",
      id: "salary",
      placeHolder: "Ingrese el salario",
    },
    {
      content: "Fecha de inicio",
      id: "startDate",
      placeHolder: "Ingrese la fecha de inicio",
    },
    {
      content: "Multiplex",
      id: "multiplex",
      placeHolder: "Ingrese el multiplex",
    },
    {
      content: "Número de Celular",
      id: "phoneNumber",
      placeHolder: "Ingrese su número de celular",
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
  client: [
    {
      content: "Cédula",
      id: "identification",
      placeHolder: "Ingrese la cédula",
    },
    {
      content: "Nombre",
      id: "name",
      placeHolder: "Ingrese nombre",
    },
    {
      content: "Fecha de Nacimiento",
      id: "dateBirth",
      placeHolder: "Ingrese fecha de nacimiento",
    },
    {
      content: "Número de celular",
      id: "phoneNumber",
      placeHolder: "Ingrese el número de celular",
    },
    {
      content: "Correo",
      id: "email",
      placeHolder: "Ingrese el correo electrónico",
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
    {
      content: "Día",
      id: "day",
      placeHolder: "Ingrese el día",
    },
    {
      content: "Sala",
      id: "idTheater",
      placeHolder: "Ingrese la sala",
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
  ],
  multiplex: [
    {
      content: "Nombre",
      id: "name",
      placeHolder: "Ingrese el nombre del multiplex"
    },
    {
      content: "Número de salas",
      id: "numSala",
      placeHolder: "Ingrese el número de salas"
    },
    {
      content: "Número de puntos por snack",
      id: "pointSnack",
      placeHolder: "Ingrese el número de puntos"
    },
    {
      content: "Número de puntos por ticket",
      id: "pointTicket",
      placeHolder: "Ingrese el número de puntos"
    },

  ],
  multiplexPoints: [
    {
      content: "Número de puntos por snack",
      id: "pointsSnack",
      placeHolder: "Ingrese el número de puntos"
    },
    {
      content: "Número de puntos por ticket",
      id: "pointsTicket",
      placeHolder: "Ingrese el número de puntos"
    },

  ]
}