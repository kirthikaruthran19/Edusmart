import "./AttendanceChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function AttendanceChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [50, 55, 75, 65, 82, 70, 90],
        borderColor: "#4F46E5",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="attendance-card">
      <h2>Attendance Overview</h2>
      <p>Last 7 days across all classes</p>

      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default AttendanceChart;