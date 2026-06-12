import "./ApprovalSearch.css";

function ApprovalSearch({ search, setSearch }) {
  return (
    <div className="approval-search">
      <input
        type="text"
        placeholder="Search approvals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default ApprovalSearch;