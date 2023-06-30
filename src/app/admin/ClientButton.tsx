import React from 'react'
import { useState } from 'react'
import ModalButton from "@/app/components/ModalButton"
import Form from '@/app/components/Form'
import { NewUser } from "@/app/types/interfaces/User"
import { typeUser } from "@/app/types/interfaces/Types"
import { newUserSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"

interface props {
  func: () => void
}

export default function ClientButton( {func}: props ) {
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
      <div className='fixed flex flex-col justify-center items-center inset-0 z-50 h-[100vh] w-[100wh] bg-black bg-opacity-75'>
        <article className='h-[90%] w-[60%] p-[5%] bg-secondary rounded-lg shadow-2xl shadow-black '>
          <div className='w-[100%] flex justify-between'>
            <h2>Ingresar Nuevo Cliente</h2>
            <button onClick={() => setShowMovieModal(!showMovieModal)} className='relative h-[5vh] w-[5wh] bg-tertiary-opacity rounded-full hover:bg-tertiary'>
              <span className='absolute top-0 left-0 h-[2vh] w-[2vh] rotate-45 bg-primary'></span>
              <span className='absolute top-0 left-0 h-[2vh] w-[2vh] -rotate-45 bg-primary'></span>
            </button>
          </div>
          <Form
            execute={func}
            model={newUser}
            schema={newUserSchema}
            inputs={inputs.record}
            sendMessage={"Agregar"}
            aditionalCondition={{
              have:false,
              first:"",
              second:"",
              error: "" 
          }}/>
        </article>
      </div>
    </ModalButton>
  )
}