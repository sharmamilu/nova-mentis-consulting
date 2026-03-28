import AboutHero from "../../components/AboutHero/AboutHero";
import Philosophy from "../../components/Philosophy/Philosophy";
import CoreExpertise from "../../components/CoreExpertise/CoreExpertise";
import Offerings from "../../components/DetailedOfferings/Offerings";
import PrinciplesSection from "../../components/PrinciplesSection/PrinciplesSection";

const AboutUs = () => {
  return (
    <main style={{ background: "#fff" }}>
      <AboutHero />
      <Philosophy />
      <CoreExpertise />
      <Offerings />
      <PrinciplesSection />
    </main>
  );
};

export default AboutUs;
