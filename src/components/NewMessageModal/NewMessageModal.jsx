import "./NewMessageModal.css";

import { useState } from "react";
import { X } from "lucide-react";

function NewMessageModal({
  onClose,
  conversations,
  setConversations,
  setActiveChat,
}) {
  const [recipientName, setRecipientName] =
    useState("");

  const [recipientType, setRecipientType] =
    useState("Student");

  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (
      !recipientName.trim() ||
      !message.trim()
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    const newConversation = {
      id: Date.now(),

      name: recipientName,

      role: recipientType,

      category:
        recipientType === "Student"
          ? "student"
          : "parent",

      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,

      online: false,

      unread: 0,

      lastMessage: message,

      lastTime: "Now",

      messages: [
        {
          id: Date.now(),
          sender: "teacher",
          text: message,
          time: "Now",
        },
      ],
    };

    setConversations([
      newConversation,
      ...conversations,
    ]);

    setActiveChat(newConversation);

    onClose();
  };

  return (
    <div className="new-message-overlay">
      <div className="new-message-modal">
        <div className="new-message-header">
          <h2>New Message</h2>

          <button
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="new-message-form">
          <div className="form-group">
            <label>
              Recipient Type
            </label>

            <select
              value={recipientType}
              onChange={(e) =>
                setRecipientType(
                  e.target.value
                )
              }
            >
              <option>
                Student
              </option>

              <option>
                Parent
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Recipient Name
            </label>

            <input
              type="text"
              placeholder="Enter recipient name"
              value={recipientName}
              onChange={(e) =>
                setRecipientName(
                  e.target.value
                )
              }
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              rows="5"
              placeholder="Type your message..."
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
            />
          </div>

          <div className="modal-actions">
            <button
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="send-btn"
              onClick={handleSend}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMessageModal;