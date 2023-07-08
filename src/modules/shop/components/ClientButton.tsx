'use client'

import { useState } from 'react'
import ModalButton from "@/app/components/ModalButton"
import Form from '@/app/components/Form'
import { NewUser } from '../../director/types/Interfaces'
import { typeUser } from "@/app/types/Types"
import { newEmployeeSchema } from '@/app/helpers/ValidateInputs'
import { inputs } from "@/app/types/data/InputsData"
import { createClientProxy } from '../services/ClientService'
import { Client } from '../types/Interfaces'

export default function ClientButton() {
  const [showMovieModal, setShowMovieModal] = useState(false)
  const [controlMessage, setControlMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  const newUser: NewUser = {
    type: 'newUser',
    name: '',
    position: '',
    phoneNumber: '',
    identification: '',
    password: '',
    conPassword: '',
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
  }

  return (
    <ModalButton message='Iniciar operación' showModal={showMovieModal} setShowModal={setShowMovieModal} >
      <article className='h-[90%] w-[90%] md:w-[60%] p-[5%] overflow-y-auto scrollbar-small bg-secondary shadow-big'>
        <div className='w-[100%] flex justify-between'>
          <h2>Nuevo cliente</h2>
          <button onClick={() => setShowMovieModal(!showMovieModal)} className='relative h-[5vh] w-[5wh] bg-tertiary-opacity rounded-full hover:bg-tertiary'>
            <span className='absolute top-0 left-0 h-[2vh] w-[2vh] rotate-45 bg-primary'></span>
            <span className='absolute top-0 left-0 h-[2vh] w-[2vh] -rotate-45 bg-primary'></span>
          </button>
        </div>
        <Form
          required={{
            execute: sendClient,
            model: newUser,
            schema: newEmployeeSchema,
          }}
          inputs={inputs.record}
          aditionalCondition={{
            have: true,
            first: "password",
            second: "conPassword",
            error: "La contraseña no coincide"
          }}
          messages={{
            send: 'Agregar',
            error: hasError,
            control: controlMessage,
            changeError: setHasError,
            changeMessage: setControlMessage,
          }}
        />
      </article>
    </ModalButton>
  )
}