import { Schedule, MultiplexPoints } from "@/app/modules/multiplex/types/Interfaces"
import { Employee } from "../Interfaces"
import {Multiplex} from  "@/app/modules/director/types/Interfaces"
import { Movie } from "../Interfaces"

export const tables: 
  {
    users: Employee[],
    schedules: Schedule[],
    movies: Movie[],
    multiplex: Multiplex[],
    multiplexPoints: MultiplexPoints[]
  } = {
  users: [
    {
      type: 'Empleado',
      id: '1',
      startDate: '10/12/2022',
      salary: '1300333',
      multiplex: 'Titán',
      name: 'juan',
      position: 'cajero',
      phoneNumber: '333993991',
      identification: '123444',
      dateBirth: '10/12/1990',
      codeEmployee: '123333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '1233313',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '41233',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '67133',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '600333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '9901333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '2333333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '823833',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '1',
      startDate: '10/12/2022',
      salary: '1300333',
      multiplex: 'Titán',
      name: 'juan',
      position: 'cajero',
      phoneNumber: '333993991',
      identification: '123444',
      dateBirth: '10/12/1990',
      codeEmployee: '123333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '413333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '999333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '1223333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '603333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '88333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '9923333',
      email:'test@gmail.com',
      password:'12345'
    
    },
    {
      type: 'Empleado',
      id: '2',
      identification: '33441234',
      position: 'Despachador de comida',
      name: 'pedro',
      phoneNumber: '32123993991',
      startDate: '4/11/2022',
      salary: '1300333',
      multiplex: 'Unicentro',
      dateBirth: '10/12/1990',
      codeEmployee: '923333',
      email:'test@gmail.com',
      password:'12345'
    
    },
  ],
  schedules: [
    {
      type: "Horario",
      movie: "Avatar",
      hour: "12",
      minute: "56"
    },
    {
      type: "Horario",
      movie: "El paseo",
      hour: "3",
      minute: "56"
    },
    {
      type: "Horario",
      movie: "Titanic",
      hour: "8",
      minute: "45"
    },
    {
      type: "Horario",
      movie: "Rápidos y Furiosos",
      hour: "1",
      minute: "33"
    },
    {
      type: "Horario",
      movie: "Toy Story",
      hour: "18",
      minute: "06"
    },
  ],
  movies: [
    {
      type: "Película",
      title: "Avatar",
      duration: "2h 34m",
      age: "14",
      synopsis: "Personas azules salvan su mundo",
      imgUrl: "https://es.web.img3.acsta.net/c_310_420/pictures/22/11/02/15/37/0544148.jpg",
    },
    {
      type: "Película",
      title: "Morbius",
      duration: "1h 34m",
      age: "17",
      synopsis: "Persona que es un vampiro",
      imgUrl: "https://es.web.img2.acsta.net/c_310_420/pictures/22/02/10/13/16/1386612.jpg",
    },
    {
      type: "Película",
      title: "Rapidos y furiosos 10",
      duration: "2:05",
      age: "12",
      synopsis: "Personas en familia",
      imgUrl: "https://mx.web.img3.acsta.net/c_310_420/pictures/23/04/20/02/29/5514328.jpg",
    },
  ],
  schedules: [
    {
      type: "Horario",
      movie: "Avatar",
      hour: "12",
      minute: "56"
    },
    {
      type: "Horario",
      movie: "El paseo",
      hour: "3",
      minute: "56"
    },
    {
      type: "Horario",
      movie: "Titanic",
      hour: "8",
      minute: "45"
    },
    {
      type: "Horario",
      movie: "Rápidos y Furiosos",
      hour: "1",
      minute: "33"
    },
    {
      type: "Horario",
      movie: "Toy Story",
      hour: "18",
      minute: "06"
    },
  ],
  multiplex: [
    {
      type: "Multiplex",
      id: '1',
      name:'Titan',
      numSala:'3',
      pointSnack:'2',
      pointTicket:'4'
    },
    {
      type: "Multiplex",
      id: '2',
      name:'Unicentro',
      numSala:'5',
      pointSnack:'3',
      pointTicket:'5'
    },
  ],
  multiplexPoints:[{
    type: "multiplexPoints",
    pointsSnack:'2',
    pointsTicket:'5'
  }
  ]
}