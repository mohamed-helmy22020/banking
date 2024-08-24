"use client";
import { ArcElement, Chart as ChartJS, Tooltip, Title } from "chart.js";

import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Title);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const accountNames = accounts.map((a) => a.name);
    const balances = accounts.map((a) => a.currentBalance);
    const data = {
        labels: accountNames,
        datasets: [
            {
                label: "banks",
                data: balances,
                backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
            },
        ],
    };
    return <Doughnut data={data} options={{ cutout: "60%" }} />;
};

export default DoughnutChart;
