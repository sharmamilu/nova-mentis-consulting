import { useEffect, useRef, useState } from "react";
import "./AnimatedCards.css";

const AnimatedCards = ({ items, title, subtitle }) => {
  return (
    <section className="animated-cards-section">
      <div className="ac-container">
        <div className="ac-header">
          <h2>
            {title} <span style={{ color: "#1a6fbf" }}>Portfolio</span>
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

        <div className="ac-grid">
          {items.map((item, idx) => (
            <Card key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ item, idx }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Reveal once
        }
      },
      { threshold: 0.15 },
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`ac-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${(idx % 2) * 0.1}s` }}
    >
      <div className="ac-side">
        <span className="mod-num">
          MODULE {(idx + 1).toString().padStart(2, "0")}
        </span>
        <h4>{item.title}</h4>
      </div>
      <div className="ac-points">
        {item.points.map((p, i) => (
          <div key={i} className="ac-point">
            <strong>{p.label}</strong>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
