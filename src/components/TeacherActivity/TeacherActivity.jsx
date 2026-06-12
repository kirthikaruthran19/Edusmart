import "./TeacherActivity.css";
import { recentActivityData } from "../../data/teacherDashboardData";

function TeacherActivity() {
  return (
    <div className="teacher-activity-card">
      <h2>Recent Activity</h2>

      <div className="teacher-activity-list">
        {recentActivityData.map((item) => (
          <div
            className="teacher-activity-item"
            key={item.id}
          >
            <div className="teacher-activity-icon">
              {item.icon}
            </div>

            <div>
              <p>{item.title}</p>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherActivity;