import "./TeacherTimetable.css";
import { timetableData } from "../../data/teacherDashboardData";

function TeacherTimetable() {
  return (
    <div className="teacher-timetable-card">
      <div className="teacher-card-header">
        <h2>Today's Timetable</h2>
        <button>View All</button>
      </div>

      <div className="teacher-timetable-list">
        {timetableData.map((item) => (
          <div className="teacher-timetable-item" key={item.id}>
            <div className="teacher-time">
              <h4>{item.time}</h4>
              <span>{item.duration}</span>
            </div>

            <div className="teacher-class-details">
              <h3>{item.subject}</h3>

              {item.className && (
                <p>
                  {item.className} • {item.room}
                </p>
              )}
            </div>

            {item.type && (
              <span className="teacher-badge">
                {item.type}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherTimetable;