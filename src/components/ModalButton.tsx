'use client'

import modalButtonProps from '../types/props/ModalButtonProps'

export default function ModalButton({ showModal, setShowModal, children }: modalButtonProps) {

  return (
    <>
      <button className="button-blue rounded-2xl mr-2 md:mr-5" onClick={() => setShowModal(true)} >
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
        </svg>
      </button>

      {showModal ? 
        children
      : <></>}
    </>
  )
}