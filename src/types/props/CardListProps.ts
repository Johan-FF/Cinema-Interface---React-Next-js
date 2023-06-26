
import movieProps from "./CardMovieProps";
export default interface props {
  typeProduct: string,
  filteredData: Array<{  
    url:string,
    productPrice: string,
    productName: string
  }|movieProps>;
}