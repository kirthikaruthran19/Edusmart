import "./TeacherStatCard.css";

import {
  BookOpen,
  Users,
  LayoutGrid,
  Activity,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

function TeacherStatCard({
  title,
  value,
  subtitle,
  change,
  trend,
  icon,
}) {
  const icons = {
    book: <BookOpen size={24} />,
    students: <Users size={24} />,
    attendance: <LayoutGrid size={24} />,
    activity: <Activity size={24} />,
  };

  return (
    <div className="teacher-stat-card">
      <div className="teacher-stat-top">
        <div className="teacher-stat-icon">
          {icons[icon]}
        </div>

        <div
          className={`teacher-stat-change ${
            trend === "up"
              ? "positive"
              : "negative"
          }`}
        >
          {trend === "up" ? (
            <TrendingUp size={14} />
          ) : (
            <TrendingDown size={14} />
          )}

          {change}
        </div>
      </div>

      <h2>{value}</h2>

      <p className="teacher-stat-title">
        {title}
      </p>

      <span className="teacher-stat-subtitle">
        {subtitle}
      </span>
    </div>
  );
}

export default TeacherStatCard;