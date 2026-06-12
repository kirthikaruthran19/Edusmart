import "./Dashboard.css";

import { Plus, Bell, Menu } from "lucide-react";
import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import StatCard from "../../components/StatCard/StatCard";

import AttendanceChart from "../../components/AttendanceChart/AttendanceChart";
import FeeCollectionChart from "../../components/FeeCollectionChart/FeeCollectionChart";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import Alerts from "../../components/Alerts/Alerts";
import PendingApprovals from "../../components/PendingApprovals/PendingApprovals";

import { statistics } from "../../data/dashboardData";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dashboard">
      <Sidebar isOpen={isOpen} />
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="dashboard-content">
        <Header />

        <div className="dashboard-body">

          {/* Dashboard Header */}

          <div className="dashboard-header">
            <div
              className="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={28} />
            </div>
            <div>
              <h1>Dashboard</h1>

              <p>
                Welcome Back, Elena! Here's what's happening today.
              </p>
            </div>

            <div className="dashboard-actions">
              <button className="add-student-btn">
                <Plus size={18} />
                Add Student
              </button>

              <button className="announcement-btn">
                <Bell size={18} />
                New Announcement
              </button>
            </div>
          </div>

          {/* Statistics Cards */}

          <div className="stats-grid">
            {statistics.map((item) => (
              <StatCard
                key={item.id}
                icon={item.icon}
                value={item.value}
                title={item.title}
                subtitle={item.subtitle}
                growth={item.growth}
              />
            ))}
          </div>

          {/* Charts Section */}

          <div className="charts-grid">
            <AttendanceChart />
            <FeeCollectionChart />
          </div>

          {/* Bottom Section */}

          <div className="bottom-grid">
            <RecentActivity />
            <Alerts />
            <PendingApprovals />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;