'use client'

import { buttonProps } from "../types/Props"

export default function RedButton(
  { content,leftRounded,rightRounded }: buttonProps
) {
  let borderRadius: string = ''
  if(leftRounded && rightRounded) borderRadius = 'rounded-2xl'
  else if(leftRounded) borderRadius = 'rounded-l-2xl'
  else if(rightRounded)borderRadius = 'rounded-r-2xl'

  return (
    <button className={`button-red ${borderRadius}`}>
      {content}
    </button>
  )
}