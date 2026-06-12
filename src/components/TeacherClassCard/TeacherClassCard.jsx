import "./TeacherClassCard.css";

import {
  BookOpen,
  Users,
  Eye,
  CalendarCheck,
} from "lucide-react";

function TeacherClassCard({
  className,
  subject,
  students,
  room,
  schedule,
}) {
  return (
    <div className="teacher-class-card">
      <div className="teacher-class-top">
        <div className="teacher-class-icon">
          <BookOpen size={34} />
        </div>

        <div>
          <h2>{className}</h2>
          <p>{subject}</p>
        </div>
      </div>

      <div className="teacher-class-info">
        <div className="teacher-info-row">
          <span>
            <Users size={18} />
            Students
          </span>

          <strong>{students}</strong>
        </div>

        <div className="teacher-info-row">
          <span>Room</span>

          <strong>{room}</strong>
        </div>
      </div>

      <div className="teacher-schedule">
        {schedule}
      </div>

      <div className="teacher-card-actions">
        <button className="view-btn">
          <Eye size={16} />
          View Students
        </button>

        <button className="attendance-btn">
          <CalendarCheck size={16} />
          Attendance
        </button>
      </div>
    </div>
  );
}

export default TeacherClassCard;