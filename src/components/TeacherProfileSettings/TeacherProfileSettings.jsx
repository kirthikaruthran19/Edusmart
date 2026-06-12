import "./TeacherProfileSettings.css";

function TeacherProfileSettings({
  profile,
  setProfile,
  onSave,
}) {
  const handleChange = (
    field,
    value
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">
          SJ
        </div>

        <div>
          <h2>
            {profile.fullName}
          </h2>

          <p>
            {profile.department}
          </p>

          <span>
            Joined August 2019
          </span>
        </div>
      </div>

      <div className="profile-grid">
        <div className="form-group">
          <label>
            Full Name
          </label>

          <input
            type="text"
            value={profile.fullName}
            onChange={(e) =>
              handleChange(
                "fullName",
                e.target.value
              )
            }
          />
        </div>

        <div className="form-group">
          <label>
            Email Address
          </label>

          <input
            type="email"
            value={profile.email}
            onChange={(e) =>
              handleChange(
                "email",
                e.target.value
              )
            }
          />
        </div>

        <div className="form-group">
          <label>
            Phone Number
          </label>

          <input
            type="text"
            value={profile.phone}
            onChange={(e) =>
              handleChange(
                "phone",
                e.target.value
              )
            }
          />
        </div>

        <div className="form-group">
          <label>
            Subject
          </label>

          <input
            type="text"
            value={profile.subject}
            onChange={(e) =>
              handleChange(
                "subject",
                e.target.value
              )
            }
          />
        </div>
      </div>

      <div className="form-group">
        <label>
          Department
        </label>

        <input
          type="text"
          value={profile.department}
          onChange={(e) =>
            handleChange(
              "department",
              e.target.value
            )
          }
        />
      </div>

      <div className="form-group">
        <label>Bio</label>

        <textarea
          rows="4"
          value={profile.bio}
          onChange={(e) =>
            handleChange(
              "bio",
              e.target.value
            )
          }
        />
      </div>

      <div className="save-wrapper">
        <button
          className="save-btn"
          onClick={onSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default TeacherProfileSettings;