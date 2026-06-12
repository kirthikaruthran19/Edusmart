import "./AttendanceRow.css";

import { Check, X, Clock3 } from "lucide-react";

function AttendanceRow({
  student,
  onStatusChange,
}) {
  return (
    <div className="attendance-row">
      <div className="attendance-student">
        <img
          src={student.avatar}
          alt={student.name}
        />

        <div>
          <h4>{student.name}</h4>
          <p>Roll No: {student.rollNo}</p>
        </div>
      </div>

      <div className="attendance-actions">

        <button
          className={`attendance-btn present ${
            student.status === "Present"
              ? "active"
              : ""
          }`}
          onClick={() =>
            onStatusChange(
              student.id,
              "Present"
            )
          }
        >
          <Check size={16} />
          Present
        </button>

        <button
          className={`attendance-btn absent ${
            student.status === "Absent"
              ? "active"
              : ""
          }`}
          onClick={() =>
            onStatusChange(
              student.id,
              "Absent"
            )
          }
        >
          <X size={16} />
          Absent
        </button>

        <button
          className={`attendance-btn late ${
            student.status === "Late"
              ? "active"
              : ""
          }`}
          onClick={() =>
            onStatusChange(
              student.id,
              "Late"
            )
          }
        >
          <Clock3 size={16} />
          Late
        </button>

      </div>
    </div>
  );
}

export default AttendanceRow;