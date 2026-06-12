import { useState } from "react";
import "./AddClassModal.css";

const AddClassModal = ({ onClose, addClass }) => {
  const [formData, setFormData] = useState({
    title: "",
    room: "",
    students: 0,
    grade: "",
    teacher: "",
    schedule: "Mon - Fri 8:00-15:00",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.grade ||
      !formData.room ||
      !formData.teacher
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newClass = {
      title: `${formData.grade} - Section ${formData.section || "A"}`,
      room: formData.room,
      students: 0,
      grade: formData.grade,
      teacher: formData.teacher,
      schedule: formData.schedule,
    };

    addClass(newClass);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Add New Class</h2>

        <div className="form-row">
          <div className="form-group">
            <label>Grade</label>

            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
            >
              <option value="">Select Grade</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
            </select>
          </div>

          <div className="form-group">
            <label>Section</label>

            <input
              type="text"
              name="section"
              placeholder="A, B, C..."
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Room</label>

          <input
            type="text"
            name="room"
            placeholder="eg Room 101"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Class Teacher</label>

          <input
            type="text"
            name="teacher"
            placeholder="Teacher Name"
            onChange={handleChange}
          />
        </div>

        <div className="modal-buttons">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSubmit}
          >
            Add Class
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddClassModal;