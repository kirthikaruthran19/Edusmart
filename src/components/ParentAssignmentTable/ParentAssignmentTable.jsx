import "./ParentAssignmentTable.css";

import {
  FileText,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";

function ParentAssignmentTable({
  assignments,
}) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Submitted":
        return "assignment-submitted";

      case "Pending":
        return "assignment-pending";

      case "Graded":
        return "assignment-graded";

      default:
        return "";
    }
  };

  return (
    <div className="parent-assignment-card">
      <div className="parent-assignment-header">
        <h3>Assignments</h3>
      </div>

      <div className="parent-assignment-table-wrapper">
        <table className="parent-assignment-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>
                  <div className="assignment-title-cell">
                    <FileText size={18} />
                    {assignment.title}
                  </div>
                </td>

                <td>{assignment.subject}</td>

                <td>{assignment.teacher}</td>

                <td>
                  <div className="date-cell">
                    <Calendar size={16} />
                    {assignment.dueDate}
                  </div>
                </td>

                <td>
                  <span
                    className={`assignment-status ${getStatusClass(
                      assignment.status
                    )}`}
                  >
                    {assignment.status ===
                    "Submitted" ? (
                      <CheckCircle size={14} />
                    ) : (
                      <Clock size={14} />
                    )}

                    {assignment.status}
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

export default ParentAssignmentTable;