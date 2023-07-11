import React from "react"
import { Barchart } from "./barchart"
import { Doughnutchart } from "./dounutchart"

const Dashboard = () => {
  const data = [32, 19, 25, 8]

  return (
<section className="size-all flex-col p-[5%]">
  
  <div className="p-[5%] mb-[5%] flex-center">
    <h2 className=" text-[55px] bg-secondary-opacity font-bold p-[5%] shadow-big" >Estadísticas</h2>
  </div>

  <div className="w-[50%] h-[60vh] flex-center shadow-big bg-gray-300 mb-[5%] p-4">
    <Barchart />
  </div>
  <div className="w-[50%] h-[60vh] flex-center shadow-big bg-gray-300 mb-[5%] p-4">
    <Doughnutchart></Doughnutchart>
  </div>
</section>
  )
}

export default Dashboard
