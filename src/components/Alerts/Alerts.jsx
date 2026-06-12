import "./Alerts.css";
import { Bell } from "lucide-react";
import { alerts } from "../../data/dashboardData";

function Alerts() {
  return (
    <div className="alerts-card">
      <div className="alerts-header">
        <div>
          <h2>Alert</h2>
          <p>4 unread notifications</p>
        </div>

        <span className="alert-badge">
          4 New
        </span>
      </div>

      {alerts.map((alert) => (
        <div
          className={`alert-item ${alert.type}`}
          key={alert.id}
        >
          <div className="alert-icon">
            <Bell size={18} />
          </div>

          <div className="alert-content">
            <h4>{alert.title}</h4>
            <p>{alert.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alerts;