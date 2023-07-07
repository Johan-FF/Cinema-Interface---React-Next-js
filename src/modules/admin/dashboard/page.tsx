import React from "react";
import { Barchart } from "../../../modules/admin/dashboard/barchart";
import { Doughnutchart } from "../../../modules/admin/dashboard/dounutchart";
import { Polarchart } from "../../../modules/admin/dashboard/polarchart";

const Dashboard = () => {
  const data = [32, 19, 25, 8];

  return (
<section className="size-all flex-col p-[5%]">
  
  <div className="p-[5%] mb-[5%] flex-center">
    <h2 className=" text-[55px] bg-secondary-opacity font-bold bg-secondary-opacity p-[5%] shadow-big" >Estadísticas</h2>
  </div>

  <div className="w-[50%] h-[60vh] flex-center shadow-big bg-gray-300 mb-[5%] p-4">
    <Barchart />
    <p className=" text-primary mt-2 text-gray-900">
      Leyenda del gráfico de barras
    </p>
  </div>
  <div className="w-[50%] h-[60vh] flex-center shadow-big bg-gray-300 mb-[5%] p-4">
    <Doughnutchart></Doughnutchart>
    <p className=" text-primary mt-2 text-gray-900">
      Leyenda del gráfico circular
    </p>
  </div>
  <div className="w-[50%] h-[60vh] flex-center shadow-big bg-gray-300 mb-[5%] p-4">
    <Polarchart valores={data}></Polarchart>
    <p className=" text-primary mt-2 text-gray-900">
      Leyenda del gráfico circular
    </p>
  </div>
</section>
  );
};

export default Dashboard;
