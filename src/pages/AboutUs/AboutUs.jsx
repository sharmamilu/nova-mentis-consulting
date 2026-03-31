import AboutHero from "../../components/AboutHero/AboutHero";
import Philosophy from "../../components/Philosophy/Philosophy";
import CoreExpertise from "../../components/CoreExpertise/CoreExpertise";
import Offerings from "../../components/DetailedOfferings/Offerings";
import PrinciplesSection from "../../components/PrinciplesSection/PrinciplesSection";
import MissionSection from "../../components/MissionSection/MissionSection";
import Leadership from "../../components/Leadership/Leadership";

const AboutUs = () => {
  return (
    <main style={{ background: "#fff" }}>
      <AboutHero />
      <MissionSection />
      <Leadership />
      <Philosophy />
      <CoreExpertise />
      <Offerings />
      <PrinciplesSection />
    </main>
  );
};

export default AboutUs;
