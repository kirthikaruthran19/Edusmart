import "./StatCard.css";

function StatCard({ icon, value, title, subtitle, growth }) {
  return (
    <div className="stat-card">

      <div className="stat-top">
        <div className="stat-icon">
          {icon}
        </div>

        <div className="growth-badge">
          ↗ {growth}
        </div>
      </div>

      <h2>{value}</h2>

      <h3>{title}</h3>

      <p>{subtitle}</p>

    </div>
  );
}

export default StatCard;