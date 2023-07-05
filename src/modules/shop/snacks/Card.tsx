import { cardProps } from "../types/Props"
import { useCart } from "../hooks/useCart"

export default function Card({url,snack}: cardProps) {
  const { addProduct } = useCart()

  return (
    <article
      className="flex w-[100%] md:w-[50%] h-[20vh] bg-secondary-opacity border border-secondary rounded-lg hover:bg-secondary hover:border-secondary-opacity cursor-pointer" 
      onClick={() => addProduct(snack)}
    >
      <img className="w-[50%] rounded-lg" src={snack.url} alt={snack.name}/>
      <div className="flex flex-col justify-around p-4">
          <h5 className="mb-2 text-2xl font-bold">
            {snack.name}
          </h5>
          <p className="mb-3 font-normal text-tertiary-opacity">
            ${snack.price}
          </p>
      </div>
    </article>
  )
}