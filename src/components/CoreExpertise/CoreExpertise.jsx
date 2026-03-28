import { ServiceIcons } from "../../assets/Icons";
import "./CoreExpertise.css";

const CoreExpertise = () => {
  const expertiseData = [
    {
      icon: ServiceIcons.HR,
      title: "People",
      desc: "Our human resource solutions are designed to empower organizations by attracting, retaining, and developing top talent.",
      pills: [
        "Top Talent Acquisition",
        "Training & Development",
        "Tailored HR Strategies",
      ],
      accent: "#1a6fbf",
    },
    {
      icon: ServiceIcons.Startup,
      title: "Technology",
      desc: "We provide cutting-edge IT solutions that streamline operations, enhance productivity, and foster innovation.",
      pills: [
        "Modern IT Solutions",
        "Scalable & Secure",
        "Software • Cloud • AI • Cyber",
      ],
      accent: "#00c6ff",
    },
    {
      icon: ServiceIcons.Business,
      title: "Business Solutions",
      desc: "Our business strategy solutions are tailored to help organizations navigate complexity, drive growth, and boost performance.",
      pills: [
        "Growth & Optimization",
        "Market & Competitor Insights",
        "Performance Excellence",
      ],
      accent: "#36d1dc",
    },
  ];

  return (
    <section className="core-expertise">
      <div className="expertise-header">
        <h2>
          Core Areas of <span style={{ color: "#1a6fbf" }}>Expertise</span>
        </h2>
        <p>
          Our deep understanding and expertise in these domains enable us to
          guide organizations in achieving excellence.
        </p>
      </div>

      <div className="expertise-grid">
        {expertiseData.map((item, idx) => (
          <div key={idx} className="expertise-card-v2">
            <div
              className="icon-circle-wrap"
              style={{
                background: `linear-gradient(135deg, ${item.accent}22, ${item.accent}44)`,
              }}
            >
              {item.icon}
            </div>
            <h4>{item.title}</h4>
            <div
              className="expert-accent-line"
              style={{ backgroundColor: item.accent }}
            ></div>
            <p>{item.desc}</p>

            <div className="expert-pills-box">
              {item.pills.map((pill, pIdx) => (
                <div key={pIdx} className="expert-pill">
                  <span className="check-icon">✓</span>
                  {pill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Excellence Bar */}
      <div className="excellence-bar">
        <h3>Delivering Excellence Through People, Technology & Strategy</h3>
        <div className="bar-subpoints">
          <span>✓ Trusted by global clients</span>
          <span>✓ Innovative solutions</span>
          <span>✓ Measurable results</span>
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
