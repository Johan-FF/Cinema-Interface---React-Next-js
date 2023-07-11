"use client"

import { useState, useEffect } from "react"
import Table from "@/app/components/Table"
import FormAddElement from "@/app/components/FormAddElement"
import { Multiplex } from "../types/Interfaces"
import { multiplexSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { employeeProps } from "@/app/types/Props"
import TableLayout from "../../../components/TableLayout"
import { createMultiplexProxy, getAllMultiplexProxy } from "@/app/services/MultiplexService"
import { multiplexHeaders } from "../../multiplex/types/TableHeaders"

export default function MultiplexAdmin({ searchTerm }: employeeProps ) {
  const [action, setAction] = useState("Add") // Add | View
  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)
  const [multiplexRes, setMultiplexRes] = useState<Multiplex[]>([])
  const filteredData = multiplexRes.filter((item) => {
    return (
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.numSala.toLowerCase().includes(searchTerm.toLowerCase())
      )
  })

  useEffect(() => {
    async function fetchData() {
      getAllMultiplexProxy()
        .then(response => {
          setMultiplexRes(response)
      })
    }
    fetchData()
  },[action])

  const multiplex: Multiplex = {
    type: 'multiplex',
    id:'',
    name:'',
    numSala:'',
    pointSnack:'',
    pointTicket: ''
  }

  const sendMultiplex = async (multiplex: Multiplex) => {
    await createMultiplexProxy(multiplex)
      .then(response => {
        setHasError(
          response.toLowerCase().includes('inválido') ||
          response.toLowerCase().includes('inválida')
        )
        setControlMessage(response)
      })
  }

  return (
    <TableLayout type="Multiplex" setAction={setAction}>
      {
        action=== "Add" ? 
        <FormAddElement
          typeElement="Multiplex"
          required={{
            execute: sendMultiplex,
            model: multiplex,
            schema: multiplexSchema,
          }}
          inputs={inputs.multiplex}
          aditionalCondition={{
            have:false,
            first:"",
            second:"",
            error: ""
          }}
          messages={{
            send:"Agregar",
            control: controlMessage,
            error: hasError,
            changeError: setHasError,
            changeMessage: setControlMessage
          }}
        /> :
        <Table 
          headers={multiplexHeaders}
          filteredData={filteredData}
        />
      }
    </TableLayout>
  )
}