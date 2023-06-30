import props from "../../../types/props/CardListProps"
import movieProps from "@/app/types/props/CardMovieProps"
import cardProps from "@/app/types/props/CardProps"
import Card from "./Card"
import CardMovie from "./movie/CardMovie"

export default function CardList({ typeProduct, filteredData }: props) {

  return (
    <div className={`flex flex-wrap w-[90%] h-[90%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity ${typeProduct === 'Movies' ? 'gap-1': ''}`}>
      {typeProduct === 'Snacks' ?
        filteredData.map((item, idx) => {
          const productItem = item as cardProps
          return (
            <Card
              url={""}
              key={idx}
              imgUrl={productItem.url}
              productName={productItem.productName}
              productPrice={productItem.productPrice}
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
              movieUrl={movieItem.movieUrl}
              movieTitle={movieItem.movieTitle}
              movieDuration={movieItem.movieDuration}
              movieAge={movieItem.movieAge}
              movieDescription={movieItem.movieDescription}
              movieId={movieItem.movieId}
            />)
        }) : <></>
      }
    </div>
  )
}