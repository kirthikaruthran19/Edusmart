import "./MessageChat.css";

function MessageChat({
  activeChat,
}) {
  if (!activeChat) {
    return (
      <div className="message-chat-empty">
        Select a conversation
      </div>
    );
  }

  return (
    <div className="message-chat">
      <div className="chat-messages">
        {activeChat.messages.map(
          (msg) => (
            <div
              key={msg.id}
              className={`message-row ${
                msg.sender ===
                "teacher"
                  ? "sent"
                  : "received"
              }`}
            >
              <div className="message-bubble">
                {msg.text}
              </div>

              <span className="message-time">
                {msg.time}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MessageChat;