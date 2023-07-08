"use client"
import React from "react";
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
        label: "Morbius",
        data: infoMovie1,
        backgroundColor: "red",
      },
      {
        label: "Fast and furious X",
        data: infoMovie2,
        backgroundColor: "blue",
      },
      {
        label: "Guardians of the galaxy VOL 3",
        data: infoMovie3,
        backgroundColor: "green",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
