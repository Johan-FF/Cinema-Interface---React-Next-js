import React, { createContext, useContext, useState } from 'react'

interface ClientContextType {
  identification: string,
  setIdentification: (id: string) => void,
  hideContent: boolean,
  setHideContent: (show: boolean) => void,
}
const initialClientState: ClientContextType = {
  identification: '',
  setIdentification: (id: string) => {},
  hideContent: false,
  setHideContent: (show: boolean) => {},
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
  const [hideContent, setHideContent] = useState(true)

  const clientContextValue: ClientContextType = {
    identification,
    setIdentification,
    hideContent,
    setHideContent
  }

  return (
    <ClientContext.Provider value={clientContextValue}>{children}</ClientContext.Provider>
  )
}
