import "./HeroSection.css";

const HeroSection = () => (
  <div className="hero">
    {/* Background Illustration */}
    <div className="hero-bg" />

    {/* Hero Content Container */}
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Our Services</h1>

        <h2 className="hero-subtitle">
          Driving Business Success
          <br />
          Through Innovative Solutions
        </h2>

        <p className="hero-description">
          At NovaMentis, we provide a comprehensive suite of services
          designed to empower your business with the latest technology and
          innovative solutions.
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;
