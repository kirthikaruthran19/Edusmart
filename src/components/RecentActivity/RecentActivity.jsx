import "./RecentActivity.css";
import { recentActivities } from "../../data/dashboardData";

function RecentActivity() {
  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <p className="subtitle">Live update from today</p>

      {recentActivities.map((item) => (
        <div className="activity-item" key={item.id}>
          <div className={`activity-icon ${item.type}`}>
            {item.icon}
          </div>

          <div className="activity-content">
            <h4>{item.title}</h4>

            <div className="activity-meta">
              <span className="activity-avatar">
                {item.initials}
              </span>

              <span>
                {item.user} · {item.time}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;