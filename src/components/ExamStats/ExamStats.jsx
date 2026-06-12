import "./ExamStats.css";
import { BookOpen } from "lucide-react";

function ExamStats({ students }) {
  const totals = students.map(
    (student) =>
      student.mathematics +
      student.algebra +
      student.statistics
  );

  const averageScore =
    totals.length > 0
      ? Math.round(
          totals.reduce((a, b) => a + b, 0) / totals.length
        )
      : 0;

  const highestScore =
    totals.length > 0
      ? Math.max(...totals)
      : 0;

  const passedStudents = totals.filter(
    (score) => score >= 120
  ).length;

  const passRate =
    totals.length > 0
      ? Math.round(
          (passedStudents / totals.length) * 100
        )
      : 0;

  const stats = [
    {
      value: `${averageScore}/300`,
      title: "Average Score",
      subtitle: "Across all students",
    },
    {
      value: `${highestScore}/300`,
      title: "Highest Score",
      subtitle: "Top performer",
    },
    {
      value: `${passRate}%`,
      title: "Pass Rate",
      subtitle: "Students passed",
    },
  ];

  return (
    <div className="exam-stats">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="exam-stat-card"
        >
          <div className="exam-stat-icon">
            <BookOpen size={22} />
          </div>

          <h3>{stat.value}</h3>

          <h4>{stat.title}</h4>

          <p>{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default ExamStats;