import "./AboutHero.css";

const AboutHero = () => (
  <header className="about-hero">
    <div className="hero-img-layer"></div>
    <div className="hero-img-overlay"></div>
    <div className="about-hero-bg">
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-orb orb-3"></div>
      <div className="hero-glass-bar"></div>
    </div>
    <div className="about-hero-content">
      <div className="tagline">People, Technology and Business Solutions</div>
      <h1>
        NovaMentis <span style={{ color: "#d4a24c" }}>Consulting</span>
      </h1>
      <div className="subtitle">
        Empowering Businesses with Innovative Solutions
      </div>
      <p className="intro-text">
        At NovaMentis Consulting, we are dedicated to propelling businesses
        forward with our comprehensive expertise in People, Technology and
        Business Solutions. Our suite of services and products is meticulously
        crafted around these pivotal areas, which form the backbone of numerous
        successful enterprises worldwide.
      </p>
    </div>
  </header>
);

export default AboutHero;
