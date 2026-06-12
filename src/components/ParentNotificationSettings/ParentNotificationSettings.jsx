import "./ParentNotificationSettings.css";

function ParentNotificationSettings({
  settings,
  setSettings,
}) {
  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="parent-notification-card">
      <div className="notification-card-header">
        <h3>Notification Settings</h3>
        <p>
          Manage how you receive school
          updates
        </p>
      </div>

      <div className="notification-list">
        <div className="notification-item">
          <div>
            <h4>Attendance Alerts</h4>
            <span>
              Receive notifications for
              student attendance
            </span>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={
                settings.attendanceAlerts
              }
              onChange={() =>
                handleToggle(
                  "attendanceAlerts"
                )
              }
            />

            <span className="slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div>
            <h4>
              Assignment Reminders
            </h4>
            <span>
              Get assignment due date
              reminders
            </span>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={
                settings.assignmentReminders
              }
              onChange={() =>
                handleToggle(
                  "assignmentReminders"
                )
              }
            />

            <span className="slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div>
            <h4>
              Exam Result Notifications
            </h4>
            <span>
              Receive updates when marks
              are published
            </span>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={
                settings.examResultNotifications
              }
              onChange={() =>
                handleToggle(
                  "examResultNotifications"
                )
              }
            />

            <span className="slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div>
            <h4>Teacher Messages</h4>
            <span>
              Receive teacher and school
              communications
            </span>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={
                settings.teacherMessages
              }
              onChange={() =>
                handleToggle(
                  "teacherMessages"
                )
              }
            />

            <span className="slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div>
            <h4>Push Notifications</h4>
            <span>
              Enable app push
              notifications
            </span>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={
                settings.pushNotifications
              }
              onChange={() =>
                handleToggle(
                  "pushNotifications"
                )
              }
            />

            <span className="slider"></span>
          </label>
        </div>

        <div className="notification-item">
          <div>
            <h4>Email Notifications</h4>
            <span>
              Receive updates through
              email
            </span>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={
                settings.emailNotifications
              }
              onChange={() =>
                handleToggle(
                  "emailNotifications"
                )
              }
            />

            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ParentNotificationSettings;