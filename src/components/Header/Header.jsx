import "./Header.css";
import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="header">

      {/* Search */}

      <div className="header-search-box">
        <Search
          size={24}
          className="header-search-icon"
        />

        <input
          type="text"
          placeholder="Search....../"
        />
      </div>

      {/* Right Side */}

      <div className="header-right">

        <div className="notification">
          <Bell size={24} />
        </div>

        <div className="profile">

          <div className="avatar">
            SJ
          </div>

          <div className="profile-info">
            <h4>Sarah Johnson</h4>
            <p>Teacher</p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;