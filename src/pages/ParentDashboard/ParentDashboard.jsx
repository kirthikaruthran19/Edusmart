import "./ParentDashboard.css";

import ParentSidebar from "../../components/ParentSidebar/ParentSidebar";
import ParentHeader from "../../components/ParentHeader/ParentHeader";

import ParentStats from "../../components/ParentStats/ParentStats";
import ParentAttendanceCard from "../../components/ParentAttendanceCard/ParentAttendanceCard";
import ParentAssignmentTable from "../../components/ParentAssignmentTable/ParentAssignmentTable";
import ParentMarksTable from "../../components/ParentMarksTable/ParentMarksTable";

import { parentDashboardData } from "../../data/parentDashboardData";
import { parentAttendanceData } from "../../data/parentAttendanceData";
import { parentAssignmentsData } from "../../data/parentAssignmentsData";
import { parentExamResultsData } from "../../data/parentExamResultsData";

function ParentDashboard() {
  return (
    <div className="parent-dashboard-layout">
      <ParentSidebar />

      <main className="parent-dashboard-main">
        <ParentHeader
  title="Parent Dashboard"
  subtitle="Track your child's progress and activities"
/>

        <div className="parent-dashboard-content">
          <div className="parent-dashboard-welcome">
            <h2>
              Welcome Back,
              {parentDashboardData.parentName}
            </h2>

            <p>
              Monitor your child's academic
              progress, attendance, assignments,
              and exam performance.
            </p>
          </div>

          <ParentStats
            stats={parentDashboardData.stats}
          />

          <div className="parent-dashboard-grid">
            <ParentAttendanceCard
              attendanceData={
                parentAttendanceData
              }
            />
          </div>

          <ParentAssignmentTable
            assignments={
              parentAssignmentsData
            }
          />

          <ParentMarksTable
            results={
              parentExamResultsData
            }
          />
        </div>
      </main>
    </div>
  );
}

export default ParentDashboard;