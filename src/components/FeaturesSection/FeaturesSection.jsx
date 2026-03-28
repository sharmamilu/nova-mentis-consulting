import { FEATURES } from "../../data/servicesData";
import "./FeaturesSection.css";

const FeaturesSection = () => (
  <section className="features-section">
    {/* Header Content */}
    <div className="features-header">
      <h2>
        Strategic <span className="accent">Expertise</span> &{" "}
        <span className="accent">Growth</span> for Modern Business
      </h2>
      <p className="features-subtitle">
        Access elite consulting talent and localized expertise to accelerate
        your business model validation, recruitment, and strategic growth.
      </p>
    </div>

    {/* Features Grid */}
    <div className="features-grid">
      {FEATURES.map((f) => (
        <div key={f.title} className="feature-card">
          <div className="feature-icon-wrap">{f.icon}</div>
          <div className="feature-info">
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
