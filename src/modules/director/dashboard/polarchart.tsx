"use client"
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export function Polarchart(props: any) {
  const options = {
    animation: true,
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "left" as const,
        value: true,
        labels: {
          generateLabels: function (chart: any) {
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
        text: "Doughnut Bar Chart",
      },
    },
  };

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: props.valores,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea data={data} options={options} />;
}
