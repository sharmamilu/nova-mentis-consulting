import { useState } from "react";
import "./ServiceTree.css";

const ServiceTree = ({ items, title, subtitle }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="service-tree-section">
      <div className="tree-container">
        <div className="tree-header">
          <h2>
            {title} <span style={{ color: "#1a6fbf" }}>Explorer</span>
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

        <div className="tree-layout">
          {/* Left Navigation */}
          <div className="tree-nav">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`tree-nav-item ${activeIdx === idx ? "active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="nav-title">{item.title}</div>
                <div className="nav-num">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

          {/* Right Details */}
          <div className="tree-content">
            <div key={activeIdx} className="tree-item-details">
              <h3>{items[activeIdx].title}</h3>
              <div className="detail-list">
                {items[activeIdx].points.map((p, i) => (
                  <div key={i} className="detail-point">
                    {p.label && <strong>{p.label}:</strong>}
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTree;
