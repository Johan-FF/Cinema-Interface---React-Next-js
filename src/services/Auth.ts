import { post } from "./HttpService"
import Account from "./Account"
import { API_URL_USER, KEY_USER_TOKEN } from "../environment"
import Cookies from "js-cookie"
import { getMultiplexPointsProxy } from "./MultiplexService"

export async function login(userData: any): Promise<any> {
  const url = `${API_URL_USER}/auth/login`
  await post(url, userData)
    .then(responseFetch => {
      Cookies.set(KEY_USER_TOKEN, responseFetch.token, { expires: 1 })
      setAccountValues(responseFetch)
    })
    .catch(error => {
      throw new Error(`Error (login) request to ${url}: ${error}`)
    })
  }

async function setAccountValues(data: any) {
  const account: Account = Account.getInstance()
  account.setName(data.name)
  if (data.rol === "ROLE_DIRECTOR")
    account.setRol("DIRECTOR")
  else if (data.rol === "ROLE_ADMIN")
    account.setRol("ADMINISTRADOR")
  else if (data.rol === "ROLE_EMPLOYEE"){
    account.setRol("EMPLEADO")
    await getMultiplexPointsProxy(data.idMultiplex)
      .then(response => {
        account.setPointsSnack(response.pointsSnack)
        account.setPointsTicket(response.pointsTicket)
      })
  }
  account.setID(data.id)
  account.setIDMultiplex(data.idMultiplex)
}