import "./PendingApprovals.css";
import { approvals } from "../../data/dashboardData";
import { CheckCircle2, XCircle } from "lucide-react";

function PendingApprovals() {
  return (
    <div className="approvals-card">
      <div className="approval-header">
        <div>
          <h2>Pending Approvals</h2>
          <p>Require your action</p>
        </div>

        <span className="count-badge">
          {approvals.length}
        </span>
      </div>

      {approvals.map((item) => (
        <div className="approval-item" key={item.id}>
          <div className="approval-top">
            <div>
              <h4>{item.name}</h4>
              <p>{item.reason}</p>
            </div>

            <span className="type-badge">
              {item.badge}
            </span>
          </div>

          <div className="approval-buttons">
            <button className="approve-btn">
              <CheckCircle2 size={16} />
              Approve
            </button>

            <button className="reject-btn">
              <XCircle size={16} />
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PendingApprovals;