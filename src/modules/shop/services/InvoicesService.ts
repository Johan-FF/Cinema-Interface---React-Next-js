import { get, put, del, post } from "@/app/services/HttpService"

const apiUrl = ''


// Operación POST para crear una factura nueva
async function createEmployee(invoiceData: any): Promise<any> {
  const url = `${apiUrl}/invoice/new`
  return post(url, invoiceData)
}
