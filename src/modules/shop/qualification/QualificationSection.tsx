'use client'

import StarMeter from "./StarMeter"

export default function QualificationSection() {
  return (
    <div className="h-[90%] w-[100%] xl:py-[5%] flex-center">
      <section className="bg-secondary w-[90%] h-[90%] md:w-[100%] md:h-[100%] p-[5%] shadow-big flex-col-center">
        <span className="shadow-2xl shadow-secondary-opacity w-[90%] pb-[5%] xl:pb-0">
          <h2 className="text-4xl mb-5 text-center w-[100%]">Calificación</h2>
          <div className="flex-col-center md:flex-row gap-1 w-[100%] md:p-[5%]">
            <span className="w-[90%] flex-col-center">
              <h3 className="text-center text-opacity-[80%] text-2xl mb-5">Película</h3>
              <StarMeter/>
            </span>
            <span className="w-[90%] flex-col-center">
              <h3 className="text-center text-opacity-[80%] text-2xl mb-5">Servicio</h3>
              <StarMeter/>
            </span>
          </div>
        </span>
      </section>
    </div>
  )
}