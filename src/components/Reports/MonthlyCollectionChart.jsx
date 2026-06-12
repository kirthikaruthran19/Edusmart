import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { monthlyCollectionData } from "../../data/reportsData";

export default function MonthlyCollectionChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={monthlyCollectionData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Area
          dataKey="collection"
          fill="#7C6CF7"
          stroke="#7C6CF7"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}