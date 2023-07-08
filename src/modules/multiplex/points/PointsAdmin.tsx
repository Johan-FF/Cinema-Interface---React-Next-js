"use client"

import { useState, useEffect } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { MultiplexPoints } from "../types/Interfaces"
import { typeMultiplex } from "@/app/types/Types"
import { multiplexPointsSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { tables } from "@/app/types/data/TableData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"
import { getMultiplexPointsProxy, updateMultiplexPointsProxy } from "@/app/services/MultiplexService"
import { createMultiplexPointsAdapter } from "../adapters/MultiPointsAdapter"
import { multiPointsHeader } from "../types/TableHeaders"
import Account from "@/app/services/Account"

export default function MultiplexPointsAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View
  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [multiPoints, setMultiPoints] = useState<MultiplexPoints[]>([])

  const account: Account = Account.getInstance()
  
  const filteredData = multiPoints.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pointsSnack.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pointsTicket.toLowerCase().includes(searchTerm.toLowerCase())
      )
  })

  useEffect(() => {
    async function fetchData() {
   
      getMultiplexPointsProxy(account.getIDMultiplex())
        .then(response => {
          setMultiPoints(response)
      })
    }
    fetchData()
  },[action])

  const points: MultiplexPoints = {
    type: 'multiplexPoints',
    pointsSnack:'',
    pointsTicket: ''
  }
  const sendPoints = (points: MultiplexPoints) => {
    updateMultiplexPointsProxy(account.getIDMultiplex(),points)
    .then(response => {
      setHasError(
        response.toLowerCase().includes('inválido') ||
        response.toLowerCase().includes('inválida')
      )
      setControlMessage(response)
    })
  }

  return (
    <TableLayout type="MultiplexPoints" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Puntos del multiplex"
          required={{
            execute: sendPoints,
            model: points,
            schema: multiplexPointsSchema,
          }}
         
          inputs={inputs.multiplexPoints}
          aditionalCondition={{
            have:false,
            first:"",
            second:"",
            error: ""
          }}
          messages={{
            send:"Enviar",
            control: controlMessage,
            error: hasError,
            changeError: setHasError,
            changeMessage: setControlMessage
          }}
        /> :
        <Table 
          headers={multiPointsHeader}
          filteredData={filteredData}
        />
      }
    </TableLayout>
  )
}