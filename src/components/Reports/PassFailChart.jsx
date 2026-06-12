import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { passFailData } from "../../data/reportsData";

export default function PassFailChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={passFailData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="grade" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="pass"
          stackId="a"
          fill="#8A7CFF"
        />

        <Bar
          dataKey="fail"
          stackId="a"
          fill="#F5A8A8"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}