import "./ParentHeader.css";

import {
  Bell,
  Search,
} from "lucide-react";

function ParentHeader({
  title = "Parent Dashboard",
  subtitle = "Track your child's progress and activities",
}) {
  return (
    <header className="parent-header">
      <div className="parent-header-left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="parent-header-right">
        <div className="parent-search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="parent-notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="parent-profile">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Parent"
          />

          <div>
            <h4>Kirthika S</h4>
            <span>Parent</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ParentHeader;