import axios from 'axios'
import response from './response'

export async function fetchData(id: string, pass: string): Promise<response> {
  let responseData !: response
  try {
    const data = {
      numberDocument: id,
      password: pass,
    }
    const response = await axios.post('http://localhost:8090/auth/login', data)
    .then(response => {
      responseData = {
        token: response.data.token,
        rol: response.data.rol,
        name: response.data.name
      }
    })
    .catch(error => {
      console.log(error)
    })
  } catch (error) {
    console.error(error)
  }
  return {token : responseData.token, rol : responseData.rol, name : responseData.name}
}