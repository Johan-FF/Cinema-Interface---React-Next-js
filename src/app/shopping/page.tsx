'use client'
import { useState } from 'react'
import { products } from '@/app/types/data/ProductData'
import CardList from '@/app/components/CardList'
import Search from '../../components/Search'
import NavBar from '@/app/components/NavBar'

export default function Shopping() {
  const [productType, setProductType] = useState('movies')
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const changeTypeProduct = (type: string) => {
    setProductType(type)
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
    <main className="h-[100vh] w-[100%] relative">
        <NavBar changeProduct={changeTypeProduct} />
        {
          productType === 'movies' ?
            <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary ">
              <Search title='Películas' searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
              <CardList typeProduct='movie' filteredData={moviesData}/>
            </section>
          :
            <section className="z-1 h-[100%] w-[100%] absolute md:left-[20%] md:w-[80%] pb-[5%] bg-primary ">
              <Search title='Comidas' searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
              <CardList typeProduct='snack' filteredData={snacksData}/>
            </section>
        }
    </main>
  )
}