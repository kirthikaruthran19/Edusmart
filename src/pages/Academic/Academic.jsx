import "./Academic.css";
import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import ClassCard from "../../components/ClassCard/ClassCard";
import AddClassModal from "./AddClassModal";

import Subjects from "./Subjects";
import Timetable from "./Timetable";
import Exams from "./Exams";

import { classesData } from "./academicData";

import {
  Plus,
  BookOpen,
  Clock3,
  CalendarDays,
  GraduationCap,
  Menu,
} from "lucide-react";

const Academic = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("classes");

  return (
    <div className="academic-layout">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="academic-main">
        <Header />

        <div className="academic-content">

          {/* Mobile Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Title */}
          <div className="title-row">
            <div>
              <h1>Academic Management</h1>
              <p>Classes, subject, timetable and exams</p>
            </div>

            <button
              className="add-btn"
              onClick={() => setShowModal(true)}
            >
              <Plus size={20} />

              {activeTab === "classes" && "Add Class"}
              {activeTab === "subjects" && "Add Subject"}
              {activeTab === "timetable" && "Add Period"}
              {activeTab === "exams" && "Add Exam"}
            </button>
          </div>

          {/* Tabs */}
          <div className="tabs">

            <button
              className={activeTab === "classes" ? "active" : ""}
              onClick={() => setActiveTab("classes")}
            >
              <GraduationCap size={18} />
              Classes & Sections
            </button>

            <button
              className={activeTab === "subjects" ? "active" : ""}
              onClick={() => setActiveTab("subjects")}
            >
              <BookOpen size={18} />
              Subjects
            </button>

            <button
              className={activeTab === "timetable" ? "active" : ""}
              onClick={() => setActiveTab("timetable")}
            >
              <Clock3 size={18} />
              Timetable
            </button>

            <button
              className={activeTab === "exams" ? "active" : ""}
              onClick={() => setActiveTab("exams")}
            >
              <CalendarDays size={18} />
              Exams & Results
            </button>

          </div>

          {/* Classes */}
          {activeTab === "classes" && (
            <div className="classes-grid">
              {classesData.map((item) => (
                <ClassCard
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          )}

          {/* Subjects */}
          {activeTab === "subjects" && (
            <Subjects />
          )}

          {/* Timetable */}
          {activeTab === "timetable" && (
            <Timetable />
          )}

          {/* Exams */}
          {activeTab === "exams" && (
            <Exams />
          )}

          {/* Modal */}
          {showModal && activeTab === "classes" && (
            <AddClassModal
              onClose={() => setShowModal(false)}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default Academic;