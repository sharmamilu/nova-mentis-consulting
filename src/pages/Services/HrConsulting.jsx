import ServiceHero from "../../components/ServiceHero/ServiceHero";
import AnimatedCards from "../../components/AnimatedCards/AnimatedCards";
import CtaSection from "../../components/CtaSection/CtaSection";

const HrConsulting = () => {
  const hrItems = [
    {
      title: "Talent Acquisition",
      points: [
        {
          label: "Strategic Sourcing",
          text: "We identify and engage top-tier talent through advanced headhunting, AI-driven candidate discovery, and global networking strategies that allow organizations to access specialized professionals in competitive markets.",
        },
        {
          label: "Executive Search",
          text: "Our executive search methodology combines market intelligence, behavioral assessments, and leadership vetting to ensure that C-suite hires align with both the long-term vision and the cultural DNA of your organization.",
        },
        {
          label: "Onboarding Excellence",
          text: "We design structured onboarding journeys and 30-60-90 day integration frameworks that accelerate productivity, strengthen team alignment, and ensure new leaders deliver impact from day one.",
        },
        {
          label: "Employer Branding",
          text: "Through strategic storytelling, career experience design, and employer brand positioning, we help organizations become magnets for top global talent and emerging innovators.",
        },
      ],
    },
    {
      title: "Organizational Design",
      points: [
        {
          label: "Structural Optimization",
          text: "We redesign reporting structures and operating models to remove inefficiencies, eliminate organizational silos, and accelerate strategic decision-making across teams.",
        },
        {
          label: "Role Definition",
          text: "Clear role architectures and competency frameworks are established to ensure accountability, reduce overlap, and empower employees to deliver measurable business impact.",
        },
        {
          label: "Succession Frameworks",
          text: "Our succession planning models identify future leaders early and build structured development pathways that ensure leadership continuity and resilience.",
        },
        {
          label: "Workforce Planning",
          text: "Using predictive workforce analytics, we help organizations forecast talent needs and align hiring strategies with long-term growth objectives and evolving market demands.",
        },
      ],
    },
    {
      title: "Learning & Development",
      points: [
        {
          label: "Core Upskilling",
          text: "We design targeted learning programs that equip employees with critical digital, analytical, and collaborative skills needed to thrive in the modern business environment.",
        },
        {
          label: "Leadership Evolution",
          text: "High-impact leadership programs help managers transition from operational contributors to strategic leaders capable of guiding teams through complex challenges.",
        },
        {
          label: "Coaching Modules",
          text: "Personalized coaching engagements support high-potential employees and senior executives in refining leadership presence, communication effectiveness, and decision-making skills.",
        },
        {
          label: "Digital Learning Hubs",
          text: "We implement scalable learning ecosystems powered by e-learning platforms, microlearning modules, and analytics that track engagement and knowledge retention.",
        },
      ],
    },
    {
      title: "Compensation & Benefits",
      points: [
        {
          label: "Benchmarking",
          text: "Through comprehensive market benchmarking and compensation analysis, we ensure that salary structures remain competitive across industries and geographic regions.",
        },
        {
          label: "Benefits Design",
          text: "Our benefits strategies prioritize employee well-being by integrating healthcare, mental wellness, flexible work options, and family-focused initiatives.",
        },
        {
          label: "Equity & Incentives",
          text: "We develop performance-linked incentives and equity frameworks that encourage ownership mindset, reward long-term contribution, and retain critical talent.",
        },
        {
          label: "Total Rewards",
          text: "Total rewards frameworks balance financial compensation with recognition programs, career development opportunities, and meaningful workplace experiences.",
        },
      ],
    },
    {
      title: "Performance Management",
      points: [
        {
          label: "KPI Frameworks",
          text: "We design performance measurement systems with clearly defined KPIs aligned to strategic business goals and department-level objectives.",
        },
        {
          label: "Agile Reviews",
          text: "Organizations transition from traditional annual reviews to continuous feedback cycles that encourage learning, improvement, and accountability.",
        },
        {
          label: "Development Pathing",
          text: "Career development roadmaps link performance outcomes with skill advancement and leadership opportunities to drive long-term employee engagement.",
        },
        {
          label: "Accountability Systems",
          text: "Transparent evaluation models and measurable performance standards build a culture where employees take ownership of outcomes and results.",
        },
      ],
    },
    {
      title: "Employee Engagement",
      points: [
        {
          label: "Sentiment Analysis",
          text: "We conduct in-depth engagement surveys and pulse assessments to uncover workforce sentiment, identify hidden challenges, and guide leadership action.",
        },
        {
          label: "Culture Architecture",
          text: "Through cultural diagnostics and leadership alignment, we help organizations design workplace cultures that inspire collaboration and innovation.",
        },
        {
          label: "Wellness Initiatives",
          text: "Holistic wellness strategies promote physical, emotional, and financial well-being, creating a supportive and sustainable workplace environment.",
        },
        {
          label: "Retention Blueprints",
          text: "Data-driven retention strategies help companies identify flight risks early and build career pathways that keep high performers engaged.",
        },
      ],
    },
    {
      title: "Diversity & Inclusion (DEI)",
      points: [
        {
          label: "Inclusive Architecture",
          text: "We build inclusive frameworks that ensure equal participation, representation, and opportunity across every level of the organization.",
        },
        {
          label: "Bias Mitigation",
          text: "Through targeted training and process redesign, we help organizations identify and eliminate unconscious bias in hiring, promotions, and evaluations.",
        },
        {
          label: "Metrics & Transparency",
          text: "Clear diversity metrics and accountability dashboards allow leadership teams to measure progress and maintain transparency.",
        },
        {
          label: "Global Sensitivity",
          text: "Our DEI strategies are tailored to cultural nuances and legal frameworks across different countries and regions.",
        },
      ],
    },
    {
      title: "Change Management",
      points: [
        {
          label: "Strategic Communication",
          text: "We craft clear change narratives that communicate purpose, align leadership messaging, and ensure employees understand the vision behind transformation.",
        },
        {
          label: "Transition Support",
          text: "Employees and leaders receive coaching and transition support during restructuring, mergers, or operational changes.",
        },
        {
          label: "Impact Analysis",
          text: "Comprehensive impact assessments identify potential friction points and allow organizations to implement mitigation strategies early.",
        },
        {
          label: "Crisis Navigation",
          text: "Our change specialists help organizations maintain stability and employee confidence during uncertain or high-pressure transitions.",
        },
      ],
    },
    {
      title: "HR Technology (HRIS)",
      points: [
        {
          label: "Platform Selection",
          text: "We evaluate HRIS, payroll, and talent management platforms to recommend solutions that align with your operational scale and technology ecosystem.",
        },
        {
          label: "Process Automation",
          text: "Automation tools streamline repetitive HR tasks, enabling HR teams to focus on strategic initiatives and employee experience.",
        },
        {
          label: "Data Analytics",
          text: "Advanced HR analytics uncover insights related to workforce productivity, hiring efficiency, turnover patterns, and employee engagement.",
        },
        {
          label: "Integration Management",
          text: "Seamless integration ensures HR systems connect efficiently with finance, operations, and IT infrastructure.",
        },
      ],
    },
    {
      title: "Compliance & Labor",
      points: [
        {
          label: "Regulatory Audits",
          text: "We conduct detailed compliance audits to ensure organizations adhere to regional labor laws, employment regulations, and governance standards.",
        },
        {
          label: "Policy Development",
          text: "Comprehensive policy frameworks and employee handbooks are developed to create transparency and consistency across the organization.",
        },
        {
          label: "Labor Relations",
          text: "Expert advisory supports organizations in managing union relationships, negotiations, and collective agreements effectively.",
        },
        {
          label: "Risk Mitigation",
          text: "Proactive compliance and legal risk management strategies protect organizations from disputes, penalties, and workplace litigation.",
        },
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="HR"
        accentTitle="Consulting"
        desc="Optimizing your organization’s human resources practices to foster a positive workplace culture and ensure world-class productivity. From recruitment to performance audits, we help you manage your most valuable asset: People."
      />

      <AnimatedCards
        items={hrItems}
        title="HR Practice"
        subtitle="Explore our comprehensive 10-pillar framework for modern human resource management, designed for global scalability and local compliance."
      />

      <section
        style={{
          padding: "100px 32px",
          background: "#f8fbff",
          borderTop: "1px solid #eef4f8",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "60px",
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
              The Power of <span style={{ color: "#1a6fbf" }}>HR Audits</span>
            </h2>
            <p
              style={{
                color: "#556",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-base)",
                marginBottom: "32px",
              }}
            >
              Conducting regular HR audits helps organizations enhance their HR
              processes, mitigate risks, and foster a positive work environment.
              Our systematic review covers recruitment, employee relations, and
              core compliance with global standards.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              {[
                "Legal Compliance",
                "Recruitment Vetting",
                "Compensation Audit",
                "Training Assessment",
                "Retention Analysis",
                "Policy Review",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#0e2a54",
                    fontWeight: "700",
                    fontSize: "15px",
                  }}
                >
                  <span style={{ color: "#f0c040", fontSize: "18px" }}>✓</span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              flex: 1,
              height: "450px",
              background: "#0e2a54",
              borderRadius: "32px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: "#fff",
                opacity: 0.1,
                fontSize: "100px",
                fontWeight: "900",
                position: "absolute",
                top: "20px",
              }}
            >
              ANALYSIS
            </div>
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
                maxWidth: "400px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#f0c040",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "22px",
                  margin: "0 0 12px 0",
                  fontFamily: "Outfit",
                }}
              >
                Deep-Dive HR Insights
              </h4>
              <p
                style={{
                  margin: 0,
                  color: "#fff",
                  opacity: 0.8,
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Talk to our experts for a deeper look at how data analytics can
                transform your human resource performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default HrConsulting;
