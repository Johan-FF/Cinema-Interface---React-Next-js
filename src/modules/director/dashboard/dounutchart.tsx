"use client"
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getStatisticsSalesProxy } from "../services/StatisticsService";
import { StatisticsSales } from "../types/Interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Doughnutchart(props:any) {
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

  const options = {
    animation: true,
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "left" as const,
        value: true,
        labels:
         {
          generateLabels: function (chart:any) {
            const data = chart.data.datasets[0].data;
            const labels = chart.data.labels;
            const legendItems = [];

            if (data.length) {
              for (let i = 0; i < data.length; i++) {
                const label = labels[i];
                const value = data[i];

                legendItems.push({
                  text: `${label}: ${value}`, // Agrega el valor al texto de la leyenda
                  fillStyle: chart.data.datasets[0].backgroundColor[i],
                  hidden: false,
                  lineCap: "butt",
                  lineDash: [],
                  lineDashOffset: 0,
                  lineJoin: "miter",
                  lineWidth: 1,
                  strokeStyle: "rgba(0,0,0,0)",
                  pointStyle: "circle",
                  rotation: 0,
                });
              }
            }

            return legendItems;
          },
        },
      },
      title: {
        display: true,
        text: "Ventas realizadas por multiplex",
      },
    },
  };

  const data = {
    labels: multiplexes,
    datasets: [
      {
        label: "Ventas",
        data: salesMultiplexes,
        backgroundColor: [
          "rgba(255, 0, 0)",
          "rgba(0, 0, 255)",
          "rgba(255, 255, 0)",
          "rgba(0, 255, 0)",
          "rgba(255, 0, 255)",
          "rgba(255, 165, 0)",
        ],
        borderColor: [
          "rgba(255, 0, 0)",
          "rgba(0, 0, 255)",
          "rgba(255, 255, 0)",
          "rgba(0, 255, 0)",
          "rgba(255, 0, 255)",
          "rgba(255, 165, 0)",
        ],
        borderWidth: 3,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
}
