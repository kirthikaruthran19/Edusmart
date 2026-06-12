import { useState } from "react";
import "./Communication.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import Announcements from "./Announcements";
import Notifications from "./Notifications";
import Broadcast from "./Broadcast";

import {
  Megaphone,
  Bell,
  Radio,
  Plus,
  Menu
} from "lucide-react";

const Communication = () => {
  const [activeTab, setActiveTab] = useState("announcements");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="communication-layout">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="communication-main">
        <Header />

        <div className="communication-content-wrapper">

          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="communication-page">

            <div className="communication-top">
              <div>
                <h1>Communication</h1>
                <p>
                  Announcements, notifications and broadcasts
                </p>
              </div>

              <button className="new-btn">
                <Plus size={18} />
                New Announcement
              </button>
            </div>

            <div className="communication-tabs">

              <button
                className={
                  activeTab === "announcements"
                    ? "tab active"
                    : "tab"
                }
                onClick={() =>
                  setActiveTab("announcements")
                }
              >
                <Megaphone size={18} />
                Announcements
              </button>

              <button
                className={
                  activeTab === "notifications"
                    ? "tab active"
                    : "tab"
                }
                onClick={() =>
                  setActiveTab("notifications")
                }
              >
                <Bell size={18} />
                Notifications
              </button>

              <button
                className={
                  activeTab === "broadcast"
                    ? "tab active"
                    : "tab"
                }
                onClick={() =>
                  setActiveTab("broadcast")
                }
              >
                <Radio size={18} />
                Broadcast
              </button>

            </div>

            {activeTab === "announcements" &&
              <Announcements />
            }

            {activeTab === "notifications" &&
              <Notifications />
            }

            {activeTab === "broadcast" &&
              <Broadcast />
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;