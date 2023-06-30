import StarMeter from "./StarMeter"

export default function Qualification() {
  return (
    <div className="h-[90%] w-[100%] p-[5%] flex justify-center items-center ">
      <section className="bg-secondary p-[5%] rounded-lg shadow-2xl shadow-black">
        <h2 className="text-3xl mb-5">Calificación</h2>
        <h3 className="text-opacity-[80%] text-2xl mb-5">Película</h3>
        <StarMeter/>
        <h3 className="text-opacity-[80%] text-2xl mb-5">Servicio</h3>
        <StarMeter/>
      </section>
    </div>
  )
}