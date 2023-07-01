'use client'

import React from 'react'
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from '@hookform/resolvers/zod'
import RedButton from "./RedButton"
import { Dato } from '../types/Interfaces'
import { formProps } from '../types/Props'
import { typeModel } from "../types/Types"

export default function Form(
  { execute, model, schema, inputs, aditionalCondition, sendMessage }: formProps 
) {
  const [errorMessage, setErrorMessage] = useState(aditionalCondition.error)
  const [viewControlMessage, setViewControlMessage] = useState(false)
  const { 
    register,
    handleSubmit,
    getValues,
    formState: {errors, isSubmitting}
  } = useForm<typeof model>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<typeModel> = (data) => {
    if( !validateAditionalCondition() ){
      execute(data)
    }
  } 
  function validateAditionalCondition(): boolean {
    if( !aditionalCondition.have )
      return false
    const values = getValues()
    const haveError: boolean = 
      values[aditionalCondition.first as keyof (typeof model)] != 
      values[aditionalCondition.second as keyof (typeof model)] 
    setViewControlMessage(haveError)
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
      {
        viewControlMessage ? <label className='label-error'>{errorMessage}</label> : ''
      }
      <RedButton content={`${sendMessage}`} leftRounded={true} rightRounded={true} />
    </form>
  )
}