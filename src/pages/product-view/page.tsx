'use client'
import { useState } from 'react'
import Card from '@/app/pages/product-view/Card'
import Search from './Search'

const productData = [
  {
  productId: '1',
  productName: 'Hot dog',
  productPrice: '5000',
  url: 'https://www.wikihow.com/images/0/09/Boil-a-Hot-Dog-Step-13-Version-3.jpg'
  },
  {
  productId: '2',
  productName: 'Pop corn dulce',
  productPrice: '8000',
  url:'https://elcomercio.pe/resizer/fn6WLFZcDuL7QUy_AXwkwPbBLkk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MXUE22HMSJGJJOM7Y7A6UGETN4.jpg'
  },
  {
  productId: '3',
  productName: 'Pop corn dulce',
  productPrice: '8000',
  url:'https://elcomercio.pe/resizer/fn6WLFZcDuL7QUy_AXwkwPbBLkk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MXUE22HMSJGJJOM7Y7A6UGETN4.jpg'
  },
  {
  productId: '4',
  productName: 'Pop corn dulce',
  productPrice: '8000',
  url:'https://elcomercio.pe/resizer/fn6WLFZcDuL7QUy_AXwkwPbBLkk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MXUE22HMSJGJJOM7Y7A6UGETN4.jpg'
  },
  {
  productId: '5',
  productName: 'Pop corn dulce',
  productPrice: '8000',
  url:'https://elcomercio.pe/resizer/fn6WLFZcDuL7QUy_AXwkwPbBLkk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MXUE22HMSJGJJOM7Y7A6UGETN4.jpg'
  },
  {
  productId: '6',
  productName: 'Pop corn dulce',
  productPrice: '8000',
  url:'https://elcomercio.pe/resizer/fn6WLFZcDuL7QUy_AXwkwPbBLkk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MXUE22HMSJGJJOM7Y7A6UGETN4.jpg'
  },
  {
  productId: '7',
  productName: 'Pop corn dulce',
  productPrice: '8000',
  url:'https://elcomercio.pe/resizer/fn6WLFZcDuL7QUy_AXwkwPbBLkk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MXUE22HMSJGJJOM7Y7A6UGETN4.jpg'
  }];

export default function ProductView() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const filteredData = productData.filter((item) => {
    return (
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.productPrice.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <main className="h-[100vh] w-[100%] flex">

        <section className="h-[100%] w-0 md:w-[20%] bg-tertiary-opacity "> Panel de Control</section>

        <section className="h-[100%] w-[100%] md:w-[80%] pb-[5%] bg-primary ">

          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>

          <div className="flex flex-wrap w-[90%] h-[90%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto overflow-y-auto">
            {
              filteredData.map((item, idx) => (
                <Card key={idx} url={item.url} productName={item.productName} productPrice={item.productPrice}/>
              ))
            }
          </div>

        </section>
        

    </main>
  )
}