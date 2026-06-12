import "./TeacherSettings.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";

import TeacherProfileSettings from "../../components/TeacherProfileSettings/TeacherProfileSettings";
import TeacherNotificationSettings from "../../components/TeacherNotificationSettings/TeacherNotificationSettings";
import TeacherSecuritySettings from "../../components/TeacherSecuritySettings/TeacherSecuritySettings";

import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
import AIAssistantModal from "../../components/AIAssistantModal/AIAssistantModal";

import {
  teacherProfile,
  notificationSettings,
} from "../../data/teacherSettingsData";

import {
  LogOut,
  Save,
} from "lucide-react";

function TeacherSettings() {
  const navigate = useNavigate();

  const [profile, setProfile] =
    useState(teacherProfile);

  const [notifications, setNotifications] =
    useState(notificationSettings);

  const [showAssistant, setShowAssistant] =
    useState(false);

  const handleSaveProfile = () => {
    localStorage.setItem(
      "teacherProfile",
      JSON.stringify(profile)
    );

    alert(
      "Profile updated successfully!"
    );
  };

  const handleSaveNotifications =
    () => {
      localStorage.setItem(
        "teacherNotifications",
        JSON.stringify(notifications)
      );

      alert(
        "Notification settings saved!"
      );
    };

  const handleLogout = () => {
    const confirmLogout =
      window.confirm(
        "Are you sure you want to logout?"
      );

    if (!confirmLogout) return;

    localStorage.clear();

    navigate("/login");
  };

  return (
    <div className="teacher-settings-layout">
      <TeacherSidebar />

      <main className="teacher-settings-main">
        <TeacherHeader />

        <div className="teacher-settings-content">
          {/* Header */}

          <div className="settings-page-header">
            <div>
              <h1>Settings</h1>

              <p>
                Manage your account
                preferences and profile
              </p>
            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              Log Out
            </button>
          </div>

          {/* Profile */}

          <TeacherProfileSettings
            profile={profile}
            setProfile={setProfile}
            onSave={handleSaveProfile}
          />

          {/* Notifications */}

          <TeacherNotificationSettings
            notifications={
              notifications
            }
            setNotifications={
              setNotifications
            }
          />

          <div className="settings-save-wrapper">
            <button
              className="settings-save-btn"
              onClick={
                handleSaveNotifications
              }
            >
              <Save size={18} />
              Save Notification
              Settings
            </button>
          </div>

          {/* Security */}

          <TeacherSecuritySettings />
        </div>

        <FloatingAssistant
          onClick={() =>
            setShowAssistant(true)
          }
        />

        {showAssistant && (
          <AIAssistantModal
            type="settings"
            onClose={() =>
              setShowAssistant(false)
            }
          />
        )}
      </main>
    </div>
  );
}

export default TeacherSettings;