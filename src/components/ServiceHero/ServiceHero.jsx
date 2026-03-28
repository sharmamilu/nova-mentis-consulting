import "./ServiceHero.css";

const ServiceHero = ({ title, accentTitle, desc, bgImage }) => (
  <header className="service-hero">
    {bgImage && (
      <div
        className="service-hero-img-layer"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    )}
    <div className="service-orb orb-left"></div>
    <div className="service-hero-overlay"></div>
    <div className="service-hero-content">
      <h1>
        {title} <span className="accent">{accentTitle}</span>
      </h1>
      <p className="intro-para">{desc}</p>
    </div>
  </header>
);

export default ServiceHero;
