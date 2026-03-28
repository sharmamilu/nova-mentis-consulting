import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import CtaSection from "../../components/CtaSection/CtaSection";

const BusinessConsulting = () => {
  const businessSections = [
    {
      title: "Strategic Consulting",
      items: [
        {
          label: "Market Analysis",
          text: "Assessing market trends and competitive landscapes.",
        },
        {
          label: "Business Strategy Development",
          text: "Crafting long-term strategies to achieve organizational goals.",
        },
        {
          label: "Change Management",
          text: "Guiding organizations through transitions or transformations.",
        },
      ],
    },
    {
      title: "Operations Consulting",
      items: [
        {
          label: "Process Improvement",
          text: "Analyzing and optimizing business processes for efficiency.",
        },
        {
          label: "Supply Chain",
          text: "Enhancing logistics, inventory management, and supplier relations.",
        },
        {
          label: "Cost Reduction",
          text: "Identifying areas to cut costs without sacrificing quality.",
        },
      ],
    },
    {
      title: "Financial Consulting",
      items: [
        {
          label: "Financial Analysis",
          text: "Evaluating financial health through metrics and ratios.",
        },
        {
          label: "Budgeting and Forecasting",
          text: "Developing budgets and predicting future financial performance.",
        },
        {
          label: "Investment Strategy",
          text: "Advising on asset allocation and investment opportunities.",
        },
      ],
    },
    {
      title: "Marketing Consulting",
      items: [
        {
          label: "Brand Strategy",
          text: "Developing brand identity and positioning.",
        },
        {
          label: "Digital Marketing",
          text: "Implementing online strategies, including SEO and social media.",
        },
        {
          label: "Customer Insights",
          text: "Using data to understand customer behavior and preferences.",
        },
      ],
    },
    {
      title: "HR Consulting",
      items: [
        {
          label: "Talent Management",
          text: "Developing strategies for recruitment, retention, and training.",
        },
        {
          label: "Organizational Development",
          text: "Improving workplace culture and employee engagement.",
        },
        {
          label: "Compensation",
          text: "Designing competitive salary and benefits packages.",
        },
      ],
    },
    {
      title: "IT Consulting",
      items: [
        {
          label: "Technology Strategy",
          text: "Aligning IT with business goals.",
        },
        {
          label: "Cybersecurity",
          text: "Protecting data and systems from threats.",
        },
        {
          label: "Systems Implementation",
          text: "Managing the integration of software and technologies.",
        },
      ],
    },
    {
      title: "Sustainability Consulting",
      items: [
        {
          label: "CSR",
          text: "Developing strategies for ethical business practices.",
        },
        {
          label: "Sustainability Reporting",
          text: "Helping businesses measure environmental impact.",
        },
        {
          label: "Energy Efficiency",
          text: "Advising on reducing energy consumption and waste.",
        },
      ],
    },
    {
      title: "Project Management",
      items: [
        {
          label: "Project Planning",
          text: "Defining project scope, objectives and deliverables.",
        },
        {
          label: "Risk Management",
          text: "Identifying and mitigating potential risks.",
        },
        {
          label: "Performance Tracking",
          text: "Monitoring project progress and outcomes.",
        },
      ],
    },
    {
      title: "Advisory Services",
      items: [
        {
          label: "Ongoing Insight",
          text: "Providing advice to help businesses navigate challenges.",
        },
        {
          label: "Opportunity Assessment",
          text: "Identifying and seizing new market opportunities.",
        },
        {
          label: "Problem Solving",
          text: "Addressing immediate business obstacles with expert perspective.",
        },
      ],
    },
  ];

  return (
    <main>
      <ServiceHero
        title="Business"
        accentTitle="Consulting"
        desc="Expert strategic guidance to help organizations develop and implement effective strategies for growth and improvement. Our goal is to drive long-term success and adaptability."
      />

      <ServiceDetail sections={businessSections} sectionId="business-details" />

      <CtaSection />
    </main>
  );
};

export default BusinessConsulting;
