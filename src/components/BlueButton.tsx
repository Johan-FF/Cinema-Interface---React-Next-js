import props from '../types/props/ButtonProps'
import '../styles/Button.css'

export default function BlueButton({ content,leftRounded,rightRounded }: props) {
  let borderRadius: string = ''
  if(leftRounded && rightRounded) borderRadius = 'rounded-2xl'
  else if(leftRounded) borderRadius = 'rounded-l-2xl'
  else if(rightRounded) borderRadius = 'rounded-r-2xl'

  return (
    <button className={`button-blue ${borderRadius}`}>
      {content}
    </button>
  )
}