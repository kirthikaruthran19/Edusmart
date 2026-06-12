import "./RolesPermissions.css";
import { permissions } from "../../data/settingsData";

const RolesPermissions = () => {
  return (
    <div className="roles-card">
      <div className="roles-header">
        <h2>Roles & Permissions</h2>
        <p>Manage access levels for different user roles</p>
      </div>

      <div className="roles-table-wrapper">
        <table className="roles-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Admin</th>
              <th>Teacher</th>
              <th>Staff</th>
              <th>Parent</th>
            </tr>
          </thead>

          <tbody>
            {permissions.map((item) => (
              <tr key={item.id}>
                <td>{item.module}</td>

                <td>
                  <input
                    type="checkbox"
                    checked={item.admin}
                    readOnly
                  />
                </td>

                <td>
                  <input
                    type="checkbox"
                    checked={item.teacher}
                    readOnly
                  />
                </td>

                <td>
                  <input
                    type="checkbox"
                    checked={item.staff}
                    readOnly
                  />
                </td>

                <td>
                  <input
                    type="checkbox"
                    checked={item.parent}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RolesPermissions;