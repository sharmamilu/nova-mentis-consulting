import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import CtaSection from "../../components/CtaSection/CtaSection";
import NovaeaveImg from "../../assets/novaeave.png";
import "./Infoveave.css";

const growthData = [
  { name: "Jan", revenue: 4000, efficiency: 2400 },
  { name: "Feb", revenue: 3000, efficiency: 1398 },
  { name: "Mar", revenue: 2000, efficiency: 9800 },
  { name: "Apr", revenue: 2780, efficiency: 3908 },
  { name: "May", revenue: 1890, efficiency: 4800 },
  { name: "Jun", revenue: 2390, efficiency: 3800 },
  { name: "Jul", revenue: 3490, efficiency: 4300 },
];

const distributionData = [
  { name: "Finance", value: 400 },
  { name: "Retail", value: 300 },
  { name: "Healthcare", value: 300 },
  { name: "Mfg", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Infoveave = () => {
  const capabilities = [
    {
      title: "Data Integration & Management",
      icon: "🔌",
      points: [
        {
          label: "Data Integration",
          desc: "Integrate from multiple sources like databases, cloud services, and APIs into a centralized repository.",
        },
        {
          label: "Cleansing & Transformation",
          desc: "Clean, transform, and manipulate raw data for analysis using filtering and enriching tools.",
        },
        {
          label: "Data Governance",
          desc: "Advanced access controls and data security measures to ensure sensitive information protection.",
        },
      ],
    },
    {
      title: "Visualization & Dashboards",
      icon: "🎨",
      points: [
        {
          label: "Customizable Dashboards",
          desc: "Drag-and-drop interactive dashboards for real-time visualization tailored to business needs.",
        },
        {
          label: "Multiple Visual Options",
          desc: "100+ chart types (bar, line, heat maps) to display KPIs, trends, and critical metrics.",
        },
        {
          label: "Responsive & Shareable",
          desc: "Share dashboards with stakeholders via links or embed them seamlessly in other applications.",
        },
      ],
    },
    {
      title: "Workflow Automation",
      icon: "⚙️",
      points: [
        {
          label: "Automate Tasks",
          desc: "Create workflows that automate routine processes, reducing manual effort and improving efficiency.",
        },
        {
          label: "Scheduled Reporting",
          desc: "Automated reporting and alerts to notify users of critical changes or data trends instantly.",
        },
        {
          label: "3rd-Party Integration",
          desc: "Integrate with popular business tools to trigger workflows based on real-time data changes.",
        },
      ],
    },
    {
      title: "Advanced Analytics",
      icon: "🧠",
      points: [
        {
          label: "Predictive Analytics",
          desc: "Support for predictive modeling to forecast trends and outcomes based on historical data.",
        },
        {
          label: "Custom Calculations",
          desc: "Define sophisticated custom metrics and tailored calculations for deep-dive analysis.",
        },
        {
          label: "Data Drill-down",
          desc: "Drill into data layers to get detailed insights and understand underlying patterns.",
        },
      ],
    },
    {
      title: "Collaboration & Reporting",
      icon: "🤝",
      points: [
        {
          label: "Collaborative Features",
          desc: "Collaborate on dashboards, annotate data, and share insights with teams for alignment.",
        },
        {
          label: "Real-time Updates",
          desc: "Ensures data is updated in real time, providing the latest insights to users at all times.",
        },
        {
          label: "Transparent Reporting",
          desc: "Generate and share regular reports with stakeholders to keep everyone aligned on metrics.",
        },
      ],
    },
  ];

  return (
    <main className="infoveave-page">
      <ServiceHero
        title="Infoveave"
        accentTitle="GenAI Analytics"
        desc="Visualize data, automate workflows, and make predictive decisions. The ultimate GenAI-driven platform for smarter dashboards and real-time business intelligence."
        bgImage="/infoveave-hero.png"
      />

      {/* Intro Section */}
      <section className="info-intro">
        <div className="max-container">
          <div className="info-intro-grid">
            <div className="info-intro-text">
              <span className="badge">Next-Gen Dashboards</span>
              <h2>
                Smarter Insights,{" "}
                <span className="gradient-text">Built with GenAI</span>
              </h2>
              <p>
                Infoveave combines data integration, predictive analysis, and
                stunning visualization into a single platform. Use GenAI to
                instantly generate dashboards from your data sources and
                automate routine processes with enterprise-grade precision.
              </p>
              <div className="demo-stats-horizontal">
                <div className="stat">
                  <span>50+</span>
                  <label>Templates</label>
                </div>
                <div className="stat">
                  <span>100+</span>
                  <label>Visuals</label>
                </div>
                <div className="stat">
                  <span>AI</span>
                  <label>Generated</label>
                </div>
              </div>
            </div>

            <div className="live-demo-card">
              <div className="demo-header">
                <div className="status-dot"></div>
                <span>Live System Simulation</span>
              </div>
              <div className="chart-box">
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#1a6fbf"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#1a6fbf"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.05)"
                    />
                    <XAxis dataKey="name" stroke="#99a" fontSize={10} />
                    <YAxis stroke="#99a" fontSize={10} />
                    <Tooltip
                      contentStyle={{
                        background: "#0e2a54",
                        border: "1px solid #1a6fbf",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#1a6fbf"
                      fillOpacity={1}
                      fill="url(#colorRev)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="platform-showcase">
        <div className="max-container showcase-split-grid">
          <div className="showcase-visual">
            <div className="browser-frame">
              <div className="browser-chrome">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="browser-content">
                <img src={NovaeaveImg} alt="Infoveave Dashboard" />
              </div>
            </div>
          </div>
          <div className="showcase-content">
            <span className="badge">Unified Workspace</span>
            <h2>
              The <span className="accent">Infoveave</span> Experience
            </h2>
            <p>
              Our unified interface brings natural language processing and
              complex data science into a singular, beautiful command center.
              Designed for high-impact decision making, it eliminates technical
              barriers to data mastery.
            </p>
            <div className="mini-features">
              <div className="mf-item">
                <span>✓</span> Zero-Code Dashboards
              </div>
              <div className="mf-item">
                <span>✓</span> Multi-Source Hub
              </div>
              <div className="mf-item">
                <span>✓</span> Real-Time Insights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Detailed Capabilities */}
      <section className="detailed-capabilities">
        <div className="max-container">
          <h2 className="section-title">
            Comprehensive <span className="accent">Platform Functions</span>
          </h2>
          <div className="detailed-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="detailed-card">
                <div className="detailed-card-header">
                  <span className="detailed-icon">{cap.icon}</span>
                  <h3>{cap.title}</h3>
                </div>
                <div className="point-list">
                  {cap.points.map((p, pi) => (
                    <div key={pi} className="point-item">
                      <span className="point-bullet"></span>
                      <div>
                        <label>{p.label}</label>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="info-benefits">
        <div className="max-container">
          <div className="benefits-grid">
            <div className="benefits-text">
              <span className="badge">Why Infoveave?</span>
              <h2>
                Platform <span className="accent">Benefits</span>
              </h2>
              <p>
                Infoveave is the choice for industry leaders in Finance,
                Healthcare, and Manufacturing seeking data-driven
                competitiveness.
              </p>
            </div>
            <div className="benefits-cards">
              {[
                {
                  t: "Enhanced Productivity",
                  d: "Focus on strategy rather than manual reporting via intelligent task automation.",
                  i: "⚡",
                },
                {
                  t: "Better Decision-Making",
                  d: "Real-time interactive insights helping organizations move with precision.",
                  i: "🎯",
                },
                {
                  t: "Seamless Scalability",
                  d: "Built to grow as your data landscape expands across the enterprise.",
                  i: "📈",
                },
                {
                  t: "Data Accuracy",
                  d: "Reduced human error through centralized governance and automated workflows.",
                  i: "🛡️",
                },
              ].map((b, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-icon">{b.i}</span>
                  <div>
                    <h4>{b.t}</h4>
                    <p>{b.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Distribution Showcase */}
      <section className="info-distribution">
        <div className="max-container dist-grid">
          <div className="chart-visual">
            <div className="rotating-chart-wrap">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {distributionData.map((e, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="dist-text">
            <h2>
              Seamless <span className="accent">Drill-Down</span>
            </h2>
            <p>
              From macro-trends to micro-data. Infoveave allows you to peel back
              layers of information to understand underlying patterns in
              Healthcare, Finance, and Retail with unprecedented clarity.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default Infoveave;
