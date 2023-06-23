import props from "@/app/types/props/CardProps"
import Link from "next/link"

export default function Card({url,imgUrl,productPrice,productName}: props) {
  return (
    <Link href={url} className="flex w-[100%] md:w-[50%] h-[20vh] bg-secondary-opacity border border-secondary rounded-lg hover:bg-secondary hover:border-secondary-opacity cursor-pointer">
      <img className="w-[50%] rounded-lg" src={imgUrl} alt={productName}/>
      <div className="flex flex-col justify-around p-4">
          <h5 className="mb-2 text-2xl font-bold text-primary">
            {productName}
          </h5>
          <p className="mb-3 font-normal text-tertiary-opacity">
            ${productPrice}
          </p>
      </div>
    </Link>
  )
}