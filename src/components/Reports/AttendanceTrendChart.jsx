import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { attendanceTrendData } from "../../data/reportsData";

export default function AttendanceTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={attendanceTrendData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />

        <Line
          dataKey="students"
          stroke="#7C6CF7"
        />

        <Line
          dataKey="staff"
          stroke="#55D6C2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}