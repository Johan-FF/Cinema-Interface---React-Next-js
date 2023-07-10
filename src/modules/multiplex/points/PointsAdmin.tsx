"use client"

import { useState, useEffect } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { MultiplexPoints } from "../types/Interfaces"
import { multiplexPointsSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"
import { getMultiplexPointsProxy, updateMultiplexPointsProxy } from "@/app/services/MultiplexService"
import { multiPointsHeader } from "../types/TableHeaders"
import Account from "@/app/services/Account"

export default function MultiplexPointsAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View
  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [multiPoints, setMultiPoints] = useState<MultiplexPoints>({
    type: 'Puntos',
    pointsSnack: '0',
    pointsTicket: '0'
  })

  const account: Account = Account.getInstance()
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
    type: 'Puntos',
    pointsSnack:'',
    pointsTicket: ''
  }
  const sendPoints = async (points: MultiplexPoints) => {
    await updateMultiplexPointsProxy(account.getIDMultiplex(),points)
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
          filteredData={[multiPoints]}
        />
      }
    </TableLayout>
  )
}