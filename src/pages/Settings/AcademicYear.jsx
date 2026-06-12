import { useState } from "react";
import "./AcademicYear.css";

import { Plus, Users } from "lucide-react";
import { academicYears as initialYears } from "../../data/settingsData";

const AcademicYear = () => {
  const [years, setYears] = useState(initialYears);

  const [showModal, setShowModal] = useState(false);

  const [newYear, setNewYear] = useState({
    year: "",
    startDate: "",
    endDate: "",
  });

  const handleSaveYear = () => {
    if (
      !newYear.year ||
      !newYear.startDate ||
      !newYear.endDate
    ) {
      alert("Please fill all fields");
      return;
    }

    const yearData = {
      id: Date.now(),
      year: newYear.year,
      startDate: newYear.startDate,
      endDate: newYear.endDate,
      status: "Current",
    };

    const updatedYears = years.map((year) => ({
      ...year,
      status: "Past",
    }));

    setYears([yearData, ...updatedYears]);

    setNewYear({
      year: "",
      startDate: "",
      endDate: "",
    });

    setShowModal(false);
  };

  return (
    <div className="academic-years">

      {/* Header */}

      <div className="academic-years-header">
        <div>
          <h2>Academic Years</h2>
          <p>
            Manage school academic year calendar
          </p>
        </div>

        <button
          className="add-year-btn"
          onClick={() => setShowModal(true)}
        >
          <Plus size={20} />
          Add Year
        </button>
      </div>

      {/* Years List */}

      <div className="years-list">

        {years.map((year) => (
          <div
            className="year-row"
            key={year.id}
          >
            <div className="year-left">

              <div className="year-icon">
                <Users size={24} />
              </div>

              <div className="year-info">
                <h3>{year.year}</h3>

                <p>
                  {year.startDate} - {year.endDate}
                </p>
              </div>

            </div>

            <span
              className={
                year.status === "Current"
                  ? "year-status current"
                  : "year-status past"
              }
            >
              {year.status}
            </span>
          </div>
        ))}

      </div>

      {/* Modal */}

      {showModal && (
        <div className="academic-modal-overlay">

          <div className="academic-modal">

            <h2>New Academic Year</h2>

            <div className="academic-form">

              <div className="form-field">
                <label>Year Name</label>

                <input
                  type="text"
                  placeholder="eg 2026-2027"
                  value={newYear.year}
                  onChange={(e) =>
                    setNewYear({
                      ...newYear,
                      year: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-field">
                <label>Start Date</label>

                <input
                  type="date"
                  value={newYear.startDate}
                  onChange={(e) =>
                    setNewYear({
                      ...newYear,
                      startDate: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-field">
                <label>End Date</label>

                <input
                  type="date"
                  value={newYear.endDate}
                  onChange={(e) =>
                    setNewYear({
                      ...newYear,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>

            </div>

            <div className="academic-modal-actions">

              <button
                className="save-year-btn"
                onClick={handleSaveYear}
              >
                ✓ Save Year
              </button>

              <button
                className="cancel-year-btn"
                onClick={() => setShowModal(false)}
              >
                ✕ Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AcademicYear;