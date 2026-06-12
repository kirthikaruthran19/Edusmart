import "./TeacherNotificationSettings.css";

function TeacherNotificationSettings({
  notifications,
  setNotifications,
}) {
  const toggle = (field) => {
    setNotifications((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const items = [
    {
      key: "assignments",
      title:
        "Assignment Submissions",
      desc:
        "Get notified when students submit assignments",
    },
    {
      key: "attendance",
      title:
        "Attendance Alerts",
      desc:
        "Low attendance threshold warnings",
    },
    {
      key: "messages",
      title: "New Messages",
      desc:
        "Messages from students and parents",
    },
    {
      key: "approvals",
      title: "Grade Approvals",
      desc:
        "When admin approves published grades",
    },
  ];

  return (
    <div className="notification-card">
      <h2>Notifications</h2>

      {items.map((item) => (
        <div
          key={item.key}
          className="notification-item"
        >
          <div>
            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={
                notifications[
                  item.key
                ]
              }
              onChange={() =>
                toggle(item.key)
              }
            />

            <span className="slider"></span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default TeacherNotificationSettings;