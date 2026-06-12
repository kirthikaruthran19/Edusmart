import "./CreateAssignmentModal.css";

function CreateAssignmentModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="assignment-modal">

        <h2>Create New Assignment</h2>

        <div className="form-group">
          <label>Assignment title</label>
          <input
            type="text"
            placeholder="eg midterm maths"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Max Score</label>
            <input
              type="number"
              placeholder="Maths"
            />
          </div>

          <div className="form-group">
            <label>Class</label>
            <input
              type="text"
              placeholder="eg 10A"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="modal-actions">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button className="create-btn">
            Create Assignment
          </button>
        </div>

      </div>
    </div>
  );
}

export default CreateAssignmentModal;