import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { feeCategoryData } from "../../data/reportsData";

const COLORS = [
  "#7C6CF7",
  "#55D6C2",
  "#FFA857",
  "#FF6B81",
  "#8C8C8C",
];

export default function FeeCategoryChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={feeCategoryData}
          dataKey="value"
          outerRadius={120}
          label
        >
          {feeCategoryData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}