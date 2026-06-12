import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { subjectPerformanceData } from "../../data/reportsData";

export default function SubjectPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={subjectPerformanceData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="subject" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="avg"
          fill="#7C6CF7"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}