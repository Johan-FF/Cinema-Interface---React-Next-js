import props from "../types/props/SearchProps"

export default function Search({title,searchTerm,handleSearchChange}: props) {
  return (
    <div className="flex justify-between items-end bg-secondary pb-2 pt-[4%] px-[5%] md:shadow-xl md:shadow-black">
      <h1 className=" text-2xl md:text-5xl pl-[10%] xl:pl-0 text-primary font-bold">{title}</h1>
      <search className="relative max-w-[45%]">
        <svg fill="none" className="w-[20%] md:w-[10%] h-[100%] absolute inset-y-0 left-0 text-secondary" stroke="currentColor" strokeWidth="2" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <input
          placeholder="Buscar"
          className="bg-primary rounded-lg pl-[20%] md:pl-[10%] w-[100%]"
          value={searchTerm}
          onChange={handleSearchChange} />
      </search>
    </div>
  )
}