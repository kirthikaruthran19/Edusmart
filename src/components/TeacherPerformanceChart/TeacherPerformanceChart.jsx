import "./TeacherPerformanceChart.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { performanceData } from "../../data/teacherDashboardData";

function TeacherPerformanceChart() {
  return (
    <div className="teacher-performance-card">
      <div className="teacher-performance-header">
        <h2>Student Performance</h2>
        <p>Avg vs Top Performers</p>
      </div>

      <div className="teacher-performance-wrapper">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={performanceData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="avg"
              name="Avg"
              fill="#8B5CF6"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="top"
              name="Top"
              fill="#FCA5A5"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TeacherPerformanceChart;