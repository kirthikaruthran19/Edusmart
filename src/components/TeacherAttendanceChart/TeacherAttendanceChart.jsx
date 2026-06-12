import "./TeacherAttendanceChart.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { attendanceData } from "../../data/teacherDashboardData";

function TeacherAttendanceChart() {
  return (
    <div className="teacher-chart-card">
      <div className="teacher-chart-header">
        <h2>Attendance Overview</h2>
        <p>Monthly attendance rate %</p>
      </div>

      <div className="teacher-chart-wrapper">
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={attendanceData}>
            <defs>
              <linearGradient
                id="attendanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.35}
                />
                <stop
                  offset="95%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

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

            <Area
              type="monotone"
              dataKey="rate"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#attendanceGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TeacherAttendanceChart;