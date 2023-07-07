"use client"
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Doughnutchart(props:any) {
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
    labels: ["Titan", "Unicentro", "Plaza central", "Gran estación"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 33, 44,20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(55, 200, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(55, 200, 86, 0.2)"
        ],
        borderWidth: 3,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
}
