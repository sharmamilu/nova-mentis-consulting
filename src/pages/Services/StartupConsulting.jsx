import ServiceHero from "../../components/ServiceHero/ServiceHero";
import AnimatedCards from "../../components/AnimatedCards/AnimatedCards";
import CtaSection from "../../components/CtaSection/CtaSection";

const StartupConsulting = () => {
  const startupSteps = [
    {
      title: "Vision & Objectives",
      points: [
        {
          label: "Vision Clarification",
          text: "We meet with key stakeholders to articulate the core mission, long-term goals, and foundational values of the new venture.",
        },
        {
          label: "Identify Key Drivers",
          text: "Pinpointing whether the launch is driven by market demand, innovation, or strategic diversification.",
        },
      ],
    },
    {
      title: "Feasibility Analysis",
      points: [
        {
          label: "Market Intelligence",
          text: "Gathering quantitative and qualitative data on industry trends, target audiences, and the competitive landscape.",
        },
        {
          label: "Viability Reports",
          text: "Detailed SWOT analysis to assess profitability, operational requirements, and potential risks.",
        },
      ],
    },
    {
      title: "Business Planning",
      points: [
        {
          label: "Model Development",
          text: "Selecting the optimal business model—B2B, B2C, subscription, or e-commerce—that aligns with market needs.",
        },
        {
          label: "Roadmap Creation",
          text: "Drafting comprehensive business plans that outline concepts, financial projections, and clear KPIs for tracking success.",
        },
      ],
    },
    {
      title: "Legal & Compliance",
      points: [
        {
          label: "Entity Selection",
          text: "Advising on the ideal legal structure (LLC, Corporation, etc.) based on liability, taxes, and operational flexibility.",
        },
        {
          label: "Registrations",
          text: "Navigating the maze of permits, licenses, and local/state/federal regulations to ensure 100% compliance.",
        },
      ],
    },
    {
      title: "Funding & Finance",
      points: [
        {
          label: "Capital Strategies",
          text: "Exploring bootstrapping, angel investment, venture capital, and crowdfunding to fuel growth.",
        },
        {
          label: "Financial Modeling",
          text: "Building robust models for cash flow, expense tracking, and pro-forma income statements.",
        },
      ],
    },
    {
      title: "Operational Setup",
      points: [
        {
          label: "Systems Architecture",
          text: "Developing end-to-end processes for supply chain, service delivery, and customer support.",
        },
        {
          label: "Tech Stack",
          text: "Recommending scalable CRM, project management, and financial tools to power daily operations.",
        },
      ],
    },
    {
      title: "Marketing & Branding",
      points: [
        {
          label: "Brand Identity",
          text: "Crafting resonant brand messaging, logo design, and a unique value proposition (UVP) that sticks.",
        },
        {
          label: "Launch Strategy",
          text: "Digital marketing and PR campaigns built to generate pre-launch anticipation and immediate engagement.",
        },
      ],
    },
    {
      title: "Strategic Alliances",
      points: [
        {
          label: "Networking",
          text: "Leveraging our broad industry network to connect startups with critical suppliers and industry leaders.",
        },
        {
          label: "Mentorship",
          text: "Forging strategic partnerships and mentorship links to navigate the early-stage hurdles with expert guidance.",
        },
      ],
    },
    {
      title: "Launch & Execution",
      points: [
        {
          label: "Readiness Audit",
          text: "Final prep across operations, marketing materials, and customer touchpoints to ensure a flawless debut.",
        },
        {
          label: "Live Support",
          text: "On-the-ground coordination during launch day to troubleshoot issues and maintain momentum.",
        },
      ],
    },
    {
      title: "Post-Launch Growth",
      points: [
        {
          label: "Feedback Loops",
          text: "Analyzing customer data and stakeholder feedback to refine processes and product-market fit.",
        },
        {
          label: "Scale Advisory",
          text: "Continued strategic support, performance reviews, and pivoting strategies for sustainable long-term expansion.",
        },
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Startup"
        accentTitle="Development"
        desc="From ideation to market entry, we guide entrepreneurs through the complex journey of business formation. Turn your vision into a thriving, scalable enterprise with our seasoned strategic advisory."
      />

      <section style={{ padding: "100px 32px", background: "#f8fbff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div>
            <h4
              style={{
                color: "#1a6fbf",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              Core Expertise
            </h4>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                color: "#0e2a54",
                fontSize: "var(--text-section)",
                fontWeight: "var(--w-bold)",
                marginBottom: "24px",
                lineHeight: "var(--leading-tight)",
              }}
            >
              Empowering the Next Generation of{" "}
              <span style={{ color: "#1a6fbf" }}>Innovators</span>
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
              We are dedicated business consultants specializing in helping
              organizations successfully establish and grow. Our approach
              combines market intelligence with operational excellence.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              {[
                { t: "Funding Strategies", d: "VC & Angel prep" },
                { t: "Legal Regulatory", d: "Entity formation" },
                { t: "Business Plans", d: "Vision & Mission" },
                { t: "Market Research", d: "Competitor analysis" },
              ].map((item) => (
                <div key={item.t}>
                  <div
                    style={{
                      color: "#0e2a54",
                      fontWeight: "800",
                      marginBottom: "4px",
                    }}
                  >
                    {item.t}
                  </div>
                  <div
                    style={{
                      color: "#1a6fbf",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {item.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: "#0e2a54",
              padding: "50px",
              borderRadius: "32px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                fontSize: "150px",
                fontWeight: "900",
                opacity: 0.05,
                pointerEvents: "none",
              }}
            >
              NOVA
            </div>
            <h3
              style={{
                fontFamily: "Outfit",
                fontSize: "28px",
                color: "#f0c040",
                marginBottom: "20px",
              }}
            >
              The Principal's Edge
            </h3>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.7",
                opacity: 0.9,
                marginBottom: "30px",
                fontStyle: "italic",
              }}
            >
              "Our mission is to empower global organizations by integrating
              cutting-edge technology with strategic human capital management. We
              strive to be the catalyst for growth for start-ups and established
              enterprises alike."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #1a6fbf, #0e2a54)",
                  border: "2px solid #f0c040",
                }}
              ></div>
              <div>
                <div style={{ fontWeight: "700", fontSize: "18px" }}>
                  Kiran Virupaksha
                </div>
                <div style={{ fontSize: "14px", opacity: 0.6 }}>MD & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedCards
        items={startupSteps}
        title="10-Step Startup"
        subtitle="A multifaceted approach combining strategic planning, operational setup, and market expertise to ensure your venture scales from day one."
      />

      <CtaSection />
    </main>
  );
};

export default StartupConsulting;
