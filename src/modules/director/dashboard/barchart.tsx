"use client"
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getStatisticsMovieProxy } from "../services/StatisticsService";
//import * as faker from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Barchart(props:any) {
  const [sales, setSales] = useState<StatisticsSales[]>([])
  const [salesMultiplexes, setSalesMultiplexes] = useState<number[]>([])
  const [multiplexes, setMultiplexes] = useState<string[]>([])
  
  useEffect(() => {
    async function fetch() {
      getStatisticsSalesProxy()
        .then(response => {
          setSales(response)
          setMultiplexes(response.map(item => item.multiplex))
          setSalesMultiplexes(response.map(item => parseFloat(item.sales)))
        })
    }
    fetch()
  }, [])
  
  const infoMovie1 = [0, 40, 39, 38, 40, 50, 60, 60, 65, 63, 58];
  const infoMovie2 = [50, 50, 30, 20, 40, 50, 50, 50, 60, 68, 72];
  const infoMovie3 = [0, 95, 90, 90, 80, 70, 78, 79, 86, 88, 85];
  const labels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
  ];
  const options = {
    animation: true,
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Calificación promedio de peliculas",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Ventas Totales",
        data: infoMovie1,
        backgroundColor: "red",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
