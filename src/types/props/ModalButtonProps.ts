import { ReactNode } from "react"
import { SetStateAction } from "react"

export default interface modalButtonProps {
  message: string,
  showModal: boolean,
  setShowModal: (value: SetStateAction<boolean>) => void,
  children: ReactNode,
}