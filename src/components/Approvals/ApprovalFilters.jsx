import "./ApprovalFilters.css";
import { Search, LayoutGrid } from "lucide-react";

function ApprovalFilters({
  activeTab,
  setActiveTab,
  search,
  setSearch,
}) {
  return (
    <>
      <div className="approval-tabs">
        <button
          className={
            activeTab === "all"
              ? "approval-tab active"
              : "approval-tab"
          }
          onClick={() => setActiveTab("all")}
        >
          <LayoutGrid size={18} />
          All Request
        </button>

        <button
          className={
            activeTab === "pending"
              ? "approval-tab active"
              : "approval-tab"
          }
          onClick={() => setActiveTab("pending")}
        >
          <LayoutGrid size={18} />
          Pending
        </button>

        <button
          className={
            activeTab === "approved"
              ? "approval-tab active"
              : "approval-tab"
          }
          onClick={() => setActiveTab("approved")}
        >
          Approved
        </button>

        <button
          className={
            activeTab === "rejected"
              ? "approval-tab active"
              : "approval-tab"
          }
          onClick={() => setActiveTab("rejected")}
        >
          Rejected
        </button>
      </div>

      <div className="approval-filters">
        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="status-dropdown"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </>
  );
}

export default ApprovalFilters;