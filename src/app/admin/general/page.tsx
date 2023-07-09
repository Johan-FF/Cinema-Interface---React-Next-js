"use client"

import { useState } from "react"
import AdminLayout from "../../../components/AdminLayout"
import { valuesNavBar } from "@/app/types/Types"
import EmployeeAdmin from "@/app/modules/director/employee/EmployeeAdmin"
import Movie from "../../../modules/director/movie/MovieAdmin"
import MultiplexAdmin from "@/app/modules/director/multiplex/MultiplexAdmin"
import Dashboard from "@/app/modules/director/dashboard/page"
import { withAuth } from "@/app/middlewares/withAuth"
import { NextPage } from "next"

const AdminGeneral: NextPage = () => {
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
      search={{ children: <></>, title: currentPane, searchTerm: searchTerm, handleSearchChange: handleSearchChange }}
      navBar={{ type: currentPane, changeCurrentPane: changeCurrentPane }}
    >
      {
        'GenEmployee' === currentPane ?
          <EmployeeAdmin searchTerm={searchTerm} />
          : <></>
      }
      {
        'GenMovie' === currentPane ?
          <Movie searchTerm={searchTerm} />
          : <></>
      }
      {
        'GenMultiplex' === currentPane ?
          <MultiplexAdmin searchTerm={searchTerm} />
          : <></>
      }
      {
        'Dashboard' === currentPane ?
          <Dashboard />
          : <></>
      }
    </AdminLayout>
  )
}

export default withAuth(AdminGeneral)