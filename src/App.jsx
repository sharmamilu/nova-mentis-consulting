import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ServiceTabs from "./components/ServiceTabs/ServiceTabs";
import ServiceCards from "./components/ServiceCards/ServiceCards";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";

import BusinessConsulting from "./pages/Services/BusinessConsulting";
import ServicesOverview from "./pages/Services/ServicesOverview";
import HrConsulting from "./pages/Services/HrConsulting";
import StartupConsulting from "./pages/Services/StartupConsulting";
import TalentAcquisition from "./pages/Services/TalentAcquisition";
import TrainingServices from "./pages/Services/TrainingServices";
import ContactUs from "./pages/ContactUs/ContactUs";
import Infoveave from "./pages/Infoveave/Infoveave";
import Clients from "./pages/Clients/Clients";

import { SERVICES } from "./data/servicesData";

// Helper to scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const HomePage = ({ activeTab, onTabChange, services }) => (
  <>
    <HeroSection />
    <ServiceTabs activeTab={activeTab} onTabChange={onTabChange} />
    <ServiceCards services={services} activeTab={activeTab} />
    <FeaturesSection />
    <CtaSection />
  </>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("All Services");

  const filteredServices =
    activeTab === "All Services"
      ? SERVICES
      : SERVICES.filter((s) => s.tab === activeTab);

  return (
    <BrowserRouter>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          background: "#fff",
        }}
      >
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                activeTab={activeTab}
                onTabChange={setActiveTab}
                services={filteredServices}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                activeTab={activeTab}
                onTabChange={setActiveTab}
                services={filteredServices}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route
            path="/services/business-consulting"
            element={<BusinessConsulting />}
          />
          <Route path="/services/hr-consulting" element={<HrConsulting />} />
          <Route
            path="/services/startup-consulting"
            element={<StartupConsulting />}
          />
          <Route
            path="/services/talent-acquisition"
            element={<TalentAcquisition />}
          />
          <Route
            path="/services/training-services"
            element={<TrainingServices />}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/infoveave" element={<Infoveave />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div
                style={{
                  padding: "160px 24px",
                  textAlign: "center",
                  background: "#f8fbff",
                  minHeight: "60vh",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Outfit",
                    color: "#0e2a54",
                    fontSize: "32px",
                    marginBottom: "20px",
                  }}
                >
                  Page <span style={{ color: "#f0c040" }}>Not Found</span>
                </h2>
                <p style={{ color: "#667", marginBottom: "40px" }}>
                  The resource you're looking for might have moved or doesn't
                  exist.
                </p>
                <a
                  href="/"
                  style={{ textDecoration: "none" }}
                  className="cta-btn"
                >
                  Back to Home
                </a>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
