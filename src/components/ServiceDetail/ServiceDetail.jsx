import "./ServiceDetail.css";

const ServiceDetail = ({ sections, sectionId }) => (
  <section className="service-detail-section" id={sectionId}>
    <div className="service-detail-grid">
      {sections.map((section, idx) => (
        <div key={idx} className="detail-card">
          <div className="detail-num">
            {(idx + 1).toString().padStart(2, "0")}
          </div>
          <h3>{section.title}</h3>

          <ul className="sub-service-list">
            {section.items.map((item, i) => (
              <li key={i} className="sub-service-item">
                <span className="sub-bullet">✓</span>
                <div>
                  <strong>{item.label}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceDetail;
