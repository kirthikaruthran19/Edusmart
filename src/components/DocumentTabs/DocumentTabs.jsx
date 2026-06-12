import "./DocumentTabs.css";

const DocumentTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="document-tabs">

      <button
        className={
          activeTab === "all"
            ? "tab-btn active"
            : "tab-btn"
        }
        onClick={() => setActiveTab("all")}
      >
        All Documents
      </button>

      <button
        className={
          activeTab === "records"
            ? "tab-btn active"
            : "tab-btn"
        }
        onClick={() => setActiveTab("records")}
      >
        Student Records
      </button>

      <button
        className={
          activeTab === "certificates"
            ? "tab-btn active"
            : "tab-btn"
        }
        onClick={() => setActiveTab("certificates")}
      >
        Certificates
      </button>

    </div>
  );
};

export default DocumentTabs;