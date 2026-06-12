import "./TeacherMessages.css";

import { useState } from "react";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";

import MessageSidebar from "../../components/MessageSidebar/MessageSidebar";
import MessageHeader from "../../components/MessageHeader/MessageHeader";
import MessageChat from "../../components/MessageChat/MessageChat";
import MessageInput from "../../components/MessageInput/MessageInput";

import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
import AIAssistantModal from "../../components/AIAssistantModal/AIAssistantModal";
import NewMessageModal from "../../components/NewMessageModal/NewMessageModal";

import { conversations as initialConversations } from "../../data/messagesData";

function TeacherMessages() {
    const [conversations, setConversations] =
        useState(initialConversations);

    const [activeChat, setActiveChat] =
        useState(initialConversations[0]);

    const [searchTerm, setSearchTerm] =
        useState("");

    const [activeTab, setActiveTab] =
        useState("all");

    const [showAssistant, setShowAssistant] =
        useState(false);
    const [showNewMessage, setShowNewMessage] =
        useState(false);

    return (
        <div className="teacher-messages-layout">
            <TeacherSidebar />

            <main className="teacher-messages-main">
                <TeacherHeader />

                <div className="teacher-messages-content">
                    <div className="messages-page-header">
                        <h1>Messages</h1>

                        <button
                            className="new-message-btn"
                            onClick={() =>
                                setShowNewMessage(true)
                            }
                        >
                            New Message
                        </button>
                    </div>

                    <div className="messages-container">
                        <MessageSidebar
                            conversations={conversations}
                            activeChat={activeChat}
                            setActiveChat={setActiveChat}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />

                        <div className="messages-chat-section">
                            <MessageHeader
                                activeChat={activeChat}
                            />

                            <MessageChat
                                activeChat={activeChat}
                            />

                            <MessageInput
                                activeChat={activeChat}
                                setConversations={
                                    setConversations
                                }
                                setActiveChat={
                                    setActiveChat
                                }
                            />
                        </div>
                    </div>
                </div>

                <FloatingAssistant
                    onClick={() =>
                        setShowAssistant(true)
                    }
                />

                {showAssistant && (
                    <AIAssistantModal
                        type="messages"
                        onClose={() =>
                            setShowAssistant(false)
                        }
                    />
                )}
                {showNewMessage && (
                    <NewMessageModal
                        onClose={() =>
                            setShowNewMessage(false)
                        }
                        conversations={conversations}
                        setConversations={
                            setConversations
                        }
                        setActiveChat={
                            setActiveChat
                        }
                    />
                )}
            </main>
        </div>
    );
}

export default TeacherMessages;