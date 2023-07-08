import { z } from 'zod'

export const newClientSchema = z.object({
  name: z.string().min(1, {message: 'El nombre es requerido'}).max(50),
  identification: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'La cédula es requerida'}),
  dateBirth: z.string().refine((date)=> new Date(date).toString()!=='Fecha invalida',{message:'La fecha de nacimiento es requerida'}), 
  phoneNumber: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'El número de celular es requerido'}),
  email: z.string().email({message:'El correo electronico es requerido'}),
  
})


export const newEmployeeSchema = z.object({
  name: z.string().min(1, {message: 'El nombre es requerido'}).max(50),
  identification: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'La cédula es requerida'}),
  dateBirth: z.string().refine((date)=> new Date(date).toString()!=='Fecha invalida',{message:'La fecha de nacimiento es requerida'}), 
  email: z.string().email({message:'El correo electronico es requerido'}),
  salary: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'El salario es requerido'}),
  startDate: z.string().refine((date)=> new Date(date).toString()!=='Fecha invalida',{message:'La fecha de nacimiento es requerida'}), 
  multiplex: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'El multiplex es requerido'}),
  phoneNumber: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'El número de celular es requerido'}),
  password: z.string().min(1, {message: 'La contraseña es requerido'}).max(50),
  conPassword: z.string().min(1, {message: 'La contraseña es requerido'}).max(50),
})

export const userSchema = z.object({
  identification: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'La cédula es requerida'}),
  password: z.string().min(1, {message: 'La contraseña es requerido'}).max(50),
})

export const scheduleSchema = z.object({
  movie: z.string().min(1, {message: 'La película es requerida'}).max(50),
  hour: z.string().refine((number) => {
    const isNumber: boolean = !isNaN(parseInt(number))
    if(isNumber){
      const num: number = parseInt(number)
      if(0<num || num>24) return true
    }
    return false
  }, {message: 'La hora debe ser un valor numérico entre 0 y 24'}),
  minute: z.string().refine((number) => {
    const isNumber: boolean = !isNaN(parseInt(number))
    if(isNumber){
      const num: number = parseInt(number)
      if(0<num || num>60) return true
    }
    return false
  }, {message: 'Los minutos deben ser un valor numérico entre 0 y 60'})
})

export const movieSchema = z.object({
  title: z.string().min(1, {message: 'El título es requerido'}).max(50),
  duration: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'La duración es requerida'}),
  age: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'La edad es requerida'}),
  synopsis: z.string().min(1, {message: 'La sinópsis es requerida'}).max(500),
  imgUrl: z.string().min(1, {message: 'La url de la imágen es requerida'}).max(50),
})

export const multiplexSchema = z.object({
  name: z.string().min(1, {message: 'El nombre es requerido'}).max(50),
  numSala: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'El número de salas es requerido'}),
  pointTicket: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'Los puntos por ticket un campo requerido'}),
  pointSnack: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'Los puntos por snack es un campo requerido'}),
})

export const multiplexPointsSchema = z.object({
  pointsTicket: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'Los puntos por ticket un campo requerido'}),
  pointsSnack: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'Los puntos por snack es un campo requerido'}),
})

