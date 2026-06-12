import { useState } from "react";
import "./Approvals.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import ApprovalStats from "../../components/Approvals/ApprovalStats";
import ApprovalFilters from "../../components/Approvals/ApprovalFilters";
import ApprovalList from "../../components/Approvals/ApprovalList";

import {
  approvalRequests,
  approvalStats,
} from "../../data/approvalsData";

const Approvals = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filteredRequests = approvalRequests.filter((item) => {
    const tabMatch =
      activeTab === "all"
        ? true
        : item.status.toLowerCase() === activeTab;

    const searchMatch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return tabMatch && searchMatch;
  });

  return (
    <div className="approvals-layout">
      <Sidebar />

      <div className="approvals-main">
        <Header />

        <div className="approvals-content">

          <div className="approvals-header">
            <h1>Approvals</h1>

            <p>
              Review and manage approval requests
            </p>
          </div>

          <ApprovalStats stats={approvalStats} />

          <ApprovalFilters
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            search={search}
            setSearch={setSearch}
          />

          <ApprovalList requests={filteredRequests} />

        </div>
      </div>
    </div>
  );
};

export default Approvals;