import React from "react"
import Form from "@/app/components/Form"
import formAddElementProps from "@/app/types/props/FormAddElementProps"

export default function FormAddElement({ 
  typeElement,execute,model,schema,inputs,aditionalCondition,sendMessage
}: formAddElementProps ) {

  return (
    <article className="bg-secondary min-h-[100%] md:h-[100%] w-[100%] flex justify-center items-center">
      <div className="min-h-[100%] xl:h-[90%] w-[100%] md:w-[80%] flex flex-col rounded-md md:shadow-2xl md:shadow-secondary-opacity py-[5%]">
          <section className="w-[100%] h-[10%]  flex justify-center items-center">
            <h2 className="text-[25px] w-[70%] text-center">
              Nuevo {typeElement}
            </h2>
          </section>
          <section className="w-[100%] max-h-[100%] pr-[5%] flex flex-col justify-center items-center">
          <Form
              execute={execute}
              model={model}
              schema={schema}
              inputs={inputs}
              sendMessage={sendMessage}
              aditionalCondition={aditionalCondition}/>
          </section>
      </div>
    </article>
  )
}
