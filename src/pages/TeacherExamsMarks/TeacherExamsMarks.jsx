import "./TeacherExamsMarks.css";

import { useState } from "react";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";

import ExamStats from "../../components/ExamStats/ExamStats";
import ExamTabs from "../../components/ExamTabs/ExamTabs";
import MarksTable from "../../components/MarksTable/MarksTable";
import PublishMarksModal from "../../components/PublishMarksModal/PublishMarksModal";
import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
import AIAssistantModal from "../../components/AIAssistantModal/AIAssistantModal";

import {
    examMarksData,
    examUnits,
    classOptions,
} from "../../data/examMarksData";

import {
    Search,
    BookOpen,
    Filter,
    Sparkles,
} from "lucide-react";

function TeacherExamsMarks() {
    const [showAssistant, setShowAssistant] =
        useState(false);
    const [students, setStudents] =
        useState(examMarksData);

    const [activeUnit, setActiveUnit] =
        useState(3);

    const [selectedClass, setSelectedClass] =
        useState("10-A");

    const [searchTerm, setSearchTerm] =
        useState("");

    const [showPublishModal, setShowPublishModal] =
        useState(false);

    const filteredStudents = students.filter(
        (student) => {
            const matchesClass =
                selectedClass === "All Classes"
                    ? true
                    : student.class === selectedClass;

            const matchesSearch =
                student.studentName
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    );

            return (
                matchesClass &&
                matchesSearch
            );
        }
    );
    const displayStudents =
        filteredStudents.map((student) => {
            const unitKey = `unit${activeUnit}`;

            return {
                ...student,

                mathematics:
                    student[unitKey]?.mathematics || 0,

                algebra:
                    student[unitKey]?.algebra || 0,

                statistics:
                    student[unitKey]?.statistics || 0,
            };
        });

    const handlePublish = () => {
        alert("Marks Published Successfully");
        setShowPublishModal(false);
    };

    return (
        <div className="teacher-exams-layout">
            <TeacherSidebar />

            <main className="teacher-exams-main">
                <TeacherHeader />

                <div className="teacher-exams-content">
                    {/* Page Header */}

                    <div className="exam-page-header">
                        <div>
                            <h1>Exam Marks</h1>

                            <p>
                                Enter marks and track
                                student performance
                            </p>
                        </div>

                        <button
                            className="publish-marks-btn"
                            onClick={() =>
                                setShowPublishModal(true)
                            }
                        >
                            <BookOpen size={20} />
                            Publish Marks
                        </button>
                    </div>

                    {/* Stats */}

                    <ExamStats
                        students={displayStudents}
                    />

                    {/* Unit Tabs */}

                    <ExamTabs
                        units={examUnits}
                        activeUnit={activeUnit}
                        setActiveUnit={setActiveUnit}
                    />

                    {/* Filters */}

                    <div className="exam-filters">
                        <div className="search-box">
                            <Search size={18} />

                            <input
                                type="text"
                                placeholder="Search Student..."
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="class-filter">
                            <Filter size={18} />

                            <select
                                value={selectedClass}
                                onChange={(e) =>
                                    setSelectedClass(
                                        e.target.value
                                    )
                                }
                            >
                                {classOptions.map(
                                    (className) => (
                                        <option
                                            key={className}
                                        >
                                            {className}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    </div>

                    {/* Marks Header */}

                    <div className="marks-section-header">
                        <div>
                            <h2>
                                Marks Entry Class{" "}
                                {selectedClass}
                            </h2>

                            <p>
                                Enter score for each
                                subject out of 100
                            </p>
                        </div>
                    </div>

                    {/* Marks Table */}

                    <MarksTable
                        students={displayStudents}
                        setStudents={setStudents}
                        activeUnit={activeUnit}
                    />

                    {/* AI Assistant */}


                </div>
                <FloatingAssistant
                    onClick={() =>
                        setShowAssistant(true)
                    }
                />

                {showAssistant && (
                    <AIAssistantModal
                        type="exam-marks"
                        onClose={() =>
                            setShowAssistant(false)
                        }
                    />
                )}
            </main>

            <PublishMarksModal
                isOpen={showPublishModal}
                onClose={() =>
                    setShowPublishModal(false)
                }
                onPublish={handlePublish}
            />
        </div>
    );
}

export default TeacherExamsMarks;