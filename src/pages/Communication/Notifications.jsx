// src/pages/Communication/Notifications.jsx

import "./Notifications.css";
import { notifications } from "./communicationData";

import {
  AlertCircle,
  Info,
  CheckCircle
} from "lucide-react";

const getIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircle size={24} />;

    case "warning":
      return <AlertCircle size={24} />;

    default:
      return <Info size={24} />;
  }
};

const NotificationSection = ({ title, data }) => (
  <div className="notification-section">

    <h3>{title}</h3>

    {data.map((item) => (
      <div
        key={item.id}
        className="notification-item"
      >
        <div className="notification-left">
          <div className={`icon-box ${item.type}`}>
            {getIcon(item.type)}
          </div>

          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>

        <span className="time">
          {item.time}
        </span>
      </div>
    ))}
  </div>
);

const Notifications = () => {
  return (
    <div className="notifications-card">

      <NotificationSection
        title="Today"
        data={notifications.today}
      />

      <NotificationSection
        title="Yesterday"
        data={notifications.yesterday}
      />

      <NotificationSection
        title="Earlier"
        data={notifications.earlier}
      />

    </div>
  );
};

export default Notifications;