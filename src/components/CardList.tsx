import props from "../types/props/CardListProps"
import Card from "./Card"

export default function CardList({filteredData}: props) {
  return (
    <div className="flex flex-wrap w-[90%] h-[90%] mt-[2%] md:mx-[5%] ml-[5%] md:ml-auto overflow-y-auto">
      {
        filteredData.map((item, idx) => (
          <Card 
            key={idx}
            url={item.url}
            productName={item.productName}
            productPrice={item.productPrice}/>
        ))
      }
    </div>
  )
}