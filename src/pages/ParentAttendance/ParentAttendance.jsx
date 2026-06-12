import "./ParentAttendance.css";

import ParentSidebar from "../../components/ParentSidebar/ParentSidebar";
import ParentHeader from "../../components/ParentHeader/ParentHeader";
import ParentAttendanceCard from "../../components/ParentAttendanceCard/ParentAttendanceCard";

import { parentAttendanceData } from "../../data/parentAttendanceData";

function ParentAttendance() {
    return (
        <div className="parent-attendance-layout">
            <ParentSidebar />

            <main className="parent-attendance-main">
                <ParentHeader
                    title="Attendance"
                    subtitle="View attendance records and attendance percentage"
                />

                <div className="parent-attendance-content">
                    <div className="attendance-page-header">
                        <h2>Attendance Records</h2>

                        <p>
                            View your child's attendance
                            history and attendance percentage.
                        </p>
                    </div>

                    <ParentAttendanceCard
                        attendanceData={
                            parentAttendanceData
                        }
                    />
                </div>
            </main>
        </div>
    );
}

export default ParentAttendance;