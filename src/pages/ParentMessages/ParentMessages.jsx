import "./ParentMessages.css";

import ParentSidebar from "../../components/ParentSidebar/ParentSidebar";
import ParentHeader from "../../components/ParentHeader/ParentHeader";

import { parentMessagesData } from "../../data/parentMessagesData";

import { Mail, Bell } from "lucide-react";

function ParentMessages() {
    return (
        <div className="parent-messages-layout">
            <ParentSidebar />

            <main className="parent-messages-main">
                <ParentHeader
                    title="Messages"
                    subtitle="View communications from teachers and school administration"
                />
                <div className="parent-messages-content">
                    

                    <div className="messages-list">
                        {parentMessagesData.map((message) => (
                            <div
                                key={message.id}
                                className={`message-card ${!message.read ? "unread-message" : ""
                                    }`}
                            >
                                <div className="message-icon">
                                    {!message.read ? (
                                        <Bell size={20} />
                                    ) : (
                                        <Mail size={20} />
                                    )}
                                </div>

                                <div className="message-content">
                                    <div className="message-top">
                                        <h4>{message.subject}</h4>

                                        <span>{message.date}</span>
                                    </div>

                                    <h5>{message.sender}</h5>

                                    <p>{message.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ParentMessages;