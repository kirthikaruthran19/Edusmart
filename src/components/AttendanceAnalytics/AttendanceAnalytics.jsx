import "./AttendanceAnalytics.css";

import {
  monthlyAnalytics,
  classAnalytics,
} from "../../data/attendanceAnalytics";

function AttendanceAnalytics() {
  const maxValue = 100;

  return (
    <div className="attendance-analytics">

      <h2>Monthly Analytics</h2>

      <div className="analytics-chart">

        {monthlyAnalytics.map((item) => (
          <div
            className="chart-group"
            key={item.month}
          >
            <div className="chart-bars">

              <div
                className="present-bar"
                style={{
                  height: `${item.present}%`,
                }}
              />

              <div
                className="absent-bar"
                style={{
                  height: `${item.absent * 3}px`,
                }}
              />

            </div>

            <span>{item.month}</span>
          </div>
        ))}

      </div>

      <div className="chart-legend">

        <div className="legend-item">
          <span className="legend-box present" />
          Present
        </div>

        <div className="legend-item">
          <span className="legend-box absent" />
          Absent
        </div>

      </div>

      <div className="class-progress">

        {classAnalytics.map((item) => (
          <div
            className="progress-row"
            key={item.className}
          >
            <span className="class-name">
              {item.className}
            </span>

            <div className="progress-wrapper">

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />
              </div>

              <span className="percentage">
                {item.percentage}%
              </span>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default AttendanceAnalytics;