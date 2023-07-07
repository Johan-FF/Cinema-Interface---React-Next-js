'use client'

import { useState } from 'react'
import ModalButton from "@/app/components/ModalButton"
import Form from '@/app/components/Form'
import { NewUser } from '@/app/types/Interfaces'
import { typeUser } from "@/app/types/Types"
import { newUserSchema } from "@/app/helpers/ValidateInputs"
import { inputs } from "@/app/types/data/InputsData"
import { clientButtonProps } from '../types/Props'

export default function ClientButton({ func, client }: clientButtonProps & { client: string }) {
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

  const handleCloseModal = () => {
    setShowMovieModal(false);
  }

  const confirmExistence = () => {
    setShowMovieModal(false);
    func()
  }
  const clientExist = () => {

    if (client.length >= 8) {
      console.log("Client " + client);
      const exist = false;

      if (showMovieModal && !exist) {
        return "NoExists";
      }

      if (showMovieModal && exist) {
        return "Exists";
      }
    }

    return "NoInfo";
  }

  const exists = clientExist();


  return (
    <ModalButton message='Iniciar operación' showModal={showMovieModal} setShowModal={setShowMovieModal} >
      {exists === "NoExists" ?
        <article className='h-[90%] w-[90%] md:w-[60%] p-[5%] overflow-y-auto scrollbar-small bg-secondary shadow-big'>
          <div className='w-[100%] flex justify-between'>
            <h2>Nuevo cliente</h2>
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
              have: true,
              first: "password",
              second: "conPassword",
              error: "La contraseña no coincide"
            }} />
        </article>
        : <></>}
      {exists === "Exists" ?
        <article className='h-[30%] w-[20%] md:w-[20%] p-[5%]  scrollbar-small bg-secondary shadow-big'>
          <div className='w-[100%] flex justify-between'>
            <h2>El cliente existe</h2>
            <button onClick={confirmExistence} className='relative h-[5vh] w-[5wh] bg-cyan-950 rounded-full hover:bg-cyan-900'>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </button>

          </div>

        </article>
        : <></>}
      {exists === "NoInfo" ?
        <article className='h-[30%] w-[20%] md:w-[20%] p-[5%]  scrollbar-small bg-secondary shadow-big'>
          <div className='w-[100%] flex justify-between'>
            <h2>No hay suficiente información para comprobar</h2>
            <button onClick={handleCloseModal} className='relative h-[5vh] w-[5wh] bg-cyan-950 rounded-full hover:bg-cyan-900'>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </button>

          </div>

        </article>
        : <></>}



    </ModalButton>
  )
}