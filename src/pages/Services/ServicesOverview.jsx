import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import CtaSection from "../../components/CtaSection/CtaSection";
import { SERVICES } from "../../data/servicesData";

const ServicesOverview = () => {
  return (
    <main>
      <ServiceHero
        title="Our"
        accentTitle="Services"
        desc="At NovaMentis, we bridge the gap between complex challenges and sustainable growth. Explore our triple-pillar approach focusing on People, Technology, and Strategic Business Solutions."
      />

      <section style={{ padding: "80px 0", background: "#f8fbff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontFamily: "Outfit",
              color: "#0e2a54",
              fontSize: "36px",
              fontWeight: "800",
              marginBottom: "20px",
            }}
          >
            A Glimpse Into{" "}
            <span style={{ color: "#1a6fbf" }}>Our Expertise</span>
          </h2>
          <p
            style={{
              color: "#667",
              fontSize: "18px",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Our comprehensive suite of products and services is meticulously
            crafted around the pivotal areas that form the backbone of
            successful enterprises worldwide.
          </p>
        </div>

        <ServiceCards services={SERVICES} activeTab="All Services" />
      </section>

      <CtaSection />
    </main>
  );
};

export default ServicesOverview;
