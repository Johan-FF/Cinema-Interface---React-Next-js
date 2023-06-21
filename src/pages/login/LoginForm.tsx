import '../../styles/Input.css'
import '../../styles/Label.css'
import props from '@/app/types/FormProps'

export default function LoginForm({ inputs }: props) {
  return (
    <div className="w-[100%] h-[100%] p-10 flex flex-col">
      {
        inputs.map((value, index) => {
          return (
            <>
              <label key={index} htmlFor={value.id} className="label">{value.contenido}:</label>
              <input key={index} type="text" id={value.id} placeholder={value.placeHolder} className="text-input" />
            </>
          )
        })
      }
    </div>
  )
}