import "./AssignmentTable.css";

import {
  Paperclip,
  Calendar,
  Eye,
  CheckSquare,
  UploadCloud,
  Trash2,
  Pencil,
} from "lucide-react";

function AssignmentTable({
  assignments,
  onEdit,
  onDelete,
  onGrade,
  onView,
}) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "status-active";

      case "Needs Grading":
        return "status-grading";

      case "Completed":
        return "status-completed";

      default:
        return "";
    }
  };

  return (
    <div className="assignment-table-wrapper">

      <table className="assignment-table">

        <thead>
          <tr>
            <th>ASSIGNMENT TITLE</th>
            <th>CLASS</th>
            <th>DUE DATE</th>
            <th>SUBMISSIONS</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>

          {assignments.map((item) => (
            <tr key={item.id}>

              <td>
                <div className="assignment-title-cell">

                  <h4>{item.title}</h4>

                  <div className="assignment-attachment">

                    <Paperclip size={15} />

                    <span>{item.attachment}</span>

                  </div>

                </div>
              </td>

              <td>
                <span className="class-badge">
                  {item.class}
                </span>
              </td>

              <td>
                <div className="due-date">
                  <Calendar size={16} />

                  <span>
                    {new Date(
                      item.dueDate
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </td>

              <td>

                <div className="submission-info">

                  <div className="submission-top">

                    <span>
                      {item.submitted} /{" "}
                      {item.totalStudents}
                    </span>

                    <span>
                      {item.percentage}%
                    </span>

                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${item.percentage}%`,
                      }}
                    />
                  </div>

                </div>

              </td>

              <td>

                <span
                  className={`status-pill ${getStatusClass(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>

              </td>

              <td>

                <div className="action-buttons">

                  {item.status ===
                  "Completed" ? (
                    <button
                      className="view-btn"
                      onClick={() =>
                        onView(item)
                      }
                    >
                      <Eye size={16} />
                      View
                    </button>
                  ) : (
                    <button
                      className="grade-btn"
                      onClick={() =>
                        onGrade(item)
                      }
                    >
                      <CheckSquare size={16} />
                      Grade
                    </button>
                  )}

                  <button
                    className="icon-btn"
                    onClick={() =>
                      onEdit(item)
                    }
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="icon-btn"
                    onClick={() =>
                      onDelete(item.id)
                    }
                  >
                    <Trash2 size={16} />
                  </button>

                  <button className="icon-btn">
                    <UploadCloud size={16} />
                  </button>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AssignmentTable;