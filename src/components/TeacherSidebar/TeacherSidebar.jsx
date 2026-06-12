import "./TeacherSidebar.css";
import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    Users,
    CalendarCheck,
    BookOpen,
    ClipboardList,
    MessageSquare,
    Settings,
    GraduationCap,
} from "lucide-react";

function TeacherSidebar() {
    return (
        <aside className="teacher-sidebar">
            <div className="teacher-logo">
                <GraduationCap size={36} />
                <h2>EduSmart</h2>
            </div>

            <nav className="teacher-nav">
                <NavLink
                    to="/teacher-dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "teacher-nav-item active"
                            : "teacher-nav-item"
                    }
                >
                    <LayoutDashboard size={22} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/my-classes"
                    className={({ isActive }) =>
                        isActive
                            ? "teacher-nav-item active"
                            : "teacher-nav-item"
                    }
                >
                    <BookOpen size={22} />
                    My Classes
                </NavLink>

                <NavLink
                    to="/students"
                    className={({ isActive }) =>
                        isActive
                            ? "teacher-nav-item active"
                            : "teacher-nav-item"
                    }
                >
                    <Users size={22} />
                    Students
                </NavLink>

                <NavLink
                    to="/teacher-attendance"
                    className={({ isActive }) =>
                        isActive
                            ? "teacher-nav-item active"
                            : "teacher-nav-item"
                    }
                >
                    <CalendarCheck size={22} />
                    Attendance
                </NavLink>

                <NavLink
                    to="/teacher/assignments"
                    className={({ isActive }) =>
                        isActive
                            ? "teacher-nav-item active"
                            : "teacher-nav-item"
                    }
                >
                    <ClipboardList size={22} />
                    Assignment
                </NavLink>

                <NavLink
                    to="/teacher/exams-marks"
                    className={({ isActive }) =>
                        isActive
                            ? "teacher-nav-item active"
                            : "teacher-nav-item"
                    }
                >
                    <BookOpen size={22} />
                    Exams & Marks
                </NavLink>

                <NavLink
                    to="/messages"
                    className={({ isActive }) =>
                        isActive
                            ? "teacher-nav-item active"
                            : "teacher-nav-item"
                    }
                >
                    <MessageSquare size={22} />
                    Messages
                </NavLink>
            </nav>

            <div className="teacher-sidebar-footer">
                <div className="teacher-profile">
                    <img
                        src="https://i.pravatar.cc/100?img=5"
                        alt="Teacher"
                    />

                    <div>
                        <h4>Sarah Johnson</h4>
                        <span>Teacher</span>
                    </div>
                </div>

                <NavLink
                    to="/teacher-settings"
                    className="teacher-settings-btn"
                >
                    <Settings size={20} />
                    Settings
                </NavLink>
            </div>
        </aside>
    );
}

export default TeacherSidebar;