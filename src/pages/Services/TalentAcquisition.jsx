import ServiceHero from "../../components/ServiceHero/ServiceHero";
import CtaSection from "../../components/CtaSection/CtaSection";
import TalentAcqBg from "../../assets/talent-acq.png";
import "../../components/ApproachCards/ApproachCards.css";

const TalentAcquisition = () => {
  const approachPoints = [
    {
      title: "Core Focus Areas",
      desc: "Understanding the essential requirements and strategic orientation of the specific role within your team.",
      icon: "🎯",
    },
    {
      title: "Expected Outcomes",
      desc: "Defining clear performance milestones and tangible deliverables expected during the timeframe.",
      icon: "📈",
    },
    {
      title: "Personal Qualities",
      desc: "Identifying the behavioral traits and leadership styles that drive success in your unique environment.",
      icon: "👥",
    },
    {
      title: "Job Success Needs",
      desc: "Pinpointing the specific technical expertise and professional skills required to excel from day one.",
      icon: "🏆",
    },
    {
      title: "Cultural Fitment",
      desc: "Ensuring deep alignment with your organization's core values, mission, and internal workplace dynamics.",
      icon: "✨",
    },
    {
      title: "Reporting Matrix",
      desc: "Mapping the hierarchical relationships and internal stakeholders to ensure smooth team integration.",
      icon: "🔗",
    },
    {
      title: "Stakeholder Map",
      desc: "Identifying the key internal collaborators and decision-makers relevant to the new hire's success.",
      icon: "🗺️",
    },
    {
      title: "Selection Design",
      desc: "Collaborating with your teams to craft a bespoke interview and vetting process for each mandate.",
      icon: "🛠️",
    },
    {
      title: "Responsibility Map",
      desc: "Establishing a crystal-clear breakdown of duties to ensure immediate accountability and focus.",
      icon: "📝",
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Talent"
        accentTitle="Acquisition"
        desc="Identifying and sourcing world-class professionals to ensure the right fit for every position. We bridge the gap between global opportunity and specialized local expertise across all industry verticals."
        bgImage={TalentAcqBg}
      />

      {/* Talent Tiers Section */}
      <section style={{ padding: "100px 32px", background: "white" }}>
        <div className="max-container">
          <div className="tier-section">
            {[
              { val: "Fresh Grads", label: "Early Talent" },
              { val: "Mid Management", label: "Strategic Hires" },
              { val: "CXO Level", label: "Executive Search" },
              { val: "Geographic", label: "Regional Outreach" },
            ].map((tier) => (
              <div key={tier.val} className="tier-item">
                <div className="val">{tier.val}</div>
                <div className="label">{tier.label}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h4
              style={{
                color: "#1a6fbf",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Our Approach
            </h4>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                color: "#0e2a54",
                fontSize: "var(--text-section)",
                fontWeight: "var(--w-bold)",
                marginBottom: "24px",
              }}
            >
              Ensuring the <span style={{ color: "#1a6fbf" }}>Right Fit</span>{" "}
              for Every Position
            </h2>
            <p
              style={{
                color: "#667",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "var(--leading-base)",
              }}
            >
              Our approach to staffing a position begins by learning the basics
              of your organization. We carefully screen and conduct in-depth
              interviews before presenting only the most capable candidates.
            </p>
          </div>

          <div className="approach-grid">
            {approachPoints.map((p) => (
              <div key={p.title} className="approach-card">
                <div className="icon-box">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Methodology */}
      <section
        style={{
          padding: "120px 32px",
          background: "#f8fbff",
          borderTop: "1px solid #eef4f8",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                color: "#0e2a54",
                fontSize: "var(--text-section)",
                fontWeight: "var(--w-bold)",
                marginBottom: "24px",
              }}
            >
              Omni-Source <span style={{ color: "#1a6fbf" }}>Methodology</span>
            </h2>
            <p
              style={{
                color: "#556",
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "40px",
              }}
            >
              We creatively source and recruit candidates through a robust
              network including networking, referrals, industry and academic
              associations, and high-end online sources.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              {[
                "Executive Networking",
                "Referral Vault",
                "Academic Associations",
                "Advanced Digital Sourcing",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "white",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    border: "1px solid #eef4f8",
                    fontWeight: "700",
                    color: "#0e2a54",
                  }}
                >
                  <span style={{ color: "#f0c040", fontSize: "20px" }}>✓</span>{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              flex: 1,
              height: "450px",
              background: "#0e2a54",
              borderRadius: "40px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.1,
                background:
                  "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                zIndex: 10,
                padding: "50px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(40px)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.12)",
                textAlign: "center",
                maxWidth: "420px",
              }}
            >
              <h3
                style={{
                  color: "#f0c040",
                  fontFamily: "Outfit",
                  fontSize: "28px",
                  marginBottom: "16px",
                }}
              >
                Why NovaMentis?
              </h3>
              <p style={{ color: "#fff", lineHeight: "1.7", opacity: 0.9 }}>
                Ensuring that each placement is not only qualified but also
                aligns with organizational culture and objectives, thereby
                contributing to long-term success of the hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default TalentAcquisition;
