import { useState } from "react";

import "./Students.css";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";
import StudentTable from "../../components/StudentTable/StudentTable";

import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
import AIAssistantModal from "../../components/AIAssistantModal/AIAssistantModal";

function Students() {
  const [showAssistant, setShowAssistant] =
    useState(false);

  return (
    <div className="students-layout">
      <TeacherSidebar />

      <main className="students-main">
        <TeacherHeader />

        <div className="students-content">
          <h1 className="students-title">
            Students
          </h1>

          <StudentTable />
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
    </div>
  );
}

export default Students;