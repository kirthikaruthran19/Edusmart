import "./MessageSidebar.css";

import { Search } from "lucide-react";

function MessageSidebar({
  conversations,
  activeChat,
  setActiveChat,
  searchTerm,
  setSearchTerm,
  activeTab,
  setActiveTab,
}) {
  const filteredConversations =
    conversations.filter((chat) => {
      const matchesSearch =
        chat.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesTab =
        activeTab === "all"
          ? true
          : chat.category === activeTab;

      return (
        matchesSearch &&
        matchesTab
      );
    });

  return (
    <div className="message-sidebar">
      {/* Search */}

      <div className="message-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
        />
      </div>

      {/* Tabs */}

      <div className="message-tabs">
        <button
          className={
            activeTab === "all"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("all")
          }
        >
          All
        </button>

        <button
          className={
            activeTab === "student"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("student")
          }
        >
          Students
        </button>

        <button
          className={
            activeTab === "parent"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("parent")
          }
        >
          Parents
        </button>
      </div>

      {/* Conversation List */}

      <div className="conversation-list">
        {filteredConversations.map(
          (chat) => (
            <div
              key={chat.id}
              className={`conversation-item ${
                activeChat?.id ===
                chat.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveChat(chat)
              }
            >
              <div className="avatar-wrapper">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                />

                {chat.online && (
                  <span className="online-dot"></span>
                )}
              </div>

              <div className="conversation-info">
                <div className="conversation-top">
                  <h4>
                    {chat.name}
                  </h4>

                  <span>
                    {chat.lastTime}
                  </span>
                </div>

                <div className="conversation-bottom">
                  <p>
                    {chat.lastMessage}
                  </p>

                  {chat.unread >
                    0 && (
                    <span className="unread-badge">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MessageSidebar;