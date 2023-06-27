import { valuesNavBar } from "./ValuesInput"

export const pages: {
  admin: {name:string, tag:valuesNavBar}[],
  multiplex: {name:string, tag:valuesNavBar}[],
  employee: {name:string, tag:valuesNavBar}[]
} = {
  admin: [
    {name:'Administrador de Empleados',tag:'Employee'},
  ],
  multiplex: [
  ],
  employee: [
    {name:'Comidas',tag:'Snacks'},
    {name:'Películas',tag:'Movies'},
  ]
}