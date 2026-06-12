import "./MessageInput.css";

import { useState } from "react";

import {
  Paperclip,
  Image,
  Smile,
  Send,
} from "lucide-react";

function MessageInput({
  activeChat,
  setConversations,
  setActiveChat,
}) {
  const [message, setMessage] =
    useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "teacher",
      text: message,
      time: new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),
    };

    setConversations((prev) =>
      prev.map((chat) => {
        if (
          chat.id === activeChat.id
        ) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              newMessage,
            ],
            lastMessage: message,
          };
        }

        return chat;
      })
    );

    setActiveChat((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        newMessage,
      ],
    }));

    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="message-input-container">
      <button className="input-icon-btn">
        <Paperclip size={20} />
      </button>

      <button className="input-icon-btn">
        <Image size={20} />
      </button>

      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
        onKeyDown={handleKeyPress}
      />

      <button className="input-icon-btn">
        <Smile size={20} />
      </button>

      <button
        className="send-btn"
        onClick={handleSendMessage}
      >
        <Send size={18} />
      </button>
    </div>
  );
}

export default MessageInput;