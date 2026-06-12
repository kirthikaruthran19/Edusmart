import "./ParentAttendanceCard.css";

function ParentAttendanceCard({
  attendanceData,
}) {
  const totalClasses =
    attendanceData.length;

  const presentCount =
    attendanceData.filter(
      (item) => item.status === "Present"
    ).length;

  const absentCount =
    attendanceData.filter(
      (item) => item.status === "Absent"
    ).length;

  const attendancePercentage =
    totalClasses > 0
      ? Math.round(
          (presentCount / totalClasses) *
            100
        )
      : 0;

  return (
    <div className="parent-attendance-card">
      <div className="attendance-card-header">
        <h3>Attendance Overview</h3>

        <span>
          {attendancePercentage}%
        </span>
      </div>

      <div className="attendance-summary">
        <div className="summary-box">
          <h4>{presentCount}</h4>
          <p>Present</p>
        </div>

        <div className="summary-box">
          <h4>{absentCount}</h4>
          <p>Absent</p>
        </div>

        <div className="summary-box">
          <h4>{totalClasses}</h4>
          <p>Total Classes</p>
        </div>
      </div>

      <div className="attendance-table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>

                <td>{item.subject}</td>

                <td>
                  <span
                    className={`attendance-status ${
                      item.status ===
                      "Present"
                        ? "present"
                        : "absent"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ParentAttendanceCard;