'use client'

import { searchProps } from "../types/Props"

export default function Search(
  { children, title, searchTerm, handleSearchChange }: searchProps
) {
  return (
    <section className={`${title==="ShopMovies" || title==="ShopSnacks" ? 'pl-[15%] xl:pl-[5%]': 'pl-[5%]'} flex justify-between items-end h-[8%] xl:h-[15%] bg-secondary pb-2 pt-[4%] px-[5%] `}>
      <div className="flex items-center">
        {children}
        <h1 className=" text-2xl md:text-5xl md:pl-[15%] xl:pl-0 font-bold">{title}</h1>
      </div>
      <span className="relative max-w-[45%]">
        <svg fill="none" className="w-[20%] md:w-[10%] h-[100%] absolute inset-y-0 left-0 text-secondary" stroke="currentColor" strokeWidth="2" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <input
          placeholder="Buscar"
          className="bg-primary text-secondary font-bold rounded-lg pl-[20%] md:pl-[10%] w-[100%]"
          value={searchTerm}
          onChange={handleSearchChange} />
      </span>
    </section>
  )
}