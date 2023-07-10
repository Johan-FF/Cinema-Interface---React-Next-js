import { Invoice } from "../types/Interfaces"

export const createInvoiceAdapter = (invoice: Invoice): any => {return {
    idMovie: invoice.idMovie,
    idTheater: invoice.idTheater,
    chairGeneral: invoice.chairGeneral,
    chairPreferential: invoice.chairPreferential,
    schedule: invoice.schedule,
    numberDocument: invoice.identification,
    snacks: invoice.snacks
  }
}
