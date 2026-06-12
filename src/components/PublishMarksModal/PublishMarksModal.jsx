import "./PublishMarksModal.css";
import { CheckCircle } from "lucide-react";

function PublishMarksModal({
  isOpen,
  onClose,
  onPublish,
}) {
  if (!isOpen) return null;

  return (
    <div className="publish-overlay">
      <div className="publish-modal">
        <h2>
          Publish Unit Results?
        </h2>

        <p>
          Students will be able to view
          their marks immediately.
        </p>

        <div className="publish-features">
          <div>
            <CheckCircle size={18} />
            Student marks visible
          </div>

          <div>
            <CheckCircle size={18} />
            Results become final
          </div>

          <div>
            <CheckCircle size={18} />
            Parents can view reports
          </div>
        </div>

        <div className="publish-actions">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="publish-btn"
            onClick={onPublish}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublishMarksModal;