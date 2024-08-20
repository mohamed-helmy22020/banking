"use client";
import { ArcElement, Chart as ChartJS, Tooltip, Title } from "chart.js";

import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Title);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        labels: ["Bank1", "Bank2", "Bank3"],
        datasets: [
            {
                label: "banks",
                data: [1250, 2500, 3750],
                backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
            },
        ],
    };
    return <Doughnut data={data} options={{ cutout: "60%" }} />;
};

export default DoughnutChart;
