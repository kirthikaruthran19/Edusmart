import "./TeacherHeader.css";

import {
  Search,
  Bell,
} from "lucide-react";

function TeacherHeader() {
  return (
    <header className="teacher-header">

      <div className="teacher-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

      <div className="teacher-header-right">

        <button className="teacher-bell">
          <Bell size={22} />
        </button>

        <div className="teacher-user">

          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="teacher"
          />

          <div>
            <h4>Sarah Johnson</h4>
            <span>Teacher</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default TeacherHeader;