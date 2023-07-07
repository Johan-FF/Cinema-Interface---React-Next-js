import { valuesNavBar } from "../Types"

export const pages: {
  admin: {name:string, tag:valuesNavBar}[],
  multiplex: {name:string, tag:valuesNavBar}[],
  employee: {name:string, tag:valuesNavBar}[]
} = {
  admin: [
    {name:'Administrador de Empleados',tag:'GenEmployee'},
    {name:'Películas',tag:'GenMovie'},
    {name: 'Administrar multiplex', tag:'GenMultiplex'},
    {name: 'Ver graficas', tag:'Dashboard'}
  ],
  multiplex: [
    {name:'Horarios',tag:'MulSchedule'},
    {name:'Puntos del multiplex', tag: 'MulPoints'}
  ],
  employee: [
    {name:'Comidas',tag:'ShopSnacks'},
    {name:'Películas',tag:'ShopMovies'},
    {name:'Calificación',tag:'ShopQualification'},
  ]
}