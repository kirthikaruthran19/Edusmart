import { useState } from "react";
import "./MyClasses.css";

import TeacherSidebar from "../../components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../components/TeacherHeader/TeacherHeader";
import TeacherClassCard from "../../components/TeacherClassCard/TeacherClassCard";
import CreateClassModal from "../../components/CreateClassModal/CreateClassModal";
import FloatingAssistant from "../../components/FloatingAssistant/FloatingAssistant";
import AIAssistantModal from "../../components/AIAssistantModal/AIAssistantModal";

import { teacherClasses } from "../../data/teacherClassesData";

import { BookOpen } from "lucide-react";

function MyClasses() {
  const [showModal, setShowModal] = useState(false);
const [showAssistant, setShowAssistant] =
  useState(false);
  return (
    <div className="myclasses-layout">
      <TeacherSidebar />

      <main className="myclasses-main">
        <TeacherHeader />

        <div className="myclasses-top">
          <div>
            <h1>My Classes</h1>

            <p>
              Manage your assigned classes and subjects
            </p>
          </div>

          <button
            className="new-class-btn"
            onClick={() => setShowModal(true)}
          >
            <BookOpen size={20} />
            New Class
          </button>
        </div>

        <div className="classes-grid">
          {teacherClasses.map((item) => (
            <TeacherClassCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

        <CreateClassModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
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

export default MyClasses;