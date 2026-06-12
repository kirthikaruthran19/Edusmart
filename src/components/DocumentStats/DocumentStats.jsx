import "./DocumentStats.css";
import { documentStats } from "../../data/documentsData";

const DocumentStats = () => {
  return (
    <div className="document-stats">
      {documentStats.map((item) => (
        <div className="stat-card" key={item.id}>
          <h2>{item.count}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DocumentStats;