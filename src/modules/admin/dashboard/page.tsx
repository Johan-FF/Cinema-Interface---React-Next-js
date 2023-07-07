import React from "react";
import { Barchart } from "../../../modules/admin/dashboard/barchart";
import { Doughnutchart } from "../../../modules/admin/dashboard/dounutchart";
import { Polarchart } from "../../../modules/admin/dashboard/polarchart";

const Dashboard = () => {
  const data = [32, 19, 25, 8];

  return (
<main className="flex-1 bg-gray-200">

<div className="flex ">
  <div className="w-1/2 border-r border-gray-300 p-4">
    <Barchart />
    <p className="text-sm text-gray-600 mt-2">
      Leyenda del gráfico de barras
    </p>
  </div>
  <div className="w-1/2 border-l border-gray-300 p-4">
    <Doughnutchart></Doughnutchart>
    <p className="text-sm text-gray-600 mt-2">
      Leyenda del gráfico circular
    </p>
  </div>
  <div className="w-1/2 border-l border-gray-300 p-4">
    <Polarchart valores={data}></Polarchart>
    <p className="text-sm text-gray-600 mt-2">
      Leyenda del gráfico circular
    </p>
  </div>
</div>
</main>
  );
};

export default Dashboard;
