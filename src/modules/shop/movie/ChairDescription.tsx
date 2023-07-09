'use client'

export default function ChairDescription() {
  return (
    <ul className="h-[15%] md:h-[100%] w-[100%] md:w-[30%] px-5 md:px-0 mt-2 md:mt-0 md:ml-1 flex md:flex-col md:justify-center items-center gap-5 overflow-x-auto md:overflow-x-none bg-secondary-opacity shadow-big scrollbar-small">
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-chair-occupied "></span>
        <span className="font-bold">Ocupado</span>
      </li>
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-chair-free"></span>
        <span className="font-bold">Disponible</span>
      </li>
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-chair-preferential"></span>
        <span className="font-bold">Preferencial</span>
      </li>
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-chair-general"></span>
        <span className="font-bold">General</span>
      </li>
    </ul>
  )
}