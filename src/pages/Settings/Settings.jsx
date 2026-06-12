import { useState } from "react";
import "./Settings.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import {
  Building2,
  ShieldCheck,
  CalendarDays,
  PlugZap,
} from "lucide-react";

import SchoolProfile from "./SchoolProfile";
import RolesPermissions from "./RolesPermissions";
import AcademicYear from "./AcademicYear";
import Integration from "./Integration";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="settings-layout">
      <Sidebar />

      <div className="settings-main">
        <Header />

        <div className="settings-content">

          {/* Page Header */}
          <div className="settings-header">
            <h1>Settings</h1>

            <p>
              Configure school profile, permissions and integrations
            </p>
          </div>

          {/* Tabs */}
          <div className="settings-tabs">

            <button
              className={
                activeTab === "profile"
                  ? "settings-tab active"
                  : "settings-tab"
              }
              onClick={() => setActiveTab("profile")}
            >
              <Building2 size={22} />
              School Profile
            </button>

            <button
              className={
                activeTab === "roles"
                  ? "settings-tab active"
                  : "settings-tab"
              }
              onClick={() => setActiveTab("roles")}
            >
              <ShieldCheck size={22} />
              Roles & Permission
            </button>

            <button
              className={
                activeTab === "academic"
                  ? "settings-tab active"
                  : "settings-tab"
              }
              onClick={() => setActiveTab("academic")}
            >
              <CalendarDays size={22} />
              Academic Year
            </button>

            <button
              className={
                activeTab === "integration"
                  ? "settings-tab active"
                  : "settings-tab"
              }
              onClick={() => setActiveTab("integration")}
            >
              <PlugZap size={22} />
              Integration
            </button>

          </div>

          {/* Tab Content */}
          {activeTab === "profile" && <SchoolProfile />}

          {activeTab === "roles" && <RolesPermissions />}

          {activeTab === "academic" && <AcademicYear />}

          {activeTab === "integration" && <Integration />}

        </div>
      </div>
    </div>
  );
};

export default Settings;