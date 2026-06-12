import "./TeacherAIAssistant.css";
import { Sparkles } from "lucide-react";

function TeacherAIAssistant() {
  return (
    <div className="teacher-ai-card">

      <div className="teacher-ai-icon">
        <Sparkles size={30} />
      </div>

      <h2>AI Teaching Assistant</h2>

      <p>
        Need help creating lesson plans,
        quizzes or classroom activities?
      </p>

      <button>
        Ask AI Assistant
      </button>

    </div>
  );
}

export default TeacherAIAssistant;