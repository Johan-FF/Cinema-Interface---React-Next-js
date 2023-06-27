import { ReactNode } from "react"
import searchProps from "./SearchProps"
import navBarProps from "./NavBarProps"

export default interface adminLayoutProps {
  children: ReactNode,
  search: searchProps,
  navBar: navBarProps
}