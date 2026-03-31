import "./MissionSection.css";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-glass-card">
          <div className="mission-logo">
            <img src="/logo.png" alt="Company Logo" />
          </div>
          <h2 className="mission-title">Company Mission <span className="accent">Statement</span></h2>
          <p className="mission-text">
            "Our mission is to empower global organizations by integrating cutting-edge technology with strategic human capital management. We strive to be the catalyst for growth for start-ups and established enterprises alike, delivering data-driven consulting, innovation, and training that transforms workforces into agile, future-ready leaders of their industries."
          </p>
          <div className="mission-decoration">MISSION</div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
