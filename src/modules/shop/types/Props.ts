import { Dispatch, SetStateAction } from "react"
import { Multiplex, Snack } from "./Interfaces"

export interface clientButtonProps {
  func: () => void
}

export interface cartHeaderProps {
  showCartModal: Dispatch<SetStateAction<boolean>>,
}

export interface cartNavBarProps {
  setTypeMenu: Dispatch<SetStateAction<'movie'|'snack'>>
}

export interface cartSummaryProps {
  typeMenu: string,
  setShowCartModal: Dispatch<SetStateAction<boolean>>,
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

export interface movieLayoutProps {
  children: React.ReactNode
}

export interface starProps {
  func: () => void
}

export interface multiplexListProps {
  selectedMultiplex: number,
  multiplexes: Multiplex[],
  setSelectedMultiplex: (id: number) => void
}

export interface schedulesListProps {
  selectedMultiplex: number,
  multiplexes: Multiplex[]
}


export interface cardProps {
  url: string,
  snack: Snack
}

export interface cardListProps {
  typeProduct: string,
  filteredData: Snack[] | movieProps[] | cardProps[]
}