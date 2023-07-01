'use client'

import { backgroundProps } from "../types/Props"

export default function Background({ viewProducts, children }: backgroundProps ) {
  return (
    <div className="w-full h-full shadow-big relative">
      <span className="w-full h-full absolute  top-0 left-0 overflow-hidden ">
        <span className="size-all absolute top-0 left-0 bg-quaternary "></span>
        <span className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] rotate-45 absolute -top-[15%] md:top-0 xl:-top-[25%] -left-[25%] md:left-0 xl:-left-[15%] bg-tertiary blur-2xl"></span>
        <span className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full absolute -top-[15%] md:top-0 xl:-top-[25%] -right-[25%] md:right-0 xl:-right-[15%] bg-secondary blur-2xl"></span>
        <span className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] rotate-45 absolute -bottom-[15%] md:bottom-0 xl:-bottom-[25%] -right-[25%] md:right-0 xl:-right-[15%] bg-tertiary blur-2xl"></span>
        <span className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full absolute -bottom-[15%] md:bottom-0 xl:-bottom-[25%] -left-[25%] md:left-0 xl:-left-[15%] bg-secondary blur-2xl"></span>
      </span>
      <span className="w-full h-full absolute top-0 left-0 flex-center flex-col overflow-y-auto scrollbar-small">
        {children}
      </span>
      {
        !viewProducts ? 
        <span className=" w-full h-full absolute top-0 left-0 bg-black bg-opacity-80 "></span> : <></>
      }
    </div>
  )
}