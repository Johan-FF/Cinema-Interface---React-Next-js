'use client'
import { useState, ChangeEvent } from 'react'
import { products } from '@/app/types/data/ProductData'
import { valuesNavBar } from '@/app/types/data/ValuesInput'
import Qualification from './qualification/page'
import CardList from './CardList'
import AdminLayout from '../AdminLayout'

export default function Shopping() {
  const [currentPane, setCurrentPane] = useState<valuesNavBar>("ShopSnacks")
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const changeTypeProduct = (type: valuesNavBar) => {
    setCurrentPane(type)
  }
  const snacksData = products.snacks.filter((item) => {
    return (
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productPrice.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  const moviesData = products.movies.filter((item) => {
    return (
      item.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movieDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movieDuration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.movieAge.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <AdminLayout 
      search={{children:<></>, title: currentPane, searchTerm: searchTerm, handleSearchChange: handleSearchChange}}
      navBar={{type: currentPane, changeCurrentPane: changeTypeProduct}}
    >
      {
        currentPane === 'ShopMovies' ?
          <CardList typeProduct='Movies' filteredData={moviesData} />
          : <></>
      }
      {
        currentPane === 'ShopSnacks' ?
          <CardList typeProduct='Snacks' filteredData={snacksData} />
          : <></>
      }
      {
        currentPane === 'ShopQualification' ?
          <Qualification/>
          : <></>
      }
    </AdminLayout>
  )
}
