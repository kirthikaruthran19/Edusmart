import MonthlyCollectionChart from "./MonthlyCollectionChart";
import FeeCategoryChart from "./FeeCategoryChart";

import { financialStats } from "../../data/reportsData";

export default function FinancialReports() {
  return (
    <>
      <div className="academic-stats-grid">
        {financialStats.map((item) => (
          <div className="academic-card" key={item.id}>
            <div>
              <h2>{item.value}</h2>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="academic-chart-grid">
        <div className="academic-chart-card">
          <h2>Monthly Fee Collection</h2>
          <MonthlyCollectionChart />
        </div>

        <div className="academic-chart-card">
          <h2>Fee By Category</h2>
          <FeeCategoryChart />
        </div>
      </div>
    </>
  );
}