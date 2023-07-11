'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { KEY_USER_TOKEN } from '../environment'
import Account from '../services/Account'
import CartProvider from '../modules/shop/hooks/useCart'
import ClientProvider from '../modules/shop/hooks/useClient'

export const withAuth = (Component: NextPage) => {
  const Wrapper = (props: any) => {
    const account: Account = Account.getInstance()
    const valuesUser = Cookies.get(KEY_USER_TOKEN)
    const router = useRouter()
    
    if (valuesUser) {
      const objectUser = JSON.parse(valuesUser)
      if(objectUser.clientToken==='' || objectUser.clientToken===null){
        router.push('/')
        return null
      }
    }
    if(Component.displayName==='Movie'
      || Component.displayName==='Rooms'
      || Component.displayName==='Shopping'){
        if(account.getRol()==='EMPLEADO'){
          return (
            <CartProvider>
              <ClientProvider>
                <Component {...props} />  
              </ClientProvider>
            </CartProvider>
          )
        } else {
          if(account.getRol()==='DIRECTOR'){
            router.push('/admin/general')
            return null
          } else if(account.getRol()==='ADMINISTRADOR') {
            router.push('/admin/multiplex')
            return null
          }
        }
    } else if(Component.displayName==='Director'){
      if(account.getRol()==='DIRECTOR'){
        return <Component {...props} />
      } else {
        if(account.getRol()==='EMPLEADO'){
          router.push('/admin/shopping')
          return null
        } else if(account.getRol()==='ADMINISTRADOR') {
          router.push('/admin/multiplex')
          return null
        }
      }
    } else if(Component.displayName==='Multiplex'){
      if(account.getRol()==='ADMINISTRADOR'){
        return <Component {...props} />
      } else {
        if(account.getRol()==='DIRECTOR'){
          router.push('/admin/general')
          return null
        } else if(account.getRol()==='EMPLEADO') {
          router.push('/admin/shopping')
          return null
        }
      }
    }
  }
  return Wrapper
}