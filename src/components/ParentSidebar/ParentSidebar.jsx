import "./ParentSidebar.css";

import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

function ParentSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any saved login data if needed
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/parent-dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Attendance",
      path: "/parent-attendance",
      icon: <CalendarDays size={20} />,
    },
    {
      name: "Assignments",
      path: "/parent-assignments",
      icon: <ClipboardList size={20} />,
    },
    {
      name: "Exam Results",
      path: "/parent-exam-results",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Messages",
      path: "/parent-messages",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "Settings",
      path: "/parent-settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="parent-sidebar">
      <div className="parent-logo">
        <h2>EduSync</h2>
        <span>Parent Portal</span>
      </div>

      <nav className="parent-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "parent-nav-link active"
                : "parent-nav-link"
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <button
        className="parent-logout-btn"
        onClick={handleLogout}
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}

export default ParentSidebar;