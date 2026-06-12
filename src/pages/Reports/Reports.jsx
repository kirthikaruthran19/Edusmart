import { useState } from "react";
import "./Reports.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import AcademicReports from "../../components/Reports/AcademicReports";
import FinancialReports from "../../components/Reports/FinancialReports";
import AttendanceAnalysis from "../../components/Reports/AttendanceAnalysis";

import {
  BookOpen,
  DollarSign,
  Users,
  Upload,
} from "lucide-react";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("academic");

  return (
    <div className="reports-layout">
      <Sidebar />

      <main className="reports-main">
        <Header />

        <div className="reports-content">

          {/* Header */}

          <div className="reports-header">
            <div>
              <h1>Report & Analysis</h1>

              <p>
                Comprehensive school performance insights
                and export tools
              </p>
            </div>

            <button className="export-btn">
              <Upload size={18} />
              Export Excel
            </button>
          </div>

          {/* Tabs */}

          <div className="report-tabs">

            <button
              className={
                activeTab === "academic"
                  ? "tab-btn active"
                  : "tab-btn"
              }
              onClick={() => setActiveTab("academic")}
            >
              <BookOpen size={20} />
              Academic Reports
            </button>

            <button
              className={
                activeTab === "financial"
                  ? "tab-btn active"
                  : "tab-btn"
              }
              onClick={() => setActiveTab("financial")}
            >
              <DollarSign size={20} />
              Financial Reports
            </button>

            <button
              className={
                activeTab === "attendance"
                  ? "tab-btn active"
                  : "tab-btn"
              }
              onClick={() => setActiveTab("attendance")}
            >
              <Users size={20} />
              Attendance Analysis
            </button>

          </div>

          {/* Content */}

          {activeTab === "academic" && (
            <AcademicReports />
          )}

          {activeTab === "financial" && (
            <FinancialReports />
          )}

          {activeTab === "attendance" && (
            <AttendanceAnalysis />
          )}

        </div>
      </main>
    </div>
  );
}