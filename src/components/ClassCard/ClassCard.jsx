import "./ClassCard.css";
import {
  GraduationCap,
  User,
  Pencil,
  Trash2,
} from "lucide-react";

const ClassCard = ({ item }) => {
  return (
    <div className="class-card">
      <div className="card-top">
        <div className="icon-box">
          <GraduationCap size={22} />
        </div>

        <div className="actions">
          <Pencil size={22} />
          <Trash2 size={22} className="delete" />
        </div>
      </div>

      <h3>{item.title}</h3>

      <p className="room">{item.room}</p>

      <div className="students-row">
        <span>
          <User size={16} />
          {item.students} Students
        </span>

        <div className="badge">
          {item.grade}
        </div>
      </div>

      <hr />

      <p>
        <span>Class Teacher:</span> {item.teacher}
      </p>

      <p>
        <span>Schedule:</span> {item.schedule}
      </p>
    </div>
  );
};

export default ClassCard;