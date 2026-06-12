// src/pages/Communication/Broadcast.jsx

import "./Broadcast.css";

import {
  Users,
  Mail,
  MessageSquare,
  Send,
  Radio
} from "lucide-react";

import {
  channels,
  recipientGroups,
  broadcastStats
} from "./communicationData";

const Broadcast = () => {
  return (
    <div className="broadcast-layout">

      <div className="broadcast-form">

        <h2>
          <Radio size={22} />
          Send Broadcast
        </h2>

        <h3>Broadcast Channel</h3>

        <div className="channels-grid">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="channel-card"
            >
              <h4>{channel.title}</h4>
              <p>{channel.description}</p>
            </div>
          ))}
        </div>

        <h3>Recipient Group</h3>

        <div className="recipient-grid">
          {recipientGroups.map((group) => (
            <div
              key={group.id}
              className="recipient-card"
            >
              <div>
                <Users size={18} />
                {group.name}
              </div>

              <span>{group.count}</span>
            </div>
          ))}
        </div>

        <label>Subject</label>

        <input
          type="text"
          placeholder="Eg Term 2 Fee Reminder"
        />

        <label>Message</label>

        <textarea
          rows="6"
          placeholder="Write your message..."
        />

        <button className="send-btn">
          <Send size={18} />
          Send Broadcast
        </button>

      </div>

      <div className="broadcast-stats">

        <h2>Stats Broadcast</h2>

        {broadcastStats.map((stat) => (
          <div
            key={stat.id}
            className="stat-card"
            style={{
              borderLeft: `8px solid ${stat.color}`
            }}
          >
            <div className="stat-icon">
              {stat.title === "Recipients" && (
                <Users size={24} />
              )}

              {stat.title === "Total Sent" && (
                <Send size={24} />
              )}

              {stat.title === "Email" && (
                <Mail size={24} />
              )}

              {stat.title === "SMS" && (
                <MessageSquare size={24} />
              )}
            </div>

            <div>
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Broadcast;