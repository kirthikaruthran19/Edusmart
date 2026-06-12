import "./Timetable.css";

import {
  Search,
  Filter,
  Plus,
  User,
  MapPin,
} from "lucide-react";

const Timetable = () => {
  return (
    <div className="timetable-page">

      {/* Search & Filter */}

      <div className="toolbar">

        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search by name or ID..."
          />
        </div>

        <button className="filter-btn">
          <Filter size={18} />
          Grade 3
        </button>

      </div>

      <div className="divider"></div>

      {/* Timetable Board */}

      <div className="timetable-board">

        <div className="table-header">
          <div>TIME</div>
          <div>MONDAY</div>
          <div>TUESDAY</div>
          <div>WEDNESDAY</div>
          <div>THURSDAY</div>
          <div>FRIDAY</div>
        </div>

        {/* Row 1 */}

        <div className="table-row">

          <div className="time-cell">
            08:00 AM
            <br />
            09:00 AM
          </div>

          <div className="subject-card blue">
            <h4>Mathematics</h4>
            <p><User size={14} /> Mr. Anderson</p>
            <p><MapPin size={14} /> Room 101</p>
          </div>

          <div className="subject-card green">
            <h4>Physics</h4>
            <p><User size={14} /> Dr. Banner</p>
            <p><MapPin size={14} /> Lab 3</p>
          </div>

          <div className="subject-card purple">
            <h4>English Lit.</h4>
            <p><User size={14} /> Mrs. Smith</p>
            <p><MapPin size={14} /> Room 205</p>
          </div>

          <div className="subject-card orange">
            <h4>World History</h4>
            <p><User size={14} /> Mr. Jones</p>
            <p><MapPin size={14} /> Room 110</p>
          </div>

          <div className="subject-card blue">
            <h4>Mathematics</h4>
            <p><User size={14} /> Mr. Anderson</p>
            <p><MapPin size={14} /> Room 101</p>
          </div>

        </div>

        {/* Row 2 */}

        <div className="table-row">

          <div className="time-cell">
            09:00 AM
            <br />
            10:00 AM
          </div>

          <div className="subject-card purple">
            <h4>English Lit.</h4>
            <p><User size={14} /> Mrs. Smith</p>
          </div>

          <div className="subject-card red">
            <h4>Physics</h4>
            <p><User size={14} /> Dr. Banner</p>

            <span className="warning">
              Teacher Overlap
            </span>
          </div>

          <div className="subject-card green">
            <h4>Biology</h4>
            <p><User size={14} /> Dr. Stark</p>
          </div>

          <div className="subject-card blue">
            <h4>Mathematics</h4>
            <p><User size={14} /> Mr. Anderson</p>
          </div>

          <div className="subject-card orange">
            <h4>Geography</h4>
            <p><User size={14} /> Mr. Jones</p>
          </div>

        </div>

        {/* Lunch Break */}

        <div className="lunch-break">
          LUNCH BREAK
        </div>

        {/* Row 3 */}

        <div className="table-row">

          <div className="time-cell">
            10:30 AM
            <br />
            11:30 AM
          </div>

          <div className="subject-card green">
            <h4>Chemistry</h4>
            <p><User size={14} /> Dr. Pym</p>
          </div>

          <div className="subject-card orange">
            <h4>World History</h4>
            <p><User size={14} /> Mr. Jones</p>
          </div>

          <div className="add-card">
            <Plus size={24} />
            <span>Add Period</span>
          </div>

          <div className="subject-card purple">
            <h4>English Lit.</h4>
            <p><User size={14} /> Mrs. Smith</p>
          </div>

          <div className="subject-card green">
            <h4>Physics</h4>
            <p><User size={14} /> Dr. Banner</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Timetable;