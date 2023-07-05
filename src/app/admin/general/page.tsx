"use client"

import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import { valuesNavBar } from "@/app/types/Types"
import Employee from "@/app/modules/admin/employee/EmployeeAdmin"
import Movie from "../../../modules/admin/movie/MovieAdmin"

export default function Multiplex() {
  const [currentPane, setCurrentPane] = useState<valuesNavBar>('GenEmployee')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const changeCurrentPane = (type: valuesNavBar) => {
    setCurrentPane(type)
  }

  return (
    <AdminLayout
      search={{ children:<></>, title: currentPane, searchTerm: searchTerm, handleSearchChange: handleSearchChange }}
      navBar={{ func:()=>{}, type: currentPane, changeCurrentPane: changeCurrentPane }}
    >
      {
        'GenEmployee' === currentPane ?
          <Employee searchTerm={searchTerm}/>
          : <></>
      }
      {
        'GenMovie' === currentPane ?
          <Movie searchTerm={searchTerm}/>
          : <></>
      }
    </AdminLayout>
  )
}