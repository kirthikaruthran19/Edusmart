import "./SchoolProfile.css";
import { Upload } from "lucide-react";
import { schoolProfile } from "../../data/settingsData";

const SchoolProfile = () => {
  return (
    <div className="school-profile-card">

      <div className="profile-header">
        <h2>School Profile</h2>
        <p>Manage your institution details and branding</p>
      </div>

      <div className="logo-section">

        <div className="logo-preview">
          LOGO
        </div>

        <button className="upload-btn">
          <Upload size={18} />
          Upload Logo
        </button>

      </div>

      <div className="profile-form">

        <div className="form-group">
          <label>School Name</label>
          <input
            type="text"
            defaultValue={schoolProfile.schoolName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            defaultValue={schoolProfile.email}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            defaultValue={schoolProfile.phone}
          />
        </div>

        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            defaultValue={schoolProfile.website}
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <textarea
            rows="4"
            defaultValue={schoolProfile.address}
          />
        </div>

        <div className="form-group">
          <label>Board / Affiliation</label>
          <input
            type="text"
            defaultValue={schoolProfile.board}
          />
        </div>

        <div className="form-group">
          <label>Established Year</label>
          <input
            type="text"
            defaultValue={schoolProfile.establishedYear}
          />
        </div>

      </div>

      <div className="profile-footer">
        <button className="save-btn">
          Save Changes
        </button>
      </div>

    </div>
  );
};

export default SchoolProfile;