'use client'

import { cartNavBarProps } from "../types/Props"

export default function CartNavBar({setTypeMenu}: cartNavBarProps ) {

  return (
      <section className="w-full pt-[5%]">
        <p><strong> Cliente: </strong>123123123 </p>
        <p><strong> Puntos actuales: </strong>15 </p>
        <div className="flex justify-between w-full p-1 mt-5 border-b-2 border-primary bg-secondary-opacity shadow-big">
          <ul className="flex gap-1">
            <li>
              <button className="border-b-2 text-primary text-opacity-70 border-b-primary border-opacity-50 hover:text-primary hover:border-b-primary shadow-big py-2 px-2 font-bold text-center"
                id="movie-tab" onClick={() => setTypeMenu('movie')}>Peliculas</button>
            </li>
            <li>
              <button className="border-b-2 text-primary text-opacity-70 border-b-primary border-opacity-50 hover:text-primary hover:border-b-primary shadow-big py-2 px-2 font-bold text-center"
                id="snacks-tab" onClick={() => setTypeMenu('snack')}>Snacks</button>
            </li>
          </ul>
        </div>
      </section>
  )
}