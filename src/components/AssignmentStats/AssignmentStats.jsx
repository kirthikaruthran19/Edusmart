import "./AssignmentStats.css";

import {
  ClipboardList,
  SquareCheckBig,
  BadgeCheck,
} from "lucide-react";

function AssignmentStats({ assignments = [] }) {
  const activeAssignments = assignments.filter(
    (item) => item.status === "Active"
  ).length;

  const needsGrading = assignments.filter(
    (item) => item.status === "Needs Grading"
  ).length;

  const completedAssignments = assignments.filter(
    (item) => item.status === "Completed"
  ).length;

  return (
    <div className="assignment-stats">

      <div className="assignment-stat-card">
        <div className="stat-icon purple">
          <ClipboardList size={28} />
        </div>

        <div className="stat-info">
          <h2>{activeAssignments}</h2>
          <p>Active Assignments</p>
        </div>
      </div>

      <div className="assignment-stat-card">
        <div className="stat-icon orange">
          <SquareCheckBig size={28} />
        </div>

        <div className="stat-info">
          <h2>{needsGrading}</h2>
          <p>Needs Grading</p>
        </div>
      </div>

      <div className="assignment-stat-card">
        <div className="stat-icon green">
          <BadgeCheck size={28} />
        </div>

        <div className="stat-info">
          <h2>{completedAssignments}</h2>
          <p>Completed</p>
        </div>
      </div>

    </div>
  );
}

export default AssignmentStats;