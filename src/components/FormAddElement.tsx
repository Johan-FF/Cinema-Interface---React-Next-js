'use client'

import Form from "@/app/components/Form"
import { formAddElementProps } from "../types/Props"

export default function FormAddElement({ 
  typeElement,required,inputs,aditionalCondition,messages
}: formAddElementProps ) {

  return (
    <article className="bg-secondary min-h-[100%] md:h-[100%] w-[100%] flex-center">
      <div className="min-h-[100%] xl:h-[90%] w-[100%] md:w-[80%] flex flex-col shadow-big py-[5%]">
          <section className="w-[100%] h-[10%]  flex-center">
            <h2 className="text-[25px] w-[70%] text-center">
              Nuevo {typeElement}
            </h2>
          </section>
          <section className="w-[100%] max-h-[100%] pr-[5%] flex-col-center">
          <Form
              required={required}
              inputs={inputs}
              messages={messages}
              aditionalCondition={aditionalCondition}/>
          </section>
      </div>
    </article>
  )
}
