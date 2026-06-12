import "./AssignmentFilters.css";

import {
  Search,
  Filter,
  ChevronDown,
  Plus,
} from "lucide-react";

import { useState } from "react";

function AssignmentFilters({
  searchTerm,
  setSearchTerm,
  selectedClass,
  setSelectedClass,
  selectedStatus,
  setSelectedStatus,
  onCreateAssignment,
}) {
  const [showClassDropdown, setShowClassDropdown] =
    useState(false);

  const [showStatusDropdown, setShowStatusDropdown] =
    useState(false);

  const classes = [
    "All Classes",
    "10-A",
    "10-B",
    "10-C",
    "10-D",
  ];

  const statuses = [
    "All Status",
    "Active",
    "Needs Grading",
    "Completed",
  ];

  return (
    <div className="assignment-filter-container">

      <div className="assignment-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search assignments..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>

      <div className="assignment-filter-right">

        {/* Class */}

        <div className="assignment-dropdown-wrapper">

          <button
            className="assignment-dropdown-btn"
            onClick={() => {
              setShowClassDropdown(
                !showClassDropdown
              );
              setShowStatusDropdown(false);
            }}
          >
            <Filter size={18} />

            {selectedClass}

            <ChevronDown size={18} />
          </button>

          {showClassDropdown && (
            <div className="assignment-dropdown">
              {classes.map((item) => (
                <div
                  key={item}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedClass(item);
                    setShowClassDropdown(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status */}

        <div className="assignment-dropdown-wrapper">

          <button
            className="assignment-dropdown-btn"
            onClick={() => {
              setShowStatusDropdown(
                !showStatusDropdown
              );
              setShowClassDropdown(false);
            }}
          >
            {selectedStatus}

            <ChevronDown size={18} />
          </button>

          {showStatusDropdown && (
            <div className="assignment-dropdown">
              {statuses.map((item) => (
                <div
                  key={item}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedStatus(item);
                    setShowStatusDropdown(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="create-assignment-btn"
          onClick={onCreateAssignment}
        >
          <Plus size={20} />
          Create Assignment
        </button>

      </div>
    </div>
  );
}

export default AssignmentFilters;