import "./AcademicReports.css";

import AcademicStats from "./AcademicStats";
import SubjectPerformanceChart from "./SubjectPerformanceChart";
import PassFailChart from "./PassFailChart";

import { academicStats } from "../../data/reportsData";

export default function AcademicReports() {
  return (
    <>
      <div className="academic-stats-grid">
        {academicStats.map((item) => (
          <AcademicStats key={item.id} {...item} />
        ))}
      </div>

      <div className="academic-chart-grid">
        <div className="academic-chart-card">
          <h2>Subject Wise Average Performance</h2>
          <SubjectPerformanceChart />
        </div>

        <div className="academic-chart-card">
          <h2>Pass/Fail Rate By Grade</h2>
          <PassFailChart />
        </div>
      </div>
    </>
  );
}