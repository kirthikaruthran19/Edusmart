import "./AttendanceFilters.css";

import {
  Users,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";

function AttendanceFilters({
  onClassChange,
  onDateChange,
  totalStudents = 32,
}) {
  const [showClassDropdown, setShowClassDropdown] =
    useState(false);

  const [showDateDropdown, setShowDateDropdown] =
    useState(false);

  const [selectedClass, setSelectedClass] =
    useState("Class 10-A Mathematics");

  const [selectedDate, setSelectedDate] =
    useState("Today");

  const wrapperRef = useRef(null);

  const classes = [
    "Class 10-A Mathematics",
    "Class 10-B Mathematics",
    "Class 10-C Advanced Algebra",
    "Class 10-D Statistics",
  ];

  const dates = [
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setShowClassDropdown(false);
        setShowDateDropdown(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleClassSelect = (item) => {
    setSelectedClass(item);
    setShowClassDropdown(false);

    if (onClassChange) {
      onClassChange(item);
    }
  };

  const handleDateSelect = (item) => {
    setSelectedDate(item);
    setShowDateDropdown(false);

    if (onDateChange) {
      onDateChange(item);
    }
  };

  return (
    <div
      className="attendance-filters"
      ref={wrapperRef}
    >
      {/* Class Filter */}

      <div className="filter-dropdown-wrapper">
        <div
          className={`filter-select ${
            showClassDropdown ? "active" : ""
          }`}
          onClick={() => {
            setShowClassDropdown(
              !showClassDropdown
            );
            setShowDateDropdown(false);
          }}
        >
          <Users size={20} />
          <span>{selectedClass}</span>
          <ChevronDown size={18} />
        </div>

        {showClassDropdown && (
          <div className="attendance-dropdown">
            {classes.map((item) => (
              <div
                key={item}
                className={`dropdown-item ${
                  selectedClass === item
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  handleClassSelect(item)
                }
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Date Filter */}

      <div className="filter-dropdown-wrapper">
        <div
          className={`filter-select ${
            showDateDropdown ? "active" : ""
          }`}
          onClick={() => {
            setShowDateDropdown(
              !showDateDropdown
            );
            setShowClassDropdown(false);
          }}
        >
          <CalendarDays size={20} />
          <span>{selectedDate}</span>
          <ChevronDown size={18} />
        </div>

        {showDateDropdown && (
          <div className="attendance-dropdown">
            {dates.map((item) => (
              <div
                key={item}
                className={`dropdown-item ${
                  selectedDate === item
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  handleDateSelect(item)
                }
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Student Count */}

      <div className="student-count">
        {totalStudents} Students
      </div>
    </div>
  );
}

export default AttendanceFilters;