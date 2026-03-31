import React, { useEffect, useRef } from "react";
import "./Clients.css";

const ClientHero = () => (
  <header className="client-hero">
    <div className="hero-img-layer"></div>
    <div className="hero-img-overlay"></div>
    <div className="client-hero-bg">
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-orb orb-3"></div>
      <div className="hero-glass-bar"></div>
    </div>
    <div className="client-hero-content">
      <div className="tagline">Our Partners in Success</div>
      <h1>
        Our <span style={{ color: "#d4a24c" }}>Clients</span>
      </h1>
      <div className="subtitle">
        Trusted by Industry Leaders Worldwide
      </div>
      <p className="intro-text">
        At NovaMentis Consulting, we take pride in the diverse range of clients we have served. 
        From global corporations to innovative startups, our expertise across People, 
        Technology, and Business Solutions has helped businesses achieve their strategic goals.
      </p>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </div>
  </header>
);

const StatsSection = () => {
  const stats = [
    { value: "52+", label: "Global Clients" },
    { value: "150+", label: "Projects Delivered" },
    { value: "12+", label: "Industry Verticals" },
    { value: "98%", label: "Client Retension" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item reveal">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "NovaMentis transformed our HR processes completely. Their strategic approach and attention to detail helped us scale our team by 40% in just one year.",
      author: "Aditi Sharma",
      role: "Founder, TechScale Solutions",
    },
    {
      text: "The Infoveave implementation was a game-changer for our data visualization needs. We now have real-time insights that drive our decision-making.",
      author: "Michael Chen",
      role: "CTO, Global Dynamics",
    },
    {
      text: "Professional, efficient, and deeply knowledgeable. They aren't just consultants; they are true partners in our business growth.",
      author: "Sanjay Reddy",
      role: "Managing Director, Landmark Group",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Client Voices</h2>
          <p className="section-subtitle">What our partners say about their experience with NovaMentis.</p>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{review.text}</p>
              <div className="tester-info">
                <div className="tester-name">{review.author}</div>
                <div className="tester-role">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Eagerly import all client logos from assets/client-list
  const clientModules = import.meta.glob("../../assets/client-list/*.png", {
    eager: true,
  });

  const clientLogos = Object.entries(clientModules).map(([path, module]) => {
    const name = path.split("/").pop().replace(".png", "");
    const formattedName = name
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();

    return {
      name: formattedName,
      src: module.default,
    };
  }).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="clients-page">
      <ClientHero />
      
      <StatsSection />

      <section className="clients-grid-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Valued Partnerships</h2>
            <p className="section-subtitle">
              We've had the privilege of working with some of the most forward-thinking companies in various sectors.
            </p>
          </div>
          <div className="clients-grid">
            {clientLogos.map((client, index) => (
              <div 
                key={client.name} 
                className="client-card reveal"
                style={{ transitionDelay: `${(index % 8) * 0.05}s` }}
              >
                <div className="client-logo-wrapper">
                  <img src={client.src} alt={`${client.name} logo`} />
                </div>
                <div className="client-info">
                  <span className="client-name">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="cta-section reveal">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Transform Your Business?</h2>
            <p>Join our growing list of satisfied partners and take your company to the next level.</p>
            <a href="/contact" className="cta-button">Partner With Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clients;
