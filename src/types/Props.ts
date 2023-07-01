import { ReactNode } from "react"
import { SetStateAction } from "react"
import { valuesInput, valuesNavBar } from "./Types"
import { z } from 'zod'
import { typeModel } from "./Types"
import { ChangeEventHandler } from "react"
import { Employee, Schedule, Movie, Multiplex } from "./Interfaces"

/**
 * Each interface describes the attributes needed by each component 
 */

export interface tableProps {
  headers: string[],
  filteredData: Employee[] | Schedule[] | Movie[]
}
export interface searchProps {
  title: valuesNavBar,
  searchTerm: string,
  handleSearchChange: ChangeEventHandler<HTMLInputElement>,
  children: ReactNode | JSX.Element,
}

export interface navBarProps {
  type: valuesNavBar,
  func: () => void,
  changeCurrentPane: (product: valuesNavBar) => void,
}

export interface adminLayoutProps {
  children: ReactNode,
  search: searchProps,
  navBar: navBarProps
}

export interface backgroundProps {
  children: ReactNode,
  viewProducts: boolean
}

export interface buttonProps {
  content: string,
  leftRounded: boolean,
  rightRounded: boolean,
}

export interface movieProps {
  isInHome: boolean, 
  id: string,
  title: string,
  description: string,
  age: string,
  duration: string,
  url:string
}

export interface cardProps {
  url: string,
  imgUrl: string,
  price: string,
  name: string
}

export interface cardListProps {
  typeProduct: string,
  filteredData: {
    url:string,
    price: string,
    name: string
  }[] | movieProps[] | cardProps[];
}

export interface employeeProps {
  searchTerm: string
}

export interface formProps {
  execute: Function,
  model: typeModel,
  schema: z.ZodObject<z.ZodRawShape>,
  inputs: {
    content: string,
    id: valuesInput,
    placeHolder: string,
  }[],
  aditionalCondition: {
    have: boolean,
    first: string,
    second: string,
    error: string
  },
  sendMessage: string,
}

export interface formAddElementProps extends formProps {
  typeElement: string
}

export interface modalButtonProps {
  message: string,
  showModal: boolean,
  setShowModal: (value: SetStateAction<boolean>) => void,
  children: ReactNode,
}

export interface clientButtonProps {
  func: () => void
}

export interface starProps {
  func: () => void
}

export interface movieLayoutProps {
  children: React.ReactNode
}

export interface schedulesListProps {
  selectedMultiplex: number,
  multiplexes: Multiplex[]
}

export interface multiplexListProps {
  selectedMultiplex: number,
  multiplexes: Multiplex[],
  setSelectedMultiplex: (id: number) => void
}

export interface tableLayoutProps {
  type: string,
  children: React.ReactNode,
  setAction: (action:string) => void
}