import "./TeacherAssignments.css";

import { useEffect, useState } from "react";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";

import AssignmentStats from "../../components/AssignmentStats/AssignmentStats";
import AssignmentFilters from "../../components/AssignmentFilters/AssignmentFilters";
import AssignmentTable from "../../components/AssignmentTable/AssignmentTable";
import CreateAssignmentModal from "../../components/CreateAssignmentModal/CreateAssignmentModal";
import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
import AIAssistantModal from "../../components/AIAssistantModal/AIAssistantModal";

import { assignmentsData } from "../../data/assignmentsData";

function TeacherAssignments() {
    const [showAssistant, setShowAssistant] =
        useState(false);
    const [assignments, setAssignments] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedClass, setSelectedClass] =
        useState("All Classes");

    const [selectedStatus, setSelectedStatus] =
        useState("All Status");

    useEffect(() => {
        setAssignments(assignmentsData);
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "teacherAssignments",
            JSON.stringify(assignments)
        );
    }, [assignments]);

    const filteredAssignments =
        assignments.filter((item) => {
            const searchMatch =
                item.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const classMatch =
                selectedClass === "All Classes" ||
                item.class === selectedClass;

            const statusMatch =
                selectedStatus === "All Status" ||
                item.status === selectedStatus;

            return (
                searchMatch &&
                classMatch &&
                statusMatch
            );
        });

    const handleCreateAssignment = (data) => {
        const newAssignment = {
            id: Date.now(),

            title: data.title,

            description: data.description,

            class: data.class,

            dueDate: data.dueDate,

            marks: Number(data.marks),

            attachment: "No Files",

            attachmentCount: 0,

            submitted: 0,

            totalStudents: 30,

            percentage: 0,

            status: "Active",

            subject: "Mathematics",

            createdBy: "Teacher",

            type: "Assignment",
        };

        setAssignments([
            newAssignment,
            ...assignments,
        ]);
    };

    const handleDeleteAssignment = (id) => {
        const confirmDelete = window.confirm(
            "Delete this assignment?"
        );

        if (!confirmDelete) return;

        setAssignments(
            assignments.filter(
                (item) => item.id !== id
            )
        );
    };

    const handleEditAssignment = (item) => {
        const newTitle = prompt(
            "Edit Assignment Title",
            item.title
        );

        if (!newTitle) return;

        setAssignments(
            assignments.map((assignment) =>
                assignment.id === item.id
                    ? {
                        ...assignment,
                        title: newTitle,
                    }
                    : assignment
            )
        );
    };

    const handleViewAssignment = (item) => {
        alert(
            `Assignment: ${item.title}
Class: ${item.class}
Status: ${item.status}
Submitted: ${item.submitted}/${item.totalStudents}`
        );
    };

    const handleGradeAssignment = (item) => {
        setAssignments(
            assignments.map((assignment) =>
                assignment.id === item.id
                    ? {
                        ...assignment,
                        status: "Completed",
                    }
                    : assignment
            )
        );
    };

    return (
        <div className="teacher-assignments-layout">

            <TeacherSidebar />

            <main className="teacher-assignments-main">

                <TeacherHeader />

                <div className="teacher-assignments-content">

                    <AssignmentStats
                        assignments={assignments}
                    />

                    <AssignmentFilters
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedClass={selectedClass}
                        setSelectedClass={setSelectedClass}
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                        onCreateAssignment={() =>
                            setShowModal(true)
                        }
                    />

                    <AssignmentTable
                        assignments={filteredAssignments}
                        onDelete={handleDeleteAssignment}
                        onEdit={handleEditAssignment}
                        onView={handleViewAssignment}
                        onGrade={handleGradeAssignment}
                    />

                </div>
                <FloatingAssistant
                    onClick={() =>
                        setShowAssistant(true)
                    }
                />

                {showAssistant && (
                    <AIAssistantModal
                        onClose={() =>
                            setShowAssistant(false)
                        }
                    />
                )}
            </main>

            {showModal && (
                <CreateAssignmentModal
                    onClose={() =>
                        setShowModal(false)
                    }
                    onSave={handleCreateAssignment}
                />
            )}

        </div>
    );
}

export default TeacherAssignments;