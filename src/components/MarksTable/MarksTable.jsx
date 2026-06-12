import "./MarksTable.css";

function MarksTable({
  students,
  activeUnit,
}) {
  const getGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A-";
    if (percentage >= 70) return "B+";
    if (percentage >= 60) return "B";
    return "C";
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return "#5b4cf0";
    if (percentage >= 70) return "#8b5cf6";
    if (percentage >= 60) return "#a16207";
    return "#dc2626";
  };

  return (
    <div className="marks-table-card">
      <table className="marks-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Mathematics</th>
            <th>Adv Algebra</th>
            <th>Statistics</th>
            <th>Performance</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => {
            const unitData =
              student[`unit${activeUnit}`];

            const total =
              unitData.mathematics +
              unitData.algebra +
              unitData.statistics;

            const percentage =
              (total / 300) * 100;

            const grade =
              getGrade(percentage);

            return (
              <tr key={student.id}>
                <td>
                  <div className="student-info">
                    <img
                      src={student.avatar}
                      alt={student.studentName}
                      className="student-avatar"
                    />

                    <div>
                      <h4>
                        {student.studentName}
                      </h4>

                      <p>
                        {student.rollNo}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="score-pill">
                    {unitData.mathematics}
                  </span>
                </td>

                <td>
                  <span className="score-pill">
                    {unitData.algebra}
                  </span>
                </td>

                <td>
                  <span className="score-pill">
                    {unitData.statistics}
                  </span>
                </td>

                <td>
                  <div className="performance">
                    <div className="performance-top">
                      <span className="grade">
                        Grade {grade}
                      </span>

                      <span>
                        {total}/300
                      </span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${percentage}%`,
                          background:
                            getProgressColor(
                              percentage
                            ),
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MarksTable;