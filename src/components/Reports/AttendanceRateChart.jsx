import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { attendanceRateClassData } from "../../data/reportsData";

export default function AttendanceRateChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={attendanceRateClassData}>
        <XAxis dataKey="grade" />
        <YAxis />
        <Tooltip />

        <Bar
          dataKey="attendance"
          fill="#8A7CFF"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}