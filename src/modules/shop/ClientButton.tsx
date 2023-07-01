'use client'

import { useState } from 'react'
import ModalButton from "@/app/components/ModalButton"
import Form from '@/app/components/Form'
import { NewUser } from '@/app/types/Interfaces'
import { typeUser } from "@/app/types/Types"
import { newUserSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { clientButtonProps } from '@/app/types/Props'

export default function ClientButton( {func}: clientButtonProps ) {
  const [showMovieModal, setShowMovieModal] = useState(false)

  const newUser: NewUser = {
    type: 'newUser',
    name: '',
    position: '',
    phoneNumber: '',
    identification: '',
    password: '',
    conPassword: '',
  }
  const showUser = (user: typeUser) => {
    console.log(user)
    func()
  }

  return (
    <ModalButton message='Nuevo cliente' showModal={showMovieModal} setShowModal={setShowMovieModal} >
      <div className='fixed flex-col-center inset-0 z-50 h-[100vh] w-[100wh] bg-black bg-opacity-75 '>
        <article className='h-[90%] w-[90%] md:w-[60%] p-[5%] overflow-y-auto scrollbar-small bg-secondary shadow-small'>
          <div className='w-[100%] flex justify-between'>
            <h2>Ingresar Nuevo Cliente</h2>
            <button onClick={() => setShowMovieModal(!showMovieModal)} className='relative h-[5vh] w-[5wh] bg-tertiary-opacity rounded-full hover:bg-tertiary'>
              <span className='absolute top-0 left-0 h-[2vh] w-[2vh] rotate-45 bg-primary'></span>
              <span className='absolute top-0 left-0 h-[2vh] w-[2vh] -rotate-45 bg-primary'></span>
            </button>
          </div>
          <Form
            execute={showUser}
            model={newUser}
            schema={newUserSchema}
            inputs={inputs.record}
            sendMessage={"Agregar"}
            aditionalCondition={{
              have:true,
              first:"password",
              second:"conPassword",
              error: "La contraseña no coincide" 
          }}/>
        </article>
      </div>
    </ModalButton>
  )
}