import { post } from "@/app/services/HttpService"

const apiUrl = ''

// Operación POST para crear una factura nueva
async function createInvoice(invoiceData: any): Promise<any> {
  const url = `${apiUrl}/invoice/new`
  return post(url, invoiceData)
}
