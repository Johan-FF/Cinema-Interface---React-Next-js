'use client'

import { useState, ChangeEvent, useEffect } from 'react'
import { valuesNavBar } from '@/app/types/Types'
import Qualification from '../../../modules/shop/qualification/QualificationSection'
import CardList from '../../../modules/shop/snacks/CardList'
import AdminLayout from '../../../components/AdminLayout'
import CartProvider from '@/app/modules/shop/hooks/useCart'
import { NextPage } from 'next'
import { withAuth } from '@/app/middlewares/withAuth'
import { Snack } from '@/app/modules/shop/types/Interfaces'
import { Movie } from '@/app/types/Interfaces'
import { getAllSnacksProxy } from '@/app/modules/shop/services/SnacksService'
import ClientProvider from '@/app/modules/shop/hooks/useClient'
import { getAllMoviesProxy } from '@/app/services/MoviesService'

const Shopping: NextPage = () => {
  const [currentPane, setCurrentPane] = useState<valuesNavBar>("ShopSnacks")
  const [searchTerm, setSearchTerm] = useState("")
  const [snacks, setSnacks] = useState<Snack[]>([])
  const [movies, setMovies] = useState<Movie[]>([])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const changeTypeProduct = (type: valuesNavBar) => {
    setCurrentPane(type)
  }

  const snacksData = snacks.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  const moviesData = movies.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.synopsis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  useEffect(() => {
    async function fetchData() {
      getAllSnacksProxy()
        .then(response => {
          setSnacks(response)
        })
      getAllMoviesProxy()
        .then(response => {
          setMovies(response)
        })
    }
    fetchData()
  }, [])

  return (
    <CartProvider>
      <ClientProvider>
        <AdminLayout
          search={{ children: <></>, title: currentPane, searchTerm: searchTerm, handleSearchChange: handleSearchChange }}
          navBar={{ type: currentPane, changeCurrentPane: changeTypeProduct }}
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
      </ClientProvider>
    </CartProvider>
  )
}

export default withAuth(Shopping)