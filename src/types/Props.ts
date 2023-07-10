import { ReactNode } from "react"
import { SetStateAction } from "react"
import { valuesInput, valuesNavBar } from "./Types"
import { z } from 'zod'
import { typeModel } from "./Types"
import { ChangeEventHandler } from "react"
import { Employee, Movie } from "./Interfaces"
import { Multiplex } from "../modules/director/types/Interfaces"
import { Schedule, MultiplexPoints } from "../modules/multiplex/types/Interfaces"

/**
 * Each interface describes the attributes needed by each component 
 */

export interface searchProps {
  title: valuesNavBar,
  searchTerm: string,
  handleSearchChange: ChangeEventHandler<HTMLInputElement>,
  children: ReactNode | JSX.Element,
}

export interface navBarProps {
  type: valuesNavBar,
  changeCurrentPane: (product: valuesNavBar) => void,
}

export interface adminLayoutProps {
  children: ReactNode,
  search: searchProps,
  navBar: navBarProps
}

export interface backgroundProps {
  children: ReactNode,
  hideContent: boolean,
}

export interface buttonProps {
  content: string,
  leftRounded: boolean,
  rightRounded: boolean,
}

export interface clientButtonProps {
  identification: string
}

export interface formProps {
  required: {
    execute: Function,
    model: typeModel,
    schema: z.ZodObject<z.ZodRawShape>,
  }
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
  messages: {
    send: string,
    control: string,
    error: boolean,
    changeError: Function,
    changeMessage: Function
  }
}

export interface modalButtonProps {
  message: string,
  showModal: boolean,
  setShowModal: (value: SetStateAction<boolean>) => void,
  children: ReactNode,
}

export interface employeeProps {
  searchTerm: string
}

export interface formAddElementProps extends formProps {
  typeElement: string
}

export interface tableProps {
  headers: string[],
  filteredData: Employee[] | Schedule[] | Movie[] | Multiplex[] | MultiplexPoints[]
}

export interface tableLayoutProps {
  type: string,
  children: React.ReactNode,
  setAction: (action:string) => void
}