import "./FeeStructure.css";
import { feeCategories } from "../../data/feesData";
import { Layers3, Pencil, Trash2 } from "lucide-react";

const FeeStructure = () => {
  return (
    <div className="fee-structure">
      <div className="section-header">
        <h2>Fee Categories</h2>
        <p>Define and manage school fee categories</p>
      </div>

      <div className="fee-grid">
        {feeCategories.map((fee) => (
          <div className="fee-card" key={fee.id}>
            <div className="fee-card-top">
              <div className="fee-info">
                <div className="fee-icon">
                  <Layers3 size={22} />
                </div>

                <div>
                  <h3>{fee.title}</h3>
                  <span>{fee.grade}</span>
                </div>
              </div>

              <div className="fee-actions">
                <Pencil size={20} />
                <Trash2 size={20} />
              </div>
            </div>

            <div className="fee-card-bottom">
              <h2>${fee.amount.toLocaleString()}</h2>

              <span
                className={
                  fee.frequency === "Annual"
                    ? "fee-badge annual"
                    : "fee-badge quarterly"
                }
              >
                {fee.frequency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeStructure;