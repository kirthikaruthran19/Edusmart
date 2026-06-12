import { useState, useEffect } from "react";
import "./Documents.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import DocumentStats from "../../components/DocumentStats/DocumentStats";
import DocumentTabs from "../../components/DocumentTabs/DocumentTabs";
import DocumentSearch from "../../components/DocumentSearch/DocumentSearch";
import DocumentList from "../../components/DocumentList/DocumentList";
import CertificateCards from "../../components/CertificateCards/CertificateCards";

import documentsData from "../../data/documentsData";

const Documents = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    setDocuments(documentsData);
  }, []);

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.student.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === "All" ||
      doc.tag === selectedType ||
      doc.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="documents-layout">
      <Sidebar />

      <div className="documents-main">
        <Header />

        <div className="documents-content">

          {/* Header */}
          <div className="documents-header">
            <div className="documents-title">
              <h1>Documents</h1>
              <p>
                Manage student records, certificates and uploaded files
              </p>
            </div>

            <button className="export-btn">
              Export Excel
            </button>
          </div>

          {/* Stats */}
          <DocumentStats />

          {/* Tabs */}
          <DocumentTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Search & Filter */}
          <DocumentSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />

          {/* Content */}
          {activeTab === "certificates" ? (
            <CertificateCards />
          ) : (
            <DocumentList
              documents={filteredDocs}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default Documents;