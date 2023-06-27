"use client"

import { useState } from "react"
import Table from "./Table"
import AdminLayout from "../../AdminLayout"
import { valuesNavBar } from "@/app/types/data/ValuesInput"
import AddEmployer from "./addEmployer"
import BlueButton from "@/app/components/BlueButton"
import RedButton from "@/app/components/RedButton"

export default function EmployeeManagement() {
  const [action, setAction] = useState("Add") // Add | View
  const [currentPane, setCurrentPane] = useState<valuesNavBar>('Employee')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const changeTypeProduct = (type: valuesNavBar) => {
    setCurrentPane(type)
  }

  return (
    <AdminLayout
      search={{ children:<></>, title: currentPane, searchTerm: searchTerm, handleSearchChange: handleSearchChange }}
      navBar={{ type: currentPane, changeCurrentPane: changeTypeProduct }}
    >
      {
        'Employee' === currentPane ?
          <div className="h-[90%] w-[100%] p-5 flex flex-col justify-center items-center">
            <span className="h-[90%] w-[90%] overflow-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity rounded-lg flex items-start md:shadow-2xl md:shadow-black">
              {
                action=== "Add" ? 
                <AddEmployer/> :
                <Table searchTerm={searchTerm} />
              }
            </span>
            <span className="bg-transparent h-[10%] w-[90%] flex justify-center items-center">
              <span onClick={()=>{setAction("Add")}}>
                <BlueButton content="Añadir" leftRounded={true} rightRounded={false} />
              </span>
              <span onClick={()=>{setAction("View")}}>
                <RedButton content="Ver" leftRounded={false} rightRounded={true}/>
              </span>
            </span>
          </div>
          : <></>
      }
    </AdminLayout>
  )
}