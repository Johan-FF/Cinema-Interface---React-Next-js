"use client"

import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import { valuesNavBar } from "@/app/types/Types"
import Schedule from "../../../modules/multiplex/schedule/ScheduleAdmin"
import MultiplexPointsAdmin from "../../../modules/multiplex/points/PointsAdmin"
import { NextPage } from "next"
import { withAuth } from "@/app/middlewares/withAuth"

const Multiplex: NextPage = () => {
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

Multiplex.displayName = 'Multiplex'
export default withAuth(Multiplex)