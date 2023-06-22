
interface props {
  url:string,
  productPrice: string,
  productName: string
}

export default function Card({url,productPrice,productName}: props) {
  return (
    <article className="flex w-[100%] md:w-[50%] h-[20vh] bg-secondary-opacity border border-secondary rounded-lg hover:bg-secondary hover:border-secondary-opacity">
      <img className="w-[50%] rounded-lg" src={url} alt={productName}/>
      <div className="flex flex-col justify-around p-4">
          <h5 className="mb-2 text-2xl font-bold text-primary">
            {productName}
          </h5>
          <p className="mb-3 font-normal text-tertiary-opacity">
            ${productPrice}
          </p>
      </div>
    </article>
  )
}