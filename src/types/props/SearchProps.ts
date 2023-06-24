import { ChangeEventHandler } from "react"

export default interface props {
  title: string,
  searchTerm: string,
  handleSearchChange: ChangeEventHandler<HTMLInputElement>
}