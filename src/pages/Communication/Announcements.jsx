// src/pages/Communication/Announcements.jsx

import "./Announcements.css";
import { announcements } from "./communicationData";

import {
  Users,
  CalendarDays,
  Clock3
} from "lucide-react";

const Announcements = () => {
  return (
    <div className="announcements-wrapper">
      {announcements.map((item) => (
        <div
          key={item.id}
          className="announcement-card"
          style={{
            borderLeft: `10px solid ${item.color}`
          }}
        >
          <div className="announcement-header">
            <h3>{item.title}</h3>

            <div className="announcement-badges">
              <span
                className={`priority ${item.priority.toLowerCase()}`}
              >
                {item.priority}
              </span>

              <span className="published">
                {item.status}
              </span>
            </div>
          </div>

          <p className="announcement-description">
            {item.description}
          </p>

          <div className="announcement-footer">
            <span>
              <Users size={16} />
              {item.audience}
            </span>

            <span>
              <CalendarDays size={16} />
              {item.date}
            </span>

            <span>
              By {item.author}
            </span>

            {item.expiry && (
              <span>
                <Clock3 size={16} />
                Expires {item.expiry}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;