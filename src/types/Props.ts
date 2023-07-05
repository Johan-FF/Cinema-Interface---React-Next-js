import { ReactNode } from "react"
import { SetStateAction } from "react"
import { valuesInput, valuesNavBar } from "./Types"
import { z } from 'zod'
import { typeModel } from "./Types"
import { ChangeEventHandler } from "react"

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

export interface modalButtonProps {
  message: string,
  showModal: boolean,
  setShowModal: (value: SetStateAction<boolean>) => void,
  children: ReactNode,
}
