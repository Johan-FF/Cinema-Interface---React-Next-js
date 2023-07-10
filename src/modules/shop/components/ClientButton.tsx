'use client'

import { useEffect, useState } from 'react'
import ModalButton from "@/app/components/ModalButton"
import Form from '@/app/components/Form'
import { newClientSchema } from '@/app/helpers/ValidateInputs'
import { inputs } from "@/app/types/data/InputsData"
import { createClientProxy, verifyClientProxy } from '../services/ClientService'
import { Client } from '../types/Interfaces'
import { useClient } from '../hooks/useClient'
import { KEY_CLIENT } from '@/app/environment'

export default function ClientButton() {
  const { identification, setHide } = useClient()
  const [noExistsIdentification, setNoExistsIdentification] = useState(true)
  const [showMovieModal, setShowMovieModal] = useState(false)
  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!showMovieModal)
      return
    verifyClientProxy(identification)
      .then(response => {
        const haveError: boolean = (response==='0'? true : false)
        if(!haveError && typeof window !== 'undefined'){
          window.localStorage.setItem(KEY_CLIENT, identification)
        }
        setNoExistsIdentification(haveError)
        setHasError(haveError)
        setControlMessage(response)
        setHide(haveError)
      })
  }, [showMovieModal])

  const newClient: Client = {
    type: 'Cliente',
    identification: '',
    name: '',
    dateBirth: '',
    phoneNumber: '',
    email: '',
    ratingCinema: '',
    salaryPoints: '',
  }

  const sendClient = async (newClient: Client) => {
    await createClientProxy(newClient)
      .then(response => {
        setHasError(
          response.toLowerCase().includes('inválido') ||
          response.toLowerCase().includes('inválida')
        )
        setControlMessage(response)
      })
    setShowMovieModal(!showMovieModal)
    setNoExistsIdentification(!noExistsIdentification)
  }

  return (
    <ModalButton message='Iniciar' showModal={showMovieModal} setShowModal={setShowMovieModal} >
      <article className={`${noExistsIdentification ? 'h-[90%]':'h-[25%]'} w-[90%] md:w-[60%] p-[5%] overflow-y-auto scrollbar-small bg-secondary shadow-big`}>
        <div className='w-[100%] flex justify-between'>
          <h2 className='text-3xl md:text-3xl' >{noExistsIdentification ? 'Nuevo Cliente' : 'Cliente Verificado'}</h2>
          <button onClick={() => setShowMovieModal(!showMovieModal)} className='relative h-[5vh] w-[5wh] bg-tertiary-opacity rounded-full hover:bg-tertiary'>
            <span className='absolute top-0 left-0 h-[2vh] w-[2vh] rotate-45 bg-primary'></span>
          </button>
        </div>
        {
          noExistsIdentification ?
            <Form
              required={{
                execute: sendClient,
                model: newClient,
                schema: newClientSchema,
              }}
              inputs={inputs.client}
              aditionalCondition={{
                have: false,
                first: "",
                second: "",
                error: ""
              }}
              messages={{
                send: 'Agregar',
                error: hasError,
                control: controlMessage,
                changeError: setHasError,
                changeMessage: setControlMessage,
              }}
            /> : <></>
        }
      </article>
    </ModalButton>
  )
}