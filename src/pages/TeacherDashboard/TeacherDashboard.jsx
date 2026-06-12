import "./TeacherDashboard.css";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";

import TeacherStatCard from "../../components/TeacherStatCard/TeacherStatCard";

import TeacherAttendanceChart from "../../components/TeacherAttendanceChart/TeacherAttendanceChart";
import TeacherPerformanceChart from "../../components/TeacherPerformanceChart/TeacherPerformanceChart";

import TeacherTimetable from "../../components/TeacherTimetable/TeacherTimetable";
import TeacherActivity from "../../components/TeacherActivity/TeacherActivity";
import TeacherNotifications from "../../components/TeacherNotifications/TeacherNotifications";
import TeacherAIAssistant from "../../components/TeacherAIAssistant/TeacherAIAssistant";

import {
  teacherStats,
} from "../../data/teacherDashboardData";

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard-layout">
      <TeacherSidebar />

      <main className="teacher-dashboard-main">
        <TeacherHeader />

        {/* Welcome Section */}

        <section className="teacher-welcome-section">
          <h1>Welcome Back, Sarah!</h1>

          <p>
            Here's what's happening in your classes today
          </p>
        </section>

        {/* Stats */}

        <section className="teacher-stats-grid">
          {teacherStats.map((stat) => (
            <TeacherStatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              subtitle={stat.subtitle}
              change={stat.change}
              trend={stat.trend}
              icon={stat.icon}
            />
          ))}
        </section>

        {/* Charts */}

        <section className="teacher-charts-grid">
          <TeacherAttendanceChart />

          <TeacherPerformanceChart />
        </section>

        {/* Bottom Section */}

        <section className="teacher-bottom-grid">
          <TeacherTimetable />

          <div className="teacher-right-column">
            <TeacherActivity />

            <TeacherNotifications />

            <TeacherAIAssistant />
          </div>
        </section>
      </main>
    </div>
  );
}

export default TeacherDashboard;