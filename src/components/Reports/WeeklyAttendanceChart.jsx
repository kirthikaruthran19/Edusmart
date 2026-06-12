import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { weeklyAttendanceData } from "../../data/reportsData";

export default function WeeklyAttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={weeklyAttendanceData}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />

        <Area
          dataKey="present"
          fill="#7C6CF7"
          stroke="#7C6CF7"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}