import "./Subjects.css";
import { subjectsData } from "./subjectsData";

import {
  Search,
  Filter,
  Pencil,
  Trash2,
} from "lucide-react";

const Subjects = () => {
  return (
    <div className="subjects-page">

      <div className="subject-toolbar">

        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search by name or ID..."
          />
        </div>

        <button className="filter-btn">
          <Filter size={18} />
          All Grade
        </button>

      </div>

      <div className="subjects-table-wrapper">

        <table className="subjects-table">

          <thead>
            <tr>
              <th>SUBJECT NAME</th>
              <th>CODE</th>
              <th>TEACHER</th>
              <th>HRS/WK</th>
              <th>GRADE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {subjectsData.map((item) => (
              <tr key={item.id}>

                <td>{item.subject}</td>

                <td>
                  <span className="code-badge">
                    {item.code}
                  </span>
                </td>

                <td>
                  <span className="teacher-badge">
                    {item.teacher}
                  </span>
                </td>

                <td>
                  <span className="hours-badge">
                    ● {item.hours}
                  </span>
                </td>

                <td>{item.grade}</td>

                <td>
                  <div className="actions">
                    <Pencil size={18} />

                    <Trash2
                      size={18}
                      color="red"
                    />
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Subjects;