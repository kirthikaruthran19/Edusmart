import "./ParentMarksTable.css";

import {
  Award,
  TrendingUp,
} from "lucide-react";

function ParentMarksTable({
  results,
}) {
  const average =
    results.length > 0
      ? Math.round(
          results.reduce(
            (acc, item) =>
              acc + item.marks,
            0
          ) / results.length
        )
      : 0;

  return (
    <div className="parent-marks-card">
      <div className="parent-marks-header">
        <div>
          <h3>Exam Results</h3>
          <p>Student Performance Overview</p>
        </div>

        <div className="average-score-box">
          <TrendingUp size={18} />
          Avg : {average}%
        </div>
      </div>

      <div className="marks-table-wrapper">
        <table className="parent-marks-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Exam</th>
              <th>Marks</th>
              <th>Total</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {results.map((item) => (
              <tr key={item.id}>
                <td>{item.subject}</td>

                <td>{item.exam}</td>

                <td>{item.marks}</td>

                <td>{item.total}</td>

                <td>
                  <span className="grade-badge">
                    <Award size={14} />
                    {item.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ParentMarksTable;