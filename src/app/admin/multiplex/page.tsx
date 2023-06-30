"use client"

import { useState } from "react"
import AdminLayout from "../AdminLayout"
import { valuesNavBar } from "@/app/types/data/ValuesInput"
import Employee from "./employee/page"
import Schedule from "./schedule/page"

export default function Multiplex() {
  const [currentPane, setCurrentPane] = useState<valuesNavBar>('MulSchedule')
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
      navBar={{ type: currentPane, changeCurrentPane: changeCurrentPane }}
    >
      {
        'MulEmployee' === currentPane ?
          <Employee searchTerm={searchTerm}/>
          : <></>
      }
      {
        'MulSchedule' === currentPane ?
          <Schedule searchTerm={searchTerm}/>
          : <></>
      }
    </AdminLayout>
  )
}