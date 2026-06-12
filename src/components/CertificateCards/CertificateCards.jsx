import "./CertificateCards.css";

import {
  Download,
  Award,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { certificates } from "../../data/documentsData";

const CertificateCards = () => {
  const getCertificateStyle = (category) => {
    switch (category) {
      case "Merit":
        return {
          cardClass: "merit-card",
          icon: <Award size={28} />,
          badgeClass: "merit-badge",
        };

      case "Completion":
        return {
          cardClass: "completion-card",
          icon: <GraduationCap size={28} />,
          badgeClass: "completion-badge",
        };

      case "Attendance":
        return {
          cardClass: "attendance-card",
          icon: <ShieldCheck size={28} />,
          badgeClass: "attendance-badge",
        };

      default:
        return {
          cardClass: "",
          icon: <Award size={28} />,
          badgeClass: "",
        };
    }
  };

  return (
    <div className="certificate-grid">
      {certificates.map((certificate) => {
        const style = getCertificateStyle(
          certificate.category
        );

        return (
          <div
            className={`certificate-card ${style.cardClass}`}
            key={certificate.id}
          >
            <div className="certificate-top">
              <div className="certificate-icon">
                {style.icon}
              </div>

              <span
                className={`certificate-badge ${style.badgeClass}`}
              >
                {certificate.category}
              </span>
            </div>

            <div className="certificate-content">
              <h3>{certificate.title}</h3>

              <p>{certificate.student}</p>

              <span>
                Issued: {certificate.issuedDate}
              </span>

              <button className="certificate-btn">
                <Download size={18} />
                Download Certificate
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CertificateCards;