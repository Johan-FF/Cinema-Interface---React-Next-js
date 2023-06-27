import props from "../../types/props/CardListProps"
import movieProps from "@/app/types/props/CardMovieProps"
import cardProps from "@/app/types/props/CardProps"
import Card from "./Card"
import CardMovie from "../movie/CardMovie"


export default function CardList({typeProduct,filteredData}: props) {
  const url = typeProduct==='movie' ? '/movie' : ''
/*
  return (
    <article className="flex flex-wrap w-[90%] h-[90%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-opacity scrollbar-track-secondary-opacity">
      {
        filteredData.map((item, idx) => (
          <Card
            url={url}
            key={idx}
            imgUrl={item.url}
            productName={item.productName}
            productPrice={item.productPrice}/>
        ))
      }
    </article>
  )
*/
  if (typeProduct === 'movie') {
    return(
      <div className="flex flex-wrap w-[90%] h-[100%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto">
        {filteredData.map((item, idx) => {
          const movieItem = item as movieProps;
          return(
            <CardMovie
            key={idx}
            movieUrl={movieItem.movieUrl}
            movieTitle={movieItem.movieTitle}
            movieAge={movieItem.movieAge}
            movieDescription={movieItem.movieDescription}
            movieDuration={movieItem.movieDuration}
            movieId={movieItem.movieId}/>
          );
        })}
      </div>

    );
  }

  if (typeProduct === 'snack') {
    return(
      <div className="flex flex-wrap w-[90%] h-[100%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto ">
        {filteredData.map((item, idx) => {
          const productItem = item as cardProps;
          return(
            <Card
            url={productItem.url}
            key={idx}
            imgUrl={productItem.url}
            productName={productItem.productName}
            productPrice={productItem.productPrice}
          />
          );
        })}
      </div>

    );
  }

  
}