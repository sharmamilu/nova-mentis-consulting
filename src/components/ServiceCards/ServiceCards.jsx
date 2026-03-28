import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCards.css";
import TalentAcqBg from "../../assets/talent-acq.png";

const ServiceCards = ({ services, activeTab }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const pathMap = {
    "Business Consulting": "/services/business-consulting",
    "HR Consulting": "/services/hr-consulting",
    "Startup Consulting": "/services/startup-consulting",
    "Talent Acquisition": "/services/talent-acquisition",
    "Training Services": "/services/training-services",
  };

  const handleLearnMore = (title) => {
    const path = pathMap[title];
    if (path) navigate(path);
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    sliderRef.current.classList.add("dragging");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove("dragging");
  };

  const onMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove("dragging");
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // If selecting a specific service, show a larger 'Feature' layout
  const isSingle = activeTab !== "All Services" && services.length === 1;

  return (
    <div
      className={`cards-section ${isSingle ? "feature-view" : "gallery-view"}`}
      key={activeTab}
    >
      {/* Decorative background elements */}
      {isSingle && (
        <div className="bg-decorations">
          {/* Faded Background Image Watermark for Talent Acq */}
          {services[0].title === "Talent Acquisition" && (
            <div className="service-bg-watermark">
              <img
                src={TalentAcqBg}
                alt=""
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "600px",
                  height: "auto",
                  opacity: 0.12,
                  pointerEvents: "none",
                  zIndex: 0,
                  filter: "grayscale(100%) brightness(1.2) contrast(0.8)",
                }}
              />
            </div>
          )}

          <div className="side-decoration deco-left">
            <span className="deco-text">{services[0].title}</span>
          </div>
          <div className="side-decoration deco-right">
            <div className="deco-icon-wrap">{services[0].icon}</div>
          </div>

          <div className="floating-tags">
            {services[0].tags?.map((tag, i) => {
              // Distribute tags across the screen
              const isLeftSide = i < 5;
              const row = i % 5;
              const topPos = 12 + row * 18; // 12%, 30%, 48%, 66%, 84%
              const leftPos = isLeftSide
                ? 8 + (row % 2) * 4
                : 85 - (row % 2) * 4;

              return (
                <div
                  key={tag}
                  className="floating-tag"
                  style={{
                    "--i": i,
                    top: `${topPos}%`,
                    left: `${leftPos}%`,
                    animationDelay: `${i * 0.6}s`,
                    opacity: 1 - row * 0.05, // Fades slightly towards bottom
                  }}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div
        className={`cards-slider ${isSingle ? "single-item" : ""}`}
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {services.map((s, idx) => (
          <div key={s.title} className="service-card" style={{ "--idx": idx }}>
            <div className="card-icon-wrap">{s.icon}</div>
            <h3 className="card-title">{s.title}</h3>
            <p className="card-desc">{s.desc}</p>
            <button
              className="learn-btn"
              onClick={() => handleLearnMore(s.title)}
            >
              Learn More →
            </button>
            {isSingle && <div className="card-glow" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
