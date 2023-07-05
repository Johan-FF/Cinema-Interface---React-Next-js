'use client'

import { cardListProps, cardProps, movieProps } from "../types/Props"
import Card from "./Card"
import CardMovie from "../movie/CardMovie"

export default function CardList({ typeProduct, filteredData }: cardListProps) {

  return (
    <div className={`flex flex-wrap w-[90%] h-[90%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto overflow-y-auto scrollbar-small ${typeProduct === 'Movies' ? 'gap-1': ''}`}>
      {typeProduct === 'Snacks' ?
        filteredData.map((item, idx) => {
          const productItem = item as cardProps
          return (
            <Card
              key={idx}
              url={productItem.url}
              snack={productItem.snack}
            />
          )
        }) : <></>
      }
      {typeProduct === 'Movies' ?
        filteredData.map((item, idx) => {
          const movieItem = item as movieProps
          return (
            <CardMovie
              isInHome={true}
              key={idx}
              url={movieItem.url}
              title={movieItem.title}
              duration={movieItem.duration}
              age={movieItem.age}
              description={movieItem.description}
              id={movieItem.id}
            />)
        }) : <></>
      }
    </div>
  )
}