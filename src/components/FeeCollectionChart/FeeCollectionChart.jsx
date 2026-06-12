import "./FeeCollectionChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function FeeCollectionChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Collected",
        data: [40, 68, 60, 45, 90, 48],
        backgroundColor: "#8B7CF6",
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="fee-card">
      <h2>Fee Collection</h2>
      <p>Monthly collection</p>

      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default FeeCollectionChart;