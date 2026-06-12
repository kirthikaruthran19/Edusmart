import "./PendingDues.css";
import { pendingDues } from "../../data/feesData";
import { Bell } from "lucide-react";

const PendingDues = () => {
  return (
    <div className="pending-page">
      <div className="pending-header">
        <h2>Pending Dues</h2>
        <p>
          {pendingDues.length} outstanding records :
          Total Due <strong>$18,500</strong>
        </p>
      </div>

      <div className="pending-table">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Grade & Section</th>
              <th>Fee Type</th>
              <th>Due Amount</th>
              <th>Days Overdue</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {pendingDues.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="student-cell">
                    <img
                      src={student.avatar}
                      alt={student.name}
                    />

                    <div>
                      <h4>{student.name}</h4>
                      <span>{student.studentId}</span>
                    </div>
                  </div>
                </td>

                <td>{student.grade}</td>
                <td>{student.feeType}</td>
                <td>${student.dueAmount}</td>

                <td>{student.daysOverdue}</td>

                <td>{student.dueDate}</td>

                <td>
                  <span
                    className={`status ${student.status.toLowerCase()}`}
                  >
                    {student.status}
                  </span>
                </td>

                <td>
                  <button className="reminder-btn">
                    <Bell size={16} />
                    Reminder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingDues;