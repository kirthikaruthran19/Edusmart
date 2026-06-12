import {
  attendanceStats,
} from "../../data/reportsData";

import AttendanceTrendChart from "./AttendanceTrendChart";
import AttendanceBreakdownChart from "./AttendanceBreakdownChart";
import AttendanceRateChart from "./AttendanceRateChart";
import WeeklyAttendanceChart from "./WeeklyAttendanceChart";

export default function AttendanceAnalysis() {
  return (
    <>
      <div className="academic-stats-grid">
        {attendanceStats.map((item) => (
          <div className="academic-card" key={item.id}>
            <div>
              <h2>{item.value}</h2>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="academic-chart-grid">
        <div className="academic-chart-card">
          <h2>Monthly Attendance Trend</h2>
          <AttendanceTrendChart />
        </div>

        <div className="academic-chart-card">
          <h2>Attendance Breakdown</h2>
          <AttendanceBreakdownChart />
        </div>
      </div>

      <div className="academic-chart-grid">
        <div className="academic-chart-card">
          <h2>Attendance Rate By Class</h2>
          <AttendanceRateChart />
        </div>

        <div className="academic-chart-card">
          <h2>Weekly Attendance Distribution</h2>
          <WeeklyAttendanceChart />
        </div>
      </div>
    </>
  );
}