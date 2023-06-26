import { type } from "os";
import { valuesLoginInput } from "./ValuesInput";

export const inputsEmpleado: {
  registro: {
    content: string;
    type: string;
    id: string;
    placeHolder: string;
  }[];
} = {
  registro: [
    {
      content: "Codigo",
      type: "text",
      id: "codigo",
      placeHolder: "Ingrese el codigo",
    },
    {
      content: "Cedula",
      type: "number",
      id: "cedula",
      placeHolder: "Ingrese la cedula",
    },
    {
      content: "Cargo",
      type: "text",
      id: "cargo",
      placeHolder: "Ingrese el cargo",
    },
    {
      content: "Nombre",
      type: "text",
      id: "nombre",
      placeHolder: "Ingrese el nombre",
    },
    {
      content: "Telefono",
      type: "number",
      id: "telefono",
      placeHolder: "Ingrese el telefono",
    },
    {
      content: "Fecha de contrato",
      type: "date",
      id: "fechaContrato",
      placeHolder: "Ingrese la fecha",
    },
    {
      content: "Salario",
      type: "number",
      id: "salario",
      placeHolder: "Ingrese el salario",
    },
    {
      content: "Multiplex",
      type: "text",
      id: "multiplex",
      placeHolder: "Ingrese el salario",
    },
  ],
};
