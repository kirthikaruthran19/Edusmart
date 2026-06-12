import "./Attendance.css";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { attendanceData } from "../../data/attendanceData";
import { staffAttendanceData } from "../../data/staffAttendanceData";

import {
    Search,
    Calendar,
    Filter,
    CheckCircle,
    XCircle,
    Clock3,
    ClipboardCheck,
    Upload,
    BookOpen,
    Menu,
} from "lucide-react";

const Attendance = () => {
    const [students, setStudents] = useState(() => {
        const savedData = localStorage.getItem("attendance");
        return savedData
            ? JSON.parse(savedData)
            : attendanceData;
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("All");

    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("student");
    const [staffMembers, setStaffMembers] = useState(() => {
        const savedData = localStorage.getItem("staffAttendance");
        return savedData
            ? JSON.parse(savedData)
            : staffAttendanceData;
    });

    const currentData =
        activeTab === "student"
            ? students
            : staffAttendanceData;

    const presentCount = currentData.filter(
        (item) => item.status === "Present"
    ).length;

    const absentCount = currentData.filter(
        (item) => item.status === "Absent"
    ).length;

    const lateCount = currentData.filter(
        (item) => item.status === "Late"
    ).length;

    const excusedCount = currentData.filter(
        (item) => item.status === "Excused"
    ).length;

    useEffect(() => {
        localStorage.setItem(
            "attendance",
            JSON.stringify(students)
        );
    }, [students]);

    const updateStatus = (id, status) => {
        const updateStaffStatus = (
            id,
            status
        ) => {
            setStaffMembers((prev) =>
                prev.map((staff) =>
                    staff.id === id
                        ? { ...staff, status }
                        : staff
                )
            );
        };
        setStudents((prev) =>
            prev.map((student) =>
                student.id === id
                    ? { ...student, status }
                    : student
            )
        );
    };

    const updateRemark = (id, remark) => {
        const updateStaffRemark = (
            id,
            remark
        ) => {
            setStaffMembers((prev) =>
                prev.map((staff) =>
                    staff.id === id
                        ? { ...staff, remarks: remark }
                        : staff
                )
            );
        };
        setStudents((prev) =>
            prev.map((student) =>
                student.id === id
                    ? { ...student, remarks: remark }
                    : student
            )
        );
    };

    const saveAttendance = () => {
        localStorage.setItem(
            "attendance",
            JSON.stringify(students)
        );

        alert("Attendance saved successfully!");
    };

    const filteredStudents = students.filter(
        (student) => {
            const searchMatch =
                student.name
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    ) ||
                student.rollNo
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    );

            const gradeMatch =
                selectedGrade === "All"
                    ? true
                    : student.className.includes(
                        selectedGrade
                    );

            return searchMatch && gradeMatch;
        }
    );


    return (
        <div className="attendance-layout">
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />



            <div className="attendance-main">
                <Header />

                <div className="attendance-content">

                    <button
                        className="hamburger-btn"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="attendance-page">

                        {/* Header */}

                        <div className="attendance-header">
                            <div>
                                <h1>Attendance</h1>
                                <p>
                                    Track and manage student and
                                    staff attendance
                                </p>
                            </div>

                            <button className="export-btn">
                                <Upload size={18} />
                                Export Excel
                            </button>
                        </div>

                        {/* Tabs */}

                        <div className="attendance-tabs">

                            <button
                                className={
                                    activeTab === "student"
                                        ? "active-tab"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveTab("student")
                                }
                            >
                                <BookOpen size={18} />
                                Student Attendance
                            </button>

                            <button
                                className={
                                    activeTab === "staff"
                                        ? "active-tab"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveTab("staff")
                                }
                            >
                                <BookOpen size={18} />
                                Staff Attendance
                            </button>

                        </div>
                        {/* Summary Cards */}

                        <div className="summary-cards">
                            <div className="summary-card present-card">
                                <div className="summary-icon green">
                                    <CheckCircle size={24} />
                                </div>

                                <div>
                                    <h2>{presentCount}</h2>
                                    <p>Present</p>
                                </div>
                            </div>

                            <div className="summary-card absent-card">
                                <div className="summary-icon red">
                                    <XCircle size={24} />
                                </div>

                                <div>
                                    <h2>{absentCount}</h2>
                                    <p>Absent</p>
                                </div>
                            </div>

                            <div className="summary-card late-card">
                                <div className="summary-icon orange">
                                    <Clock3 size={24} />
                                </div>

                                <div>
                                    <h2>{lateCount}</h2>
                                    <p>Late</p>
                                </div>
                            </div>

                            <div className="summary-card excused-card">
                                <div className="summary-icon blue">
                                    <ClipboardCheck size={24} />
                                </div>

                                <div>
                                    <h2>{excusedCount}</h2>
                                    <p>Excused</p>
                                </div>
                            </div>
                        </div>

                        {/* Filters */}

                        <div className="attendance-filters">
                            <div className="search-box">
                                <Search size={18} />

                                <input
                                    type="text"
                                    placeholder="Search Student or Roll No..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>

                            <div className="date-filter">
                                <input
                                    type="date"
                                    defaultValue="2026-04-14"
                                />

                                <Calendar size={18} />
                            </div>

                            <div className="grade-filter">
                                <Filter size={18} />

                                <select
                                    value={selectedGrade}
                                    onChange={(e) =>
                                        setSelectedGrade(e.target.value)
                                    }
                                >
                                    <option value="All">
                                        All Grades
                                    </option>

                                    <option value="Grade 3">
                                        Grade 3
                                    </option>

                                    <option value="Grade 4">
                                        Grade 4
                                    </option>

                                    <option value="Grade 5">
                                        Grade 5
                                    </option>

                                    <option value="Grade 6">
                                        Grade 6
                                    </option>

                                    <option value="Grade 7">
                                        Grade 7
                                    </option>

                                    <option value="Grade 8">
                                        Grade 8
                                    </option>
                                </select>
                            </div>

                            <button
                                className="save-btn"
                                onClick={saveAttendance}
                            >
                                Save Batch
                            </button>
                        </div>

                        {/* Table */}
                        {activeTab === "student" && (
                            <div className="attendance-table-wrapper">
                                <table className="attendance-table">
                                    <thead>
                                        <tr>
                                            <th>STUDENT</th>
                                            <th>ROLL NO</th>
                                            <th>CLASS</th>
                                            <th>STATUS</th>
                                            <th>REMARKS</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredStudents.length > 0 ? (
                                            filteredStudents.map(
                                                (student) => (
                                                    <tr key={student.id}>
                                                        <td>{student.name}</td>

                                                        <td>{student.rollNo}</td>

                                                        <td>{student.className}</td>

                                                        <td>
                                                            <div className="status-group">
                                                                <button
                                                                    className={`status-btn ${student.status ===
                                                                        "Present"
                                                                        ? "active-present"
                                                                        : ""
                                                                        }`}
                                                                    onClick={() =>
                                                                        updateStatus(
                                                                            student.id,
                                                                            "Present"
                                                                        )
                                                                    }
                                                                >
                                                                    ✓ Present
                                                                </button>

                                                                <button
                                                                    className={`status-btn ${student.status ===
                                                                        "Absent"
                                                                        ? "active-absent"
                                                                        : ""
                                                                        }`}
                                                                    onClick={() =>
                                                                        updateStatus(
                                                                            student.id,
                                                                            "Absent"
                                                                        )
                                                                    }
                                                                >
                                                                    ✕ Absent
                                                                </button>

                                                                <button
                                                                    className={`status-btn ${student.status ===
                                                                        "Late"
                                                                        ? "active-late"
                                                                        : ""
                                                                        }`}
                                                                    onClick={() =>
                                                                        updateStatus(
                                                                            student.id,
                                                                            "Late"
                                                                        )
                                                                    }
                                                                >
                                                                    ◷ Late
                                                                </button>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <input
                                                                className="remarks-input"
                                                                type="text"
                                                                value={student.remarks}
                                                                placeholder="Add remarks"
                                                                onChange={(e) =>
                                                                    updateRemark(
                                                                        student.id,
                                                                        e.target.value
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="no-data"
                                                >
                                                    No students found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === "staff" && (
                            <div className="attendance-table-wrapper">

                                <table className="attendance-table">

                                    <thead>
                                        <tr>
                                            <th>STAFF DETAILS</th>
                                            <th>EMPLOYEE ID</th>
                                            <th>DEPARTMENT</th>
                                            <th>ROLE</th>
                                            <th>STATUS</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {staffMembers.map((staff) => (
                                            <tr key={staff.id}>

                                                <td>{staff.name}</td>

                                                <td>{staff.employeeId}</td>

                                                <td>{staff.department}</td>

                                                <td>{staff.role}</td>

                                                <td>
                                                    <div className="status-group">

                                                        <button
                                                            className={`status-btn ${staff.status === "Present"
                                                                ? "active-present"
                                                                : ""
                                                                }`}
                                                            onClick={() =>
                                                                updateStaffStatus(
                                                                    staff.id,
                                                                    "Present"
                                                                )
                                                            }
                                                        >
                                                            ✓ Present
                                                        </button>

                                                        <button
                                                            className={`status-btn ${staff.status === "Absent"
                                                                ? "active-absent"
                                                                : ""
                                                                }`}
                                                            onClick={() =>
                                                                updateStaffStatus(
                                                                    staff.id,
                                                                    "Absent"
                                                                )
                                                            }
                                                        >
                                                            ✕ Absent
                                                        </button>

                                                        <button
                                                            className={`status-btn ${staff.status === "Late"
                                                                ? "active-late"
                                                                : ""
                                                                }`}
                                                            onClick={() =>
                                                                updateStaffStatus(
                                                                    staff.id,
                                                                    "Late"
                                                                )
                                                            }
                                                        >
                                                            ◷ Late
                                                        </button>

                                                    </div>
                                                </td>

                                                <td>
                                                    <input
                                                        type="text"
                                                        className="remarks-input"
                                                        value={staff.remarks}
                                                        placeholder="Add remarks"
                                                        onChange={(e) =>
                                                            updateStaffRemark(
                                                                staff.id,
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </td>

                                            </tr>
                                        ))}

                                    </tbody>

                                </table>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;