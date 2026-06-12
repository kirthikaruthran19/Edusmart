import "./MessageHeader.css";

import {
  Phone,
  Video,
  Info,
} from "lucide-react";

function MessageHeader({
  activeChat,
}) {
  if (!activeChat) return null;

  return (
    <div className="message-header">
      <div className="message-user-info">
        <div className="message-avatar-wrapper">
          <img
            src={activeChat.avatar}
            alt={activeChat.name}
            className="message-avatar"
          />

          {activeChat.online && (
            <span className="message-online-dot"></span>
          )}
        </div>

        <div>
          <h3>{activeChat.name}</h3>

          <p>{activeChat.role}</p>
        </div>
      </div>

      <div className="message-header-actions">
        <button>
          <Phone size={20} />
        </button>

        <button>
          <Video size={20} />
        </button>

        <button>
          <Info size={20} />
        </button>
      </div>
    </div>
  );
}

export default MessageHeader;