import "./Exams.css";
import { examsData } from "./examsData";
import { useState } from "react";

import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Filter,
  ChevronDown,
  ChevronUp,
  GraduationCap,
} from "lucide-react";

const Exams = () => {
  const [expandedExam, setExpandedExam] = useState(1);

  const toggleExam = (id) => {
    setExpandedExam(expandedExam === id ? null : id);
  };

  return (
    <div className="exams-page">

      {/* Header */}

      <div className="exam-header">

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search exam..."
          />
        </div>

        <div className="exam-actions">
          

          
        </div>

      </div>

      {/* Exam Cards */}

      <div className="exam-list">

        {examsData.map((exam) => (
          <div
            className="exam-card"
            key={exam.id}
          >
            <div className="exam-card-top">

              <div className="exam-left">

                <div className="exam-icon">
                  <GraduationCap size={24} />
                </div>

                <div className="exam-info">

                  <div className="exam-title-row">

                    <h3>{exam.examName}</h3>

                    <span
                      className={`status ${exam.status}`}
                    >
                      {exam.status}
                    </span>

                    {exam.passed && (
                      <span className="exam-passed">
                        {exam.passed}
                      </span>
                    )}

                  </div>

                  <div className="exam-meta">
                    {exam.date} • {exam.grade} • {exam.subject}
                  </div>

                </div>

              </div>

              <div className="exam-card-actions">

                <Pencil size={20} />

                <Trash2
                  size={20}
                  color="red"
                />

                {expandedExam === exam.id ? (
                  <ChevronUp
                    size={20}
                    onClick={() => toggleExam(exam.id)}
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    onClick={() => toggleExam(exam.id)}
                  />
                )}

              </div>

            </div>

            {/* Result Table */}

            {expandedExam === exam.id &&
              exam.students &&
              exam.students.length > 0 && (
                <div className="exam-table-wrapper">

                  <table className="exam-table">

                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Student</th>
                        <th>Marks</th>
                        <th>%</th>
                        <th>Grade</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {exam.students.map(
                        (student, index) => (
                          <tr key={student.id}>
                            <td>{index + 1}</td>

                            <td>{student.name}</td>

                            <td>
                              <strong>
                                {student.marks}
                              </strong>
                              /100
                            </td>

                            <td>
                              {student.percentage}%
                            </td>

                            <td>
                              <span className="grade-pill">
                                {student.grade}
                              </span>
                            </td>

                            <td>
                              <span
                                className={
                                  student.result ===
                                  "Pass"
                                    ? "pass-pill"
                                    : "fail-pill"
                                }
                              >
                                {student.result}
                              </span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>

                  </table>

                </div>
              )}
          </div>
        ))}

      </div>

    </div>
  );
};

export default Exams;