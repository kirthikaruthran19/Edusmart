import "./FloatingAssistant.css";

import { Sparkles } from "lucide-react";

function FloatingAssistant({ onClick }) {
  return (
    <button
      className="floating-assistant"
      onClick={onClick}
    >
      <Sparkles size={22} />
      <span>AI Assistant</span>
    </button>
  );
}

export default FloatingAssistant;