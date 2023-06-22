import { valuesLoginInput } from "../data/ValuesInput";

export default interface props {
  sendMessage: string,
  inputs: {
    content: string,
    id: valuesLoginInput,
    placeHolder: string,
  }[]
}