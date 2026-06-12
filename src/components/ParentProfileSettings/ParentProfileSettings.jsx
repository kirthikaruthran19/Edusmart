import "./ParentProfileSettings.css";

function ParentProfileSettings({
  profileData,
}) {
  return (
    <div className="parent-profile-card">
      <div className="profile-card-header">
        <h3>Profile Information</h3>
        <p>Parent and Student Details</p>
      </div>

      <div className="profile-section">
        <h4>Parent Details</h4>

        <div className="profile-grid">
          <div className="profile-field">
            <label>Parent Name</label>
            <input
              type="text"
              value={profileData.parentName}
              readOnly
            />
          </div>

          <div className="profile-field">
            <label>Email</label>
            <input
              type="email"
              value={profileData.email}
              readOnly
            />
          </div>

          <div className="profile-field">
            <label>Phone Number</label>
            <input
              type="text"
              value={profileData.phone}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h4>Student Details</h4>

        <div className="profile-grid">
          <div className="profile-field">
            <label>Student Name</label>
            <input
              type="text"
              value={profileData.student.name}
              readOnly
            />
          </div>

          <div className="profile-field">
            <label>Class</label>
            <input
              type="text"
              value={profileData.student.class}
              readOnly
            />
          </div>

          <div className="profile-field">
            <label>Section</label>
            <input
              type="text"
              value={profileData.student.section}
              readOnly
            />
          </div>

          <div className="profile-field">
            <label>Roll Number</label>
            <input
              type="text"
              value={profileData.student.rollNo}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentProfileSettings;