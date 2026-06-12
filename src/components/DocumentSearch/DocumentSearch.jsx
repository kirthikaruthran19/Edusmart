import "./DocumentSearch.css";
import { Search } from "lucide-react";

const DocumentSearch = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
}) => {
  return (
    <div className="document-search">

      <div className="search-box">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search Student or roll no....."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="All">All Types</option>
        <option value="Certificates">Certificates</option>
        <option value="Report Card">Report Card</option>
        <option value="ID Card">ID Card</option>
        <option value="Other">Other</option>
      </select>

    </div>
  );
};

export default DocumentSearch;