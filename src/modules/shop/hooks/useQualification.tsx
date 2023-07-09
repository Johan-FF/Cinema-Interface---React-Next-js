import React, { createContext, useContext, useState } from 'react'

interface QualificationContextType {
  movieQualification: string,
  setMovieQualification: (qualification: string) => void,
  serviceQualification: string,
  setServiceQualification: (qualification: string) => void,
  invoiceCode: string,
  setInvoiceCode: (invoice: string) => void,
}
const initialQualificationState: QualificationContextType = {
  movieQualification: '',
  setMovieQualification: (qualification: string) => {},
  serviceQualification: '',
  setServiceQualification: (qualification: string) => {},
  invoiceCode: '',
  setInvoiceCode: (invoice: string) => {},
}

export const QualificationContext = createContext<QualificationContextType>(initialQualificationState)

export const useQualification = (): QualificationContextType => {
  const context = useContext(QualificationContext)
  if (!context) {
    throw new Error('useQualification debe utilizarse dentro de un proveedor QualificationContext')
  }
  return context
}

interface QualificationProviderProps {
  children: React.ReactNode
}

export default function QualificationProvider({ children }: QualificationProviderProps) {
  const [movieQualification, setMovieQualification] = useState('')
  const [serviceQualification, setServiceQualification] = useState('')
  const [invoiceCode, setInvoiceCode] = useState('')

  const qualificationContextValue: QualificationContextType = {
    movieQualification,
    setMovieQualification,
    serviceQualification,
    setServiceQualification,
    invoiceCode,
    setInvoiceCode
  }

  return (
    <QualificationContext.Provider value={qualificationContextValue}>{children}</QualificationContext.Provider>
  )
}
