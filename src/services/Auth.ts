import { post } from "./HttpService"
import Account from "./Account"
import { useRouter } from "next/navigation"
import { cookies } from "next/dist/client/components/headers"

const apiUrl: string = ''

export async function login(userData: any): Promise<any> {
  const url = `${apiUrl}/auth/login`
  const response: Promise<any> =  post(url, userData)
  response
    .then(response => {
      const storeCookies = cookies()
      redirectAndSaveData(response)
    })
    .catch(error => {
      console.log(error)
    })
}

function redirectAndSaveData(data: any) {
  const router = useRouter()
  const account: Account = Account.getInstance()
  account.setName(data.name)
  account.setRol(data.rol)
  if (data.rol === "ROLE_DIRECTOR")
    router.push("/admin/general")
  else if (data.rol === "ROLE_ADMIN")
    router.push("/admin/multiplex")
  else if (data.rol === "ROLE_EMPLOYEE")
    router.push("/admin/shopping")
}