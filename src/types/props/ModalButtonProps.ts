import { ReactNode } from "react"
import { SetStateAction } from "react"

export default interface modalButtonProps {
  showModal: boolean,
  setShowModal: (value: SetStateAction<boolean>) => void,
  children: ReactNode,
}