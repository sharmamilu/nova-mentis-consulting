import ServiceHero from "../../components/ServiceHero/ServiceHero";
import AnimatedCards from "../../components/AnimatedCards/AnimatedCards";
import CtaSection from "../../components/CtaSection/CtaSection";

const TrainingServices = () => {
  const trainingModules = [
    {
      title: "Leadership & Management",
      points: [
        {
          label: "Leadership Development",
          text: "Building essential strategic thinking, decision-making, and emotional intelligence.",
        },
        {
          label: "Executive Coaching",
          text: "Personalized coaching for senior executives to enhance leadership capabilities.",
        },
        {
          label: "Change Management",
          text: "Equipping leaders with skills to manage organizational change effectively.",
        },
      ],
    },
    {
      title: "Employee Skill Development",
      points: [
        {
          label: "Technical Skills",
          text: "Focused training on specific tools, CRM systems, and data analysis software.",
        },
        {
          label: "Soft Skills Training",
          text: "Interpersonal communication, teamwork, and conflict resolution expertise.",
        },
        {
          label: "Sales Excellence",
          text: "Specialized techniques for relationship management and service excellence.",
        },
      ],
    },
    {
      title: "Compliance & Regulatory",
      points: [
        {
          label: "Health & Safety",
          text: "Workplace standards, emergency procedures, and health regulations compliance.",
        },
        {
          label: "DEI Workshops",
          text: "Promoting awareness of diversity, inclusivity, and cultural competency.",
        },
        {
          label: "Data Privacy",
          text: "Educating employees on laws such as GDPR and sensitive info handling.",
        },
      ],
    },
    {
      title: "Project Management",
      points: [
        {
          label: "P.M. Fundamentals",
          text: "Mastering Agile, Scrum, and basic project methodologies for daily efficiency.",
        },
        {
          label: "Advanced Techniques",
          text: "Risk management, budgeting, and stakeholder communication for senior PMs.",
        },
        {
          label: "Certification Prep",
          text: "Focussed STUDY for credentials including PMP and PRINCE2 exams.",
        },
      ],
    },
    {
      title: "Change Management (Advanced)",
      points: [
        {
          label: "Resistance Management",
          text: "Equipping teams with tools to navigate and mitigate friction points.",
        },
        {
          label: "Agile Change",
          text: "Methods for implementing change swiftly, flexibly, and collaboratively.",
        },
      ],
    },
    {
      title: "Performance Management",
      points: [
        {
          label: "Goal Setting & KPIs",
          text: "Training on appraisal processes and constructive feedback techniques.",
        },
        {
          label: "Engagement Strategies",
          text: "Motivation, job satisfaction, and long-term workforce retention tactics.",
        },
      ],
    },
    {
      title: "Team Building",
      points: [
        {
          label: "Team Dynamics",
          text: "Experiential learning workshops to enhance team cohesion and communication.",
        },
        {
          label: "Virtual Collaboration",
          text: "Best practices for remote team productivity using digital communication tools.",
        },
      ],
    },
    {
      title: "Customer Experience",
      points: [
        {
          label: "Journey Mapping",
          text: "Analyzing the client journey from initial contact to post-purchase support.",
        },
        {
          label: "CRM Mastery",
          text: "Ensuring effective use of CRM systems to manage global customer data.",
        },
      ],
    },
    {
      title: "E-Learning Solutions",
      points: [
        {
          label: "Custom Modules",
          text: "Bespoke online training tailored to your specific organizational needs.",
        },
        {
          label: "Webinars & Workshops",
          text: "Live interactive virtual sessions for real-time remote upskilling.",
        },
      ],
    },
    {
      title: "Assessment & Certification",
      points: [
        {
          label: "Skill-Gap Audits",
          text: "Identifying internal deficiencies to tailor training programs effectively.",
        },
        {
          label: "Corporate Credibility",
          text: "Recognized certification programs that add value to professional qualifications.",
        },
      ],
    },
    {
      title: "Continuous L&D",
      points: [
        {
          label: "Learning Pathways",
          text: "Structured internal roadmaps to guide diverse skill development.",
        },
        {
          label: "Mentorship Initiatives",
          text: "Connecting veterans with new talent for seamless knowledge transfer.",
        },
      ],
    },
    {
      title: "Tailored Training",
      points: [
        {
          label: "Bespoke Development",
          text: "Working with you to design programs for your specific culture and challenges.",
        },
        {
          label: "Post-Evaluation",
          text: "Measuring ROI and effectiveness through performance metrics and feedback.",
        },
      ],
    },
    {
      title: "Student Specializations",
      points: [
        {
          label: "Personalized Paths",
          text: "Structured progress markers based on a student’s current proficiency level.",
        },
        {
          label: "Adaptive Content",
          text: "Technology-driven difficulty adjustment based on real-time performance.",
        },
        {
          label: "Flexible Modalities",
          text: "A mix of videos, interactive simulations, and in-person workshops.",
        },
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Training"
        accentTitle="Services"
        desc="Empowering organizations to build a skilled, motivated, and engaged team capable of achieving corporate goals through comprehensive upskilling and modern learning solutions."
      />

      <AnimatedCards
        items={trainingModules}
        title="The Global"
        subtitle="A versatile portfolio of programs helping organizations and educational institutions improve workforce skills and overall performance."
      />

      {/* Considerations Section */}
      <section
        style={{
          padding: "100px 32px",
          background: "#f8fbff",
          borderTop: "1px solid #eef4f8",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                color: "#0e2a54",
                fontSize: "var(--text-section)",
                fontWeight: "var(--w-bold)",
              }}
            >
              Key <span style={{ color: "#1a6fbf" }}>Considerations</span>
            </h2>
            <p
              style={{
                color: "#667",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
              }}
            >
              Our commitment to measurable outcomes and flexible delivery.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
            }}
          >
            {[
              {
                t: "Needs Assessment",
                d: "Thorough audits to ensure programs align perfectly with your strategic business goals.",
              },
              {
                t: "Flexible Delivery",
                d: "Blended learning with VILT, in-person workshops, and self-paced on-demand digital modules.",
              },
              {
                t: "Measurable ROI",
                d: "Clear objectives and metrics to evaluate success and empower data-driven decisions.",
              },
            ].map((item) => (
              <div
                key={item.t}
                style={{
                  background: "#fff",
                  padding: "40px",
                  borderRadius: "24px",
                  border: "1px solid #eef4f8",
                  textAlign: "center",
                }}
              >
                <h4
                  style={{
                    color: "#0e2a54",
                    fontFamily: "Outfit",
                    fontSize: "20px",
                    marginBottom: "16px",
                  }}
                >
                  {item.t}
                </h4>
                <p
                  style={{ color: "#556", fontSize: "15px", lineHeight: "1.7" }}
                >
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default TrainingServices;
