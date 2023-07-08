import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { KEY_USER_TOKEN } from '../environment'

export const withAuth = (Component: NextPage) => {
  const Wrapper = (props: any) => {
    const token = Cookies.get(KEY_USER_TOKEN)
    if (!token) {
      const router = useRouter()
      router.push('/')
      return null
    }
    return <Component {...props} />
  }
  return Wrapper
}