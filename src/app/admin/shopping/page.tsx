'use client'

import { useState, ChangeEvent } from 'react'
import { products } from '@/app/types/data/ProductData'
import { valuesNavBar } from '@/app/types/Types'
import Qualification from '../../../modules/shop/qualification/QualificationSection'
import CardList from '../../../modules/shop/snacks/CardList'
import AdminLayout from '../../../components/AdminLayout'
import CartProvider from '@/app/modules/shop/hooks/useCart'
import { NextPage } from 'next'
import { withAuth } from '@/app/middlewares/withAuth'

const Shopping: NextPage = () => {
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
      item.snack.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.snack.price.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  const moviesData = products.movies.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <CartProvider>
      <AdminLayout
        search={{ children: <></>, title: currentPane, searchTerm: searchTerm, handleSearchChange: handleSearchChange }}
        navBar={{ func: () => { }, type: currentPane, changeCurrentPane: changeTypeProduct }}
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
            <Qualification />
            : <></>
        }
      </AdminLayout>
    </CartProvider>
  )
}

export default withAuth(Shopping)