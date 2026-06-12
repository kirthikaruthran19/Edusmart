import "./StudentTable.css";

import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";

import { studentPageData } from "../../data/studentPageData";
import StudentRow from "../StudentRow/StudentRow";

function StudentTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] =
    useState("All Classes");

  const [showDropdown, setShowDropdown] =
    useState(false);

  const classes = [
    "All Classes",
    ...new Set(
      studentPageData.map(
        (student) => student.className
      )
    ),
  ];

  const filteredStudents = studentPageData.filter(
    (student) => {
      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        student.studentId
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesClass =
        selectedClass === "All Classes" ||
        student.className === selectedClass;

      return matchesSearch && matchesClass;
    }
  );

  return (
    <div className="students-table-card">
      <div className="students-toolbar">
        <div className="students-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <div className="class-dropdown">
          <button
            className="students-filter-btn"
            onClick={() =>
              setShowDropdown(!showDropdown)
            }
          >
            <Filter size={18} />

            <span>{selectedClass}</span>

            <ChevronDown size={18} />
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              {classes.map((className) => (
                <div
                  key={className}
                  className={`dropdown-item ${
                    selectedClass === className
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedClass(className);
                    setShowDropdown(false);
                  }}
                >
                  {className}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="students-table-header">
        <div>STUDENT</div>
        <div>CLASS</div>
        <div>ATTENDANCE %</div>
        <div>PERFORMANCE</div>
      </div>

      <div className="students-table-body">
        {filteredStudents.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentTable;