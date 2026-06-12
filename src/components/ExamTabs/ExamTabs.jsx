import "./ExamTabs.css";

function ExamTabs({
  units,
  activeUnit,
  setActiveUnit,
}) {
  return (
    <div className="exam-tabs">
      {units.map((unit) => (
        <button
          key={unit.id}
          className={`exam-tab ${
            activeUnit === unit.id
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveUnit(unit.id)
          }
        >
          {unit.title} {unit.month}
        </button>
      ))}
    </div>
  );
}

export default ExamTabs;