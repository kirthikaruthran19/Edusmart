import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  CalendarCheck,
  IndianRupee,
  MessageSquare,
  BarChart3,
  Folder,
  Settings,
  ClipboardCheck,
  LogOut,
  X,
} from "lucide-react";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.clear(); // optional
      navigate("/login");
    }
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          className="close-sidebar"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <div>
          <div className="logo">
            <h2>EduSmart</h2>
          </div>

          <ul className="menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <LayoutDashboard size={22} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <Users size={22} />
                <span>User Management</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/academic"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <BookOpen size={22} />
                <span>Academic</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/attendance"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <CalendarCheck size={22} />
                <span>Attendance</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/fees"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <IndianRupee size={22} />
                <span>Fees</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/communication"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare size={22} />
                <span>Communication</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 size={22} />
                <span>Reports</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <Folder size={22} />
                <span>Documents</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <Settings size={22} />
                <span>Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/approvals"
                className={({ isActive }) =>
                  isActive ? "menu-link active-link" : "menu-link"
                }
                onClick={() => setIsOpen(false)}
              >
                <ClipboardCheck size={22} />
                <span>Approvals</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-profile">
            <div className="profile-avatar">SJ</div>

            <div className="profile-details">
              <h4>Sarah Johnson</h4>
              <p>Teacher</p>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <LogOut size={22} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;