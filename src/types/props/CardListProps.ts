import movieProps from "./CardMovieProps"
import cardProps from "./CardProps";

export default interface cardListProps {
  typeProduct: string,
  filteredData: {
    url:string,
    productPrice: string,
    productName: string
  }[] | movieProps[] | cardProps[];
}