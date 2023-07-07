"use client"

import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import { valuesNavBar } from "@/app/types/Types"
import Employee from "../../../modules/admin/employee/EmployeeAdmin"
import Schedule from "../../../modules/admin/schedule/ScheduleAdmin"
import MultiplexPointsAdmin from "../../../modules/admin/points/PointsAdmin"

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
      navBar={{ func:()=>{}, type: currentPane, changeCurrentPane: changeCurrentPane }}
    >
      {
        'MulSchedule' === currentPane ?
          <Schedule searchTerm={searchTerm}/>
          : <></>
      }

      {
        'MulPoints' === currentPane ?
          <MultiplexPointsAdmin searchTerm={searchTerm}/>
          : <></>
      }
    </AdminLayout>
  )
}