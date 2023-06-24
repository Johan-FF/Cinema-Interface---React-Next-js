
export default function () {
  return (
    <ul className="h-[15%] md:h-[100%] w-[100%] md:w-[30%] px-5 md:px-0 mt-2 md:mt-0 ml-1 flex flex-row md:flex-col justify-center items-center gap-5 rounded-xl shadow-2xl overflow-x-auto md:overflow-x-none bg-secondary-opacity">
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
        <span className="font-bold text-primary">Ocupado</span>
      </li>
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
        <span className="font-bold text-primary">Disponible</span>
      </li>
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
        <span className="font-bold text-primary">Preferencial</span>
      </li>
      <li className="w-[80%] flex justify-start items-center">
        <span className="h-10 w-10 rounded-full mr-5 bg-black "></span>
        <span className="font-bold text-primary">General</span>
      </li>
    </ul>
  )
}