'use client'

import { cardListProps } from "../types/Props"
import Card from "./Card"
import CardMovie from "../movie/CardMovie"
import { Snack } from "../types/Interfaces"
import { Movie } from "@/app/types/Interfaces"

export default function CardList({ typeProduct, filteredData }: cardListProps) {

  return (
    <div className={`flex flex-wrap w-[90%] h-[90%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto overflow-y-auto scrollbar-small ${typeProduct === 'Movies' ? 'gap-1': ''}`}>
      {typeProduct === 'Snacks' ?
        filteredData.map((item, idx) => {
          const productItem = item as Snack
          return (
            <Card
              key={idx}
              snack={productItem}
            />
          )
        }) : <></>
      }
      {typeProduct === 'Movies' ?
        filteredData.map((item, idx) => {
          const movieItem = item as Movie
          return (
            <CardMovie
              isInHome={true}
              key={idx}
              url={movieItem.imgUrl}
              title={movieItem.title}
              duration={movieItem.duration}
              age={movieItem.age}
              description={movieItem.synopsis}
              id={movieItem.id}
            />)
        }) : <></>
      }
    </div>
  )
}