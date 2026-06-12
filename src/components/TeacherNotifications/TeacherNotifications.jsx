import "./TeacherNotifications.css";
import { notificationData } from "../../data/teacherDashboardData";

function TeacherNotifications() {
  return (
    <div className="teacher-notification-card">
      <h2>Notifications</h2>

      <div className="teacher-notification-list">
        {notificationData.map((item) => (
          <div
            className="teacher-notification-item"
            key={item.id}
          >
            <span
              className="notification-dot"
              style={{
                backgroundColor: item.color,
              }}
            />

            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherNotifications;