import axios from 'axios'
import response from './response'

const token = ''

const headers = {
  Authorization: `Bearer ${token}`,
}

export async function fetchData(id: string, pass: string): Promise<response> {
  try {
    const data = {
      numberDocument: id,
      password: pass,
    }
    const response = await axios.get('TU_URL',{ headers, data })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
  } catch (error) {
    console.error(error)
  }
  return {token: '', rol: '', name: ''}
}