import { API_URL_MULTIPLEX } from "@/app/environment"
import { generateAuthHeader, post } from "@/app/services/HttpService"
import { createInvoiceAdapter } from "../adapters/InvoiceAdapter"
import { Invoice } from "../types/Interfaces"

// Operación POST para crear una factura nueva
async function createInvoice(invoiceData: any): Promise<any> {
  const url = `${API_URL_MULTIPLEX}/invoice/new`
  return post(
    url,
    createInvoiceAdapter(invoiceData),
    generateAuthHeader())
}
export async function createInvoiceProxy(invoice: Invoice): Promise<string> {
  let message: string = ''
  await createInvoice(invoice)
    .then(response => {
      message = response.message
    })
    .catch(error => {
      throw new Error(`Error request (createInvoice): ${error}`)
    })
  return message
}
