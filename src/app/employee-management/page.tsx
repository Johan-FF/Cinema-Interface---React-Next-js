"use client"

import { useState } from "react"
import CardList from "../shopping/CardList"
import Table from "./Table"
import Search from "@/app/components/Search"
import NavBar from "@/app/components/NavBar"
import { products } from "@/app/types/data/ProductData"


export default function EmployeeManagement() {
  const [currentPane, setCurrentPane] = useState('employee')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const snacksData = products.snacks.filter((item) => {
    return (
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productPrice.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  const moviesData = products.movies.filter((item) => {
    return (
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productPrice.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <main className="h-[100vh] w-[100%] flex relative">
      <NavBar changeCurrentPane={setCurrentPane} />
        {
          'employee-management' === currentPane ? 
          <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary">
            <div className="w-[100%] h-[20%]">
              <Search title="Empleados" searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            </div>
            <div className="flex justify-center items-center h-[80%] w-[100%]">
              <span className="h-[90%] w-[90%] overflow-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity rounded-lg shadow-2xl shadow-black">
                <Table searchTerm={searchTerm}/>
              </span>
            </div>
          </section> : ''
        }
        {
          currentPane === 'movies' ?
            <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary ">
              <Search title='Películas' searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
              <CardList typeProduct='movie' filteredData={moviesData}/>
            </section> : ''
        }
        {
          currentPane === 'snacks' ?
            <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary ">
              <Search title='Comidas' searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
              <CardList typeProduct='snack' filteredData={snacksData}/>
            </section> : ''
        }
    </main>
  )
}