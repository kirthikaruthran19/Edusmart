import "./ApprovalStats.css";
import {
  CheckCircle2,
  Clock3,
  TrendingDown,
} from "lucide-react";

function ApprovalStats({ stats = [] }) {
  const getIcon = (type) => {
    switch (type) {
      case "approved":
        return <CheckCircle2 size={24} />;
      case "pending":
        return <Clock3 size={24} />;
      case "rejected":
        return <TrendingDown size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="approval-stats">
      {stats.map((item) => (
        <div
          key={item.id}
          className={`approval-stat-card ${item.type}`}
        >
          <div className="stat-icon">
            {getIcon(item.type)}
          </div>

          <div className="stat-content">
            <h2>{item.count}</h2>

            <h4>{item.title}</h4>

            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApprovalStats;