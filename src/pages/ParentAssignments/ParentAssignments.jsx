import "./ParentAssignments.css";

import ParentSidebar from "../../components/ParentSidebar/ParentSidebar";
import ParentHeader from "../../components/ParentHeader/ParentHeader";
import ParentAssignmentTable from "../../components/ParentAssignmentTable/ParentAssignmentTable";

import { parentAssignmentsData } from "../../data/parentAssignmentsData";

function ParentAssignments() {
    return (
        <div className="parent-assignments-layout">
            <ParentSidebar />

            <main className="parent-assignments-main">
                <ParentHeader
                    title="Assignments"
                    subtitle="View assignment details, due dates, submission status, and teacher updates"
                />

                <div className="parent-assignments-content">
                    <div className="assignments-page-header">
                        <h2>Assignments</h2>

                        <p>
                            View assignment details, due dates,
                            submission status, and teacher updates.
                        </p>
                    </div>

                    <ParentAssignmentTable
                        assignments={parentAssignmentsData}
                    />
                </div>
            </main>
        </div>
    );
}

export default ParentAssignments;