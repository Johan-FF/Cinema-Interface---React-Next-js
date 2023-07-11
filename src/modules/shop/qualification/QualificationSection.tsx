'use client'

import { ChangeEvent, useState } from "react"
import { useQualification } from "../hooks/useQualification"
import StarMeter from "./StarMeter"
import RedButton from "@/app/components/RedButton"
import { useClient } from "../hooks/useClient"
import { modifyUserQualificationProxy } from "../services/ClientService"

export default function QualificationSection() {
  const { setInvoiceCode, invoiceCode, serviceQualification, movieQualification } = useQualification() 
  const { identification } = useClient()
  const [controlMessage, setControlMessage] = useState('')

  const changeInvoice = (event: ChangeEvent<HTMLInputElement>) => {
    setInvoiceCode(event.target.value)
  }

  const sendQualification = () => {
    modifyUserQualificationProxy(identification, {
      Id_invoice: invoiceCode,
      qualification_service: serviceQualification,
      qualification_movie: movieQualification
    })
      .then(response => {
        setControlMessage(response)
      })
  }

  return (
    <div className="h-[90%] w-[100%] xl:py-[5%] flex-center">
      <section className="bg-secondary w-[90%] h-[90%] md:w-[100%] md:h-[100%] p-[5%] shadow-big flex-col-center">
        <span className="shadow-2xl shadow-secondary-opacity w-[90%] pb-[5%] xl:pb-0">
          <h2 className="text-4xl mb-5 text-center w-[100%]">Calificación</h2>
          <div className=" gap-1 w-[100%] md:p-[5%]">
            <span className="w-[90%] flex-col-center">
              <h3 className="text-center text-opacity-[80%] text-2xl mb-5">Película</h3>
              <StarMeter type="service"/>
            </span>
            <span className="w-[90%] flex-col-center">
              <h3 className="text-center text-opacity-[80%] text-2xl mb-5">Servicio</h3>
              <StarMeter type="movie"/>
            </span>
          </div>
          <div className="w-full md:p-[5%] flex-col-center">
            <label>Nro Factura:</label>
            <input className="text-input" placeholder="************" type="number" onChange={() => changeInvoice} />
            <span onClick={() => sendQualification}>
              <RedButton content="Enviar" leftRounded={true} rightRounded={true} />
            </span>
          </div>
          <div className="w-full md:p-[5%] flex-col-center text-[35px]">
            {controlMessage}
          </div>
        </span>
      </section>
    </div>
  )
}