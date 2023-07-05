import { formProps } from "@/app/types/Props"
import { Employee, Schedule, Movie } from "@/app/modules/admin/types/Interfaces"

export interface formAddElementProps extends formProps {
  typeElement: string
}

export interface tableProps {
  headers: string[],
  filteredData: Employee[] | Schedule[] | Movie[]
}

export interface tableLayoutProps {
  type: string,
  children: React.ReactNode,
  setAction: (action:string) => void
}

export interface employeeProps {
  searchTerm: string
}
