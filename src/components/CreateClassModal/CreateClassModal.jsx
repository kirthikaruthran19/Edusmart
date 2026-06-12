import "./CreateClassModal.css";

function CreateClassModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="create-class-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Create New Class</h2>

        <form>
          <div className="modal-row">

            <div className="form-group">
              <label>Class Name</label>

              <input
                type="text"
                placeholder="Maths"
              />
            </div>

            <div className="form-group">
              <label>Grade / Section</label>

              <input
                type="text"
                placeholder="eg 10A"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Subject</label>

            <input
              type="text"
              placeholder="eg midterm maths"
            />
          </div>

          <div className="form-group">
            <label>Schedule</label>

            <input
              type="text"
              placeholder="dd-mm-yyyy"
            />
          </div>

          <div className="modal-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="create-btn"
            >
              Create Class
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateClassModal;