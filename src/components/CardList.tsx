import props from "../types/props/CardListProps"
import movieProps from "../types/props/CardMovieProps"
import productProps from "../types/props/CardProps"
import Card from "./Card"
import CardMovie from "../app/movie/CardMovie"


export default function CardList({typeProduct,filteredData}: props) {
  const url = typeProduct==='movie' ? '/movie' : ''
  if (typeProduct === 'movie') {
    return(
      <div className="flex flex-wrap w-[90%] h-[100%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto">
        {filteredData.map((item, idx) => {
          const movieItem = item as movieProps;
          return(
            <CardMovie
            key={idx}
            url={movieItem.url}
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
          const productItem = item as productProps;
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