import props from '../types/ButtonProps'
import '../styles/Button.css'

export default function BlueButton({ contenido,izqRedondo,derRedondo }: props) {
  let borderRadius: string = ''
  if(izqRedondo && derRedondo) borderRadius = 'rounded-2xl'
  else if(izqRedondo) borderRadius = 'rounded-l-2xl'
  else if(derRedondo)borderRadius = 'rounded-r-2xl'

  return (
    <button className={`button-blue ${borderRadius}`}>
      {contenido}
    </button>
  )
}