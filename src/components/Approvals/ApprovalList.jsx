import "./ApprovalList.css";
import {
  UserRound,
  CalendarDays,
  Briefcase,
  CheckCircle,
  XCircle,
} from "lucide-react";

function ApprovalList({ requests }) {
  return (
    <div className="approval-list">
      {requests.map((item) => (
        <div className="approval-row" key={item.id}>
          {/* User Info */}
          <div className="approval-user">
            <div className="user-icon">
              <UserRound size={24} />
            </div>

            <div className="user-details">
              <h3>
                {item.name}
                <span> . {item.role}</span>
              </h3>

              <p>{item.description}</p>
            </div>
          </div>

          {/* Request Type */}
          <div className="approval-type">
            <Briefcase size={18} />
            {item.requestType}
          </div>

          {/* Date */}
          <div className="approval-date">
            <CalendarDays size={18} />
            {item.date}
          </div>

          {/* Status */}
          <div
            className={`status-badge ${item.status.toLowerCase()}`}
          >
            {item.status}
          </div>

          {/* Actions */}
          <div className="approval-actions">
            {item.status === "Pending" && (
              <>
                <button className="approve-btn">
                  <CheckCircle size={18} />
                  Approve
                </button>

                <button className="reject-btn">
                  <XCircle size={18} />
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApprovalList;