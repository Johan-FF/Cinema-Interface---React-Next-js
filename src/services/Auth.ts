import { post } from "./HttpService"
import Account from "./Account"
import { API_URL_USER, KEY_USER_TOKEN } from "../environment"
import Cookies from "js-cookie"

export async function login(userData: any): Promise<any> {
  const url = `${API_URL_USER}/auth/login`
  await post(url, userData)
    .then(responseFetch => {
      setAccountValues(responseFetch)
    })
    .catch(error => {
      throw new Error(`Error (login) request to ${url}: ${error}`)
    })
  }

async function setAccountValues(data: any) {
  const account: Account = Account.getInstance()
  let rol: string = ''
  let pointsSnack: string = ''
  let pointsTicket: string = ''
  if (data.rol === "ROLE_DIRECTOR")
    rol = "DIRECTOR"
  else if (data.rol === "ROLE_ADMIN")
    rol = "ADMINISTRADOR"
  else if (data.rol === "ROLE_EMPLOYEE"){
    rol = "EMPLEADO"
  }
  account.setRol(rol)
  account.setName(data.name)
  account.setID(data.id)
  account.setIDMultiplex(data.idMultiplex)
  
  Cookies.set(
    KEY_USER_TOKEN,
    JSON.stringify({
      clientName: data.name,
      clientRol: rol,
      clientId: data.id,
      clientIdMultiplex: data.idMultiplex,
      clientToken: data.token,
      clientPointsSnack: pointsSnack,
      clientPointsTicket: pointsTicket,
    }),
    { expires: 1 }
  )
}