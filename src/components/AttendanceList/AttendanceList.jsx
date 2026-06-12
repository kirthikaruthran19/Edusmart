import "./AttendanceList.css";

import { useEffect, useState } from "react";

import AttendanceRow from "../AttendanceRow/AttendanceRow";

import { attendanceStudents } from "../../data/attendanceStudents";

function AttendanceList({ onStatsChange }) {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("attendanceStudents");

    return saved
      ? JSON.parse(saved)
      : attendanceStudents;
  });

  const handleStatusChange = (id, status) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, status }
        : student
    );

    setStudents(updatedStudents);

    localStorage.setItem(
      "attendanceStudents",
      JSON.stringify(updatedStudents)
    );
  };

  useEffect(() => {
    const present = students.filter(
      (s) => s.status === "Present"
    ).length;

    const absent = students.filter(
      (s) => s.status === "Absent"
    ).length;

    const late = students.filter(
      (s) => s.status === "Late"
    ).length;

    if (onStatsChange) {
      onStatsChange({
        present,
        absent,
        late,
      });
    }
  }, [students, onStatsChange]);

  return (
    <div className="attendance-list">
      {students.map((student) => (
        <AttendanceRow
          key={student.id}
          student={student}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
}

export default AttendanceList;