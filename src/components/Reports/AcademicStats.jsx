import { GraduationCap } from "lucide-react";

export default function AcademicStats({
  value,
  title,
  subtitle,
}) {
  return (
    <div className="academic-card">
      <div className="card-icon">
        <GraduationCap size={22} />
      </div>

      <div>
        <h2>{value}</h2>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}