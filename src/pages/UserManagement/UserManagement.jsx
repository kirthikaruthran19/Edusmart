import "./UserManagement.css";
import {
    Search,
    Filter,
    Upload,
    Plus,
    Menu,
    Pencil,
    Trash2
} from "lucide-react";

import { useState } from "react";
import { students as initialStudents } from "../../data/studentsData";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

function UserManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [studentList, setStudentList] = useState(initialStudents);

    const [preview, setPreview] = useState(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [grade, setGrade] = useState("");
    const [section, setSection] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentPhone, setParentPhone] = useState("");
    const [status, setStatus] = useState("Active");

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleAddStudent = () => {
        if (!firstName || !email || !grade) {
            alert("Please fill required fields");
            return;
        }

        const newStudent = {
            id: `STU${Date.now()}`,
            name: `${firstName} ${lastName}`,
            email,
            dob,
            avatar:
                preview ||
                `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1}`,
            grade: `${grade} ${section}`,
            guardian: parentName,
            relation: "Parent",
            status,
            joined: new Date().toLocaleDateString(),
            phone,
            dob,
            parentPhone,
        };

        setStudentList([...studentList, newStudent]);

        setShowModal(false);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDob("");
        setGrade("");
        setSection("");
        setParentName("");
        setParentPhone("");
        setStatus("Active");
        setPreview(null);
    };
    return (
        <div className="user-management">
            <Sidebar isOpen={isOpen} />

            {isOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className="user-content">
                <Header />

                <div className="user-body">

                    {/* Mobile Menu */}
                    <div
                        className="mobile-menu"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </div>

                    {/* Header */}
                    <div className="page-header">

                        <div>
                            <h1>User Management</h1>

                            <p>
                                Manage Students, Staffs and Parents across the school
                            </p>
                        </div>

                        <div className="header-actions">

                            <button className="import-btn">
                                <Upload size={18} />
                                Import Excel
                            </button>

                            <button
                                className="add-btn"
                                onClick={() => setShowModal(true)}
                            >
                                <Plus size={18} />
                                Add Student
                            </button>

                        </div>

                    </div>

                    {/* Tabs */}

                    <div className="user-tabs">

                        <button className="active-tab">
                            Students 25
                        </button>

                        <button>
                            Staff 10
                        </button>

                        <button>
                            Parents 05
                        </button>

                    </div>

                    {/* Filters */}

                    <div className="filters">

                        <div className="search-box">
                            <Search size={18} />

                            <input
                                type="text"
                                placeholder="Search by name or ID..."
                            />
                        </div>

                        <div className="filter-actions">

                            <button className="filter-btn">
                                <Filter size={18} />
                                All Grade
                            </button>

                            <button className="filter-btn">
                                <Filter size={18} />
                                All Status
                            </button>

                        </div>

                    </div>

                    {/* Table */}

                    <div className="table-wrapper">

                        <table className="students-table">

                            <thead>
                                <tr>
                                    <th>STUDENT DETAILS</th>
                                    <th>STUDENT ID</th>
                                    <th>DATE OF BIRTH</th>
                                    <th>GRADE/CLASS</th>
                                    <th>GUARDIAN</th>
                                    <th>STATUS</th>
                                    <th>JOINED DATE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.map((student) => (
                                    <tr key={student.id}>

                                        <td>
                                            <div className="student-info">
                                                <img
                                                    src={student.avatar}
                                                    alt={student.name}
                                                />
                                                <div>
                                                    <h4>{student.name}</h4>
                                                    <p>{student.email}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td>{student.id}</td>

                                        <td>{student.dob}</td>

                                        <td>
                                            <span className="grade-badge">
                                                {student.grade}
                                            </span>
                                        </td>

                                        <td>
                                            {student.guardian}
                                            <br />
                                            {student.relation}
                                        </td>

                                        <td>
                                            <span
                                                className={`status ${student.status === "Active"
                                                    ? "active"
                                                    : "inactive"
                                                    }`}
                                            >
                                                ● {student.status}
                                            </span>
                                        </td>

                                        <td>{student.joined}</td>

                                        <td>
                                            <div className="action-icons">
                                                <Pencil size={18} className="edit-icon" />
                                                <Trash2 size={18} className="delete-icon" />
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                    {/* Add Student Modal */}

                    {showModal && (
                        <div
                            className="modal-overlay"
                            onClick={() => setShowModal(false)}
                        >
                            <div
                                className="student-modal"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h2>Add New Student</h2>

                                <div className="upload-section">

                                    <label
                                        htmlFor="student-photo"
                                        className="upload-label"
                                    >

                                        {preview ? (
                                            <img
                                                src={student.avatar}
                                                alt={student.name}
                                                onError={(e) => {
                                                    e.target.src = `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1
                                                        }`;
                                                }}
                                            />
                                        ) : (
                                            <div className="upload-avatar">
                                                👤
                                            </div>
                                        )}

                                        <p>Upload Photo</p>

                                    </label>

                                    <input
                                        id="student-photo"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        hidden
                                    />

                                </div>

                                <div className="form-grid">

                                    <div>
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Raj"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>

                                    <div className="full-width">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@gmail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            placeholder="9876543210"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label>Date of Birth</label>
                                        <input
                                            type="date"
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label>Grade/Class</label>
                                        <input
                                            type="text"
                                            placeholder="Grade 5"
                                            value={grade}
                                            onChange={(e) => setGrade(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label>Section</label>
                                        <input
                                            type="text"
                                            placeholder="A"
                                            value={section}
                                            onChange={(e) => setSection(e.target.value)}
                                        />
                                    </div>

                                </div>

                                <h3 className="parent-title">
                                    Parent Information
                                </h3>

                                <div className="form-grid">

                                    <div>
                                        <label>Parent Name</label>
                                        <input
                                            type="text"
                                            placeholder="Parent Name"
                                            value={parentName}
                                            onChange={(e) => setParentName(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label>Phone Number</label>
                                        <input
                                            type="text"
                                            placeholder="9876543210"
                                            value={parentPhone}
                                            onChange={(e) => setParentPhone(e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="status-section">

                                    <label>Status</label>

                                    <select
                                        className="status-select"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>

                                </div>

                                <div className="modal-actions">

                                    <button
                                        className="cancel-btn"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        className="save-btn"
                                        onClick={handleAddStudent}
                                    >
                                        Add Student
                                    </button>

                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserManagement;