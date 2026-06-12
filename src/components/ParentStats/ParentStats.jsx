import "./ParentStats.css";

import {
  CalendarCheck,
  ClipboardList,
  GraduationCap,
  MessageSquare,
} from "lucide-react";

function ParentStats({ stats }) {
  const getIcon = (title) => {
    switch (title) {
      case "Attendance":
        return <CalendarCheck size={24} />;

      case "Assignments":
        return <ClipboardList size={24} />;

      case "Average Marks":
        return <GraduationCap size={24} />;

      case "Messages":
        return <MessageSquare size={24} />;

      default:
        return <CalendarCheck size={24} />;
    }
  };

  return (
    <div className="parent-stats-grid">
      {stats.map((item, index) => (
        <div
          key={index}
          className="parent-stat-card"
        >
          <div className="parent-stat-top">
            <div className="parent-stat-icon">
              {getIcon(item.title)}
            </div>

            <span className="parent-stat-change">
              {item.change}
            </span>
          </div>

          <h3>{item.value}</h3>

          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ParentStats;