import "./TeacherAttendance.css";

import { useState } from "react";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";

import AttendanceFilters from "../../components/AttendanceFilters/AttendanceFilters";
import AttendanceList from "../../components/AttendanceList/AttendanceList";
import AttendanceAnalytics from "../../components/AttendanceAnalytics/AttendanceAnalytics";
import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
import AIAssistantModal from "../../components/AIAssistantModal/AIAssistantModal";


import { Save } from "lucide-react";

function TeacherAttendance() {
  const [showAssistant, setShowAssistant] =
    useState(false);
  const [stats, setStats] = useState({
    present: 0,
    absent: 0,
    late: 0,
  });

  const handleSaveAttendance = () => {
    const attendanceData =
      JSON.parse(
        localStorage.getItem("attendanceStudents")
      ) || [];

    localStorage.setItem(
      "attendanceRecords",
      JSON.stringify(attendanceData)
    );

    alert("Attendance Saved Successfully!");
  };

  return (
    <div className="teacher-attendance-layout">
      <TeacherSidebar />

      <main className="teacher-attendance-main">
        <TeacherHeader />

        <div className="teacher-attendance-content">
          <div className="attendance-page-header">
            <h1>Attendance Marking</h1>

            <button
              className="save-attendance-btn"
              onClick={handleSaveAttendance}
            >
              <Save size={18} />
              Save Attendance
            </button>
          </div>

          {/* Summary Cards */}

          <div className="attendance-summary">
            <div className="summary-card present-card">
              <h2>{stats.present}</h2>
              <p>Present</p>
            </div>

            <div className="summary-card absent-card">
              <h2>{stats.absent}</h2>
              <p>Absent</p>
            </div>

            <div className="summary-card late-card">
              <h2>{stats.late}</h2>
              <p>Late</p>
            </div>
          </div>

          <div className="attendance-grid">
            <div className="attendance-left-card">
              <AttendanceFilters />

              <AttendanceList
                onStatsChange={setStats}
              />
            </div>

            <AttendanceAnalytics />
          </div>
        </div>

        <FloatingAssistant
          onClick={() =>
            setShowAssistant(true)
          }
        />

        {showAssistant && (
          <AIAssistantModal
            onClose={() =>
              setShowAssistant(false)
            }
          />
        )}
      </main>
    </div>
  );
}

export default TeacherAttendance;