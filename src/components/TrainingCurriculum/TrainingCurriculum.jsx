import { useState } from "react";
import "./TrainingCurriculum.css";

const TrainingCurriculum = ({ modules, title, subtitle }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="curriculum-section">
      <div className="curriculum-container">
        <div className="curriculum-header">
          <h2>
            {title} <span style={{ color: "#1a6fbf" }}>Programs</span>
          </h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#667",
              fontSize: "18px",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div className="curriculum-layout">
          {/* Left Navigation (13 Modules) */}
          <div className="curriculum-list">
            {modules.map((m, idx) => (
              <div
                key={idx}
                className={`curriculum-nav-item ${activeIdx === idx ? "active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="mod-num">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <div className="mod-title">{m.title}</div>
              </div>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="curriculum-view" key={activeIdx}>
            <span className="mod-subtitle">
              Module {(activeIdx + 1).toString().padStart(2, "0")} — Core
              Expertise
            </span>
            <h3>{modules[activeIdx].title}</h3>
            <div className="course-points">
              {modules[activeIdx].points.map((p, i) => (
                <div key={i} className="course-item">
                  <strong>{p.label}</strong>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCurriculum;
