import backgroundProps from "../types/props/BackgroundProps"

export default function Background({ viewProducts, children }: backgroundProps ) {
  return (
    <div className="relative h-[100%] w-[100%] overflow-hidden shadow-2xl shadow-black">
      <span className="absolute h-[100%] w-[100%] top-0 left-0">
        <span className="h-[100%] w-[100%] absolute top-0 left-0 bg-quaternary "></span>
        <span className="h-[500px] w-[500px] rotate-45 absolute -top-[25%] -left-[15%] bg-tertiary blur-2xl"></span>
        <span className="h-[500px] w-[500px] rotate-45 absolute -bottom-[25%] -right-[15%] bg-tertiary blur-2xl"></span>
        <span className="h-[500px] w-[500px] rounded-full absolute -top-[25%] -right-[15%] bg-secondary blur-2xl"></span>
        <span className="h-[500px] w-[500px] rounded-full absolute -bottom-[25%] -left-[15%] bg-secondary blur-2xl"></span>
      </span>
      <span className="h-[100%] w-[100%] absolute top-0 left-0 flex justify-center items-center ">
        {children}
      </span>
      {
        !viewProducts ? 
        <span className=" h-[100%] w-[100%] absolute top-0 left-0 bg-black bg-opacity-80 "></span> : <></>
      }
    </div>
  )
}