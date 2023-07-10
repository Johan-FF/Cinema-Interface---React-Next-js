'use client'

import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import RedButton from "./RedButton"
import { Dato } from '../types/Interfaces'
import { formProps } from '../types/Props'
import { typeModel } from "../types/Types"

export default function Form(
  { required, inputs, aditionalCondition, messages }: formProps 
) {
  const { 
    register,
    handleSubmit,
    getValues,
    formState: {errors, isSubmitting}
  } = useForm<typeof required.model>({
    resolver: zodResolver(required.schema)
  })

  const onSubmit: SubmitHandler<typeModel> = (data) => {
    if( !validateAditionalCondition() ){
      required.execute(data)
    }
  } 
  function validateAditionalCondition(): boolean {
    if( !aditionalCondition.have )
      return false
    const values = getValues()
    const haveError: boolean = 
      values[aditionalCondition.first as keyof (typeof required.model)] != 
      values[aditionalCondition.second as keyof (typeof required.model)] 
    messages.changeError(haveError)
    messages.changeMessage(aditionalCondition.error)
    return haveError
  }

  return (
    <form 
      className="size-all p-10 flex flex-col my-[5%] overflow-y-auto scrollbar-small"
      onSubmit={handleSubmit(onSubmit)}>
      {
        inputs.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <label htmlFor={value.id} className="label-input">{value.content}:</label>
              <input type="text" id={value.id} placeholder={value.placeHolder} className="text-input" {...register(value.id)} />
              {
                errors[value.id as keyof Dato]?.message &&
                <span className='label-error'>
                  {errors[value.id as keyof Dato]?.message}
                </span>
              }
            </React.Fragment>
          )
        })
      }
      <label className={`${messages.error ? 'label-error':'label-correct'}`}>
        {messages.error ? messages.error : ''}
      </label>
      <RedButton content={messages.send} leftRounded={true} rightRounded={true} />
    </form>
  )
}