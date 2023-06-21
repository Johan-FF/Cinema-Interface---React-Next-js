import { z } from 'zod'

export const newUserSchema = z.object({
  name: z.string().min(1, {message: 'El nombre es requerido'}).max(50),
  position: z.string().min(1, {message: 'El cargo es requerido'}).max(50),
  phoneNumber: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'El número de celular es requerido'}),
  identification: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'La cédula es requerida'}),
  password: z.string().min(1, {message: 'La contraseña es requerido'}).max(50),
  conPassword: z.string().min(1, {message: 'La contraseña es requerido'}).max(50),
})

export const userSchema = z.object({
  identification: z.string().refine((number) => !isNaN(parseInt(number)), {message: 'La cédula es requerida'}),
  password: z.string().min(1, {message: 'La contraseña es requerido'}).max(50),
})