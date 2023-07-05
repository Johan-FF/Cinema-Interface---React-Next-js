import axios, { AxiosResponse } from 'axios'

// Función genérica para realizar una petición HTTP
async function makeHttpRequest<T>(
  method: string,
  url: string,
  body?: any,
  headers?: any
): Promise<T> {
  const config = {
    method,
    url,
    data: body,
    headers,
  }

  try {
    const response: AxiosResponse<T> = await axios(config)
    return response.data
  } catch (error) {
    throw new Error(`Error making ${method} request to ${url}: ${error}`)
  }
}

// GET
export async function get(url: string, headers?: any): Promise<any> {
  return makeHttpRequest<any>('get', url, undefined, headers)
}

// PUT
export async function put(url: string, body?: any, headers?: any): Promise<any> {
  return makeHttpRequest<any>('put', url, body, headers)
}

// POST
export async function post(url: string, body?: any, headers?: any): Promise<any> {
  return makeHttpRequest<any>('post', url, body, headers)
}

// DELETE
export async function del(url: string, headers?: any): Promise<any> {
  return makeHttpRequest<any>('delete', url, undefined, headers)
}
