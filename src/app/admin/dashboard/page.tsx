import React from "react";
import { Barchart } from "./barchart";
import { Doughnutchart } from "./dounutchart";
import { Polarchart } from "./polarchart";

const Dashboard = () => {
  const data = [32, 19, 25, 8];

  return (
    <div className="flex h-screen">
      <main className="flex-1 bg-gray-200">
        <header className="bg-white p-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard cinemapasho
          </h1>
        </header>
        <div className="flex">
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
    </div>
  );
};

export default Dashboard;
