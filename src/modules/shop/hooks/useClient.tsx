import { KEY_CLIENT } from '@/app/environment'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface ClientContextType {
  identification: string,
  setIdentification: (id: string) => void,
  hide: boolean,
  setHide: (show: boolean) => void,
  idTheater: string,
  setIdTheater: (id: string) => void,
  schedule: string,
  setSchedule: (schedule: string) => void,
}
const initialClientState: ClientContextType = {
  identification: '',
  setIdentification: (id: string) => {},
  hide: true,
  setHide: (show: boolean) => {},
  idTheater: '',
  setIdTheater: (id: string) => {},
  schedule: '',
  setSchedule: (schedule: string) => {},
}

export const ClientContext = createContext<ClientContextType>(initialClientState)

export const useClient = (): ClientContextType => {
  const context = useContext(ClientContext)
  if (!context) {
    throw new Error('useClient debe utilizarse dentro de un proveedor ClientContext')
  }
  return context
}

interface ClientProviderProps {
  children: React.ReactNode
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const [identification, setIdentification] = useState('')
  const [hide, setHide] = useState(true)
  const [idTheater, setIdTheater] = useState('')
  const [schedule, setSchedule] = useState('')

  const clientContextValue: ClientContextType = {
    identification,
    setIdentification,
    hide,
    setHide,
    idTheater,
    setIdTheater,
    schedule,
    setSchedule
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const clientValue = window.localStorage.getItem(KEY_CLIENT)
      if (clientValue !== null) {
        const objectClient = JSON.parse(clientValue)
        setIdentification(objectClient.clientIdentification)
        setIdTheater(objectClient.clientIdTheater)
        setSchedule(objectClient.clientSchedule)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const clientValue = window.localStorage.getItem(KEY_CLIENT)
      window.localStorage.setItem(
        KEY_CLIENT,
        JSON.stringify({
          clientIdentification: identification,
          clientIdTheater: idTheater,
          clientSchedule: schedule,
        })
      )
    }
  }, [identification, idTheater, schedule])

  return (
    <ClientContext.Provider value={clientContextValue}>{children}</ClientContext.Provider>
  )
}
