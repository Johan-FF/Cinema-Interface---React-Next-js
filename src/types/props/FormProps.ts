import { valuesInput } from '../data/ValuesInput'
import { z } from 'zod'
import { typeModel } from '../interfaces/Types'

export default interface formProps {
  execute: Function,
  model: typeModel,
  schema: z.ZodObject<z.ZodRawShape>,
  inputs: {
    content: string,
    id: valuesInput,
    placeHolder: string,
  }[],
  aditionalCondition: {
    have: boolean,
    first: string,
    second: string,
    error: string
  },
  sendMessage: string,
}