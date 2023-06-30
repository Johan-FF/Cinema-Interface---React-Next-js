import { valuesNavBar } from "./ValuesInput"

export const pages: {
  admin: {name:string, tag:valuesNavBar}[],
  multiplex: {name:string, tag:valuesNavBar}[],
  employee: {name:string, tag:valuesNavBar}[]
} = {
  admin: [
    {name:'Administrador de Empleados',tag:'GenEmployee'},
    {name:'Películas',tag:'GenMovie'},
  ],
  multiplex: [
    {name:'Administrador de Empleados',tag:'MulEmployee'},
    {name:'Horarios',tag:'MulSchedule'},
  ],
  employee: [
    {name:'Comidas',tag:'ShopSnacks'},
    {name:'Películas',tag:'ShopMovies'},
    {name:'Calificación',tag:'ShopQualification'},
  ]
}