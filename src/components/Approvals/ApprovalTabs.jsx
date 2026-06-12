import "./ApprovalTabs.css";

function ApprovalTabs({ activeTab, setActiveTab }) {
  const tabs = ["All", "Pending", "Approved", "Rejected"];

  return (
    <div className="approval-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default ApprovalTabs;