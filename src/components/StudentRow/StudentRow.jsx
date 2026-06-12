import "./StudentRow.css";

function StudentRow({ student }) {
  const progressColor =
    student.marks >= 85
      ? "#5B4DFD"
      : student.marks >= 70
      ? "#A16207"
      : "#EF4444";

  return (
    <div className="student-row">

      <div className="student-info">

        <img
          src={student.avatar}
          alt={student.name}
        />

        <div>
          <h4>{student.name}</h4>
          <p>{student.studentId}</p>
        </div>

      </div>

      <div>
        <span className="student-class-badge">
          {student.className}
        </span>
      </div>

      <div className="attendance-info">

        <span className="attendance-percent">
          {student.attendance}%
        </span>

        <span
          className={`attendance-status ${student.attendanceStatus
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          {student.attendanceStatus}
        </span>

      </div>

      <div className="performance-section">

        <div className="performance-top">
          <span>{student.performanceGrade}</span>
          <span>{student.marks}/100</span>
        </div>

        <div className="performance-bar">
          <div
            className="performance-fill"
            style={{
              width: `${student.marks}%`,
              background: progressColor,
            }}
          />
        </div>

      </div>

    </div>
  );
}

export default StudentRow;