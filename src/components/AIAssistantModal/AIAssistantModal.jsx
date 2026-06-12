import { useState } from "react";

import {
  Bot,
  TrendingUp,
  Lightbulb,
  ShieldAlert,
  Users,
  X,
} from "lucide-react";

import "./AIAssistantModal.css";

import {
  insightsData,
  suggestionsData,
  alertsData,
} from "../../data/aiAssistantData";

function AIAssistantModal({ onClose }) {
  const [activeTab, setActiveTab] =
    useState("insights");

  const renderIcon = (icon) => {
    switch (icon) {
      case "shield":
        return <ShieldAlert size={28} />;

      case "users":
      default:
        return <Users size={28} />;
    }
  };

  return (
    <div
      className="ai-modal-overlay"
      onClick={onClose}
    >
      <div
        className="ai-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="ai-modal-header">
          <div className="ai-header-left">
            <div className="ai-bot-icon">
              <Bot size={28} />
            </div>

            <div>
              <h2>
                AI Teaching Assistant
              </h2>

              <p>
                Powered by classroom
                analytics
              </p>
            </div>
          </div>

          <button
            className="ai-close-btn"
            onClick={onClose}
          >
            <X size={30} />
          </button>
        </div>

        <div className="ai-tabs">
          <button
            className={
              activeTab === "insights"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("insights")
            }
          >
            <TrendingUp size={18} />
            Insights
          </button>

          <button
            className={
              activeTab ===
              "suggestions"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab(
                "suggestions"
              )
            }
          >
            <Lightbulb size={18} />
            Suggestions
          </button>

          <button
            className={
              activeTab === "alerts"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("alerts")
            }
          >
            <ShieldAlert size={18} />
            Alerts
          </button>
        </div>

        <div className="ai-modal-body">
          {activeTab ===
            "insights" &&
            insightsData.map(
              (item) => (
                <div
                  key={item.id}
                  className={`ai-card ${item.type}`}
                >
                  <div className="ai-card-icon">
                    {renderIcon(
                      item.icon
                    )}
                  </div>

                  <div className="ai-card-content">
                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            )}

          {activeTab ===
            "suggestions" &&
            suggestionsData.map(
              (item) => (
                <div
                  key={item.id}
                  className="ai-card success"
                >
                  <div className="ai-card-icon">
                    {renderIcon(
                      item.icon
                    )}
                  </div>

                  <div className="ai-card-content">
                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            )}

          {activeTab ===
            "alerts" &&
            alertsData.map(
              (item) => (
                <div
                  key={item.id}
                  className={`alert-card ${item.type}`}
                >
                  <div className="alert-level">
                    {item.level}
                  </div>

                  <div className="alert-text">
                    {item.text}
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default AIAssistantModal;