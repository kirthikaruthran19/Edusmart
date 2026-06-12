import "./TeacherSecuritySettings.css";

import { useState } from "react";

function TeacherSecuritySettings() {
  const [passwords, setPasswords] =
    useState({
      current: "",
      newPassword: "",
      confirmPassword: "",
    });

  const handleChange = (
    field,
    value
  ) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdatePassword =
    () => {
      if (
        passwords.newPassword !==
        passwords.confirmPassword
      ) {
        alert(
          "Passwords do not match"
        );
        return;
      }

      alert(
        "Password Updated Successfully"
      );

      setPasswords({
        current: "",
        newPassword: "",
        confirmPassword: "",
      });
    };

  return (
    <div className="security-card">
      <h2>Security</h2>

      <div className="security-grid">
        <div className="form-group">
          <label>
            Current Password
          </label>

          <input
            type="password"
            value={passwords.current}
            onChange={(e) =>
              handleChange(
                "current",
                e.target.value
              )
            }
          />
        </div>

        <div className="form-group">
          <label>
            New Password
          </label>

          <input
            type="password"
            value={
              passwords.newPassword
            }
            onChange={(e) =>
              handleChange(
                "newPassword",
                e.target.value
              )
            }
          />
        </div>

        <div className="form-group">
          <label>
            Confirm Password
          </label>

          <input
            type="password"
            value={
              passwords.confirmPassword
            }
            onChange={(e) =>
              handleChange(
                "confirmPassword",
                e.target.value
              )
            }
          />
        </div>
      </div>

      <div className="save-wrapper">
        <button
          className="update-password-btn"
          onClick={
            handleUpdatePassword
          }
        >
          Update Password
        </button>
      </div>
    </div>
  );
}

export default TeacherSecuritySettings;