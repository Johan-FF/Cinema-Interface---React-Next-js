import { post } from "./HttpService"
import Account from "./Account"
import { API_URL, KEY_USER_TOKEN } from "../environment"

export async function login(userData: any): Promise<any> {
  const url = `${API_URL}/auth/login`
  const response: Promise<any> =  post(url, userData)
  response
  .then(responseFetch => {
      const account: Account = Account.getInstance()
      account.setName(responseFetch.name)
      account.setRol(responseFetch.rol)
      account.setID(responseFetch.id)
      account.setIDMultiplex(responseFetch.idMultiplex)
      account.setToken(responseFetch.token)
    })
    .catch(error => {
      console.log(error)
    })
}