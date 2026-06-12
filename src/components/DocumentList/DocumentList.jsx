import "./DocumentList.css";

import {
  FileText,
  Download,
  Trash2,
} from "lucide-react";



const DocumentList = ({ documents, handleDelete }) => {
  return (
    <div className="document-list">

      {documents.map((doc) => (
        <div
          className="document-card"
          key={doc.id}
        >
          <div className="document-left">

            <div className="file-icon">
              <FileText size={22} />
            </div>

            <div className="document-info">
              <h4>{doc.title}</h4>

              <div className="document-meta">
                <span>{doc.student}</span>
                <span>{doc.date}</span>
                <span>{doc.size}</span>
                <span>{doc.uploadedBy}</span>
              </div>
            </div>

          </div>

          <div className="document-right">

            <span className="document-tag">
              {doc.tag}
            </span>

            <button className="action-btn">
              <Download size={18} />
            </button>

            <button
              className="action-btn delete"
              onClick={() => handleDelete(doc.id)}
            >
              <Trash2 size={18} />
            </button>

          </div>
        </div>
      ))}

    </div>
  );
};

export default DocumentList;