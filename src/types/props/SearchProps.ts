import { ChangeEventHandler } from "react"
import { valuesNavBar } from "../data/ValuesInput"
import { ReactNode } from "react"

export default interface searchProps {
  title: valuesNavBar,
  searchTerm: string,
  handleSearchChange: ChangeEventHandler<HTMLInputElement>,
  children: ReactNode | JSX.Element,
}