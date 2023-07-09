import { Dispatch, SetStateAction } from "react"
import { Snack } from "./Interfaces"
import { Multiplex } from "../../director/types/Interfaces"
import { Movie } from "@/app/types/Interfaces"
import { Theater } from "../../multiplex/types/Interfaces"

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
  qualification: number,
  type: string
}

export interface starMeterProps {
  type: string
}

export interface theaterListProps {
  selectedTheater: string,
  theaters: Theater[],
  setSelectedTheater: (id: string) => void
}

export interface schedulesListProps {
  selectedTheater: string,
  theaters: Theater[]
}

export interface cardProps {
  snack: Snack
}

export interface cardListProps {
  typeProduct: string,
  filteredData: Snack[] | Movie[]
}