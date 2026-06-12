import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { attendanceBreakdownData } from "../../data/reportsData";

const COLORS = [
  "#7C6CF7",
  "#55D6C2",
  "#FFA857",
  "#FF6B81",
];

export default function AttendanceBreakdownChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={attendanceBreakdownData}
          dataKey="value"
          outerRadius={120}
          label
        >
          {attendanceBreakdownData.map(
            (entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            )
          )}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}