import "./Leadership.css";

const Leadership = () => {
  return (
    <section id="leadership" className="leadership-section">
      <div className="leadership-container">
        <div className="leadership-grid">
          <div className="leader-identity-side">
            <div className="identity-badge-frame">
              <div className="abstract-initials">KV</div>
              <div className="badge-glow"></div>
            </div>
            
            <div className="leader-title-block">
              <div className="badge-line"></div>
              <h3 className="leader-name">Kiran Virupaksha</h3>
              <p className="leader-role">MD & CEO, NovaMentis</p>
            </div>
          </div>

          <div className="leader-content-side">
            <div className="content-eyebrow">LEADERSHIP</div>
            <h2 className="content-title">
              Bridging the Gap Between <span className="accent">Human Potential</span> and Technical Precision
            </h2>
            
            <div className="leader-bio-block">
              <p className="lead-text">
                At the helm is MD & CEO, Kiran Virupaksha, who brings over two decades of multifaceted experience across diverse global cultures and industries. 
              </p>
              <p>
                His career is defined by a unique ability to bridge the gap between human potential and technical precision, with deep expertise in Human Resource Management, Data Analytics, and IT Solutions. As a seasoned leader with a strong foundation in Business Management, Kiran excels in Start-up Consulting, helping emerging ventures navigate the complexities of scaling and operational excellence.
              </p>
              <p>
                Under his guidance, our leadership team leverages 20+ years of high-impact experience to transform organizational performance. By blending sophisticated Business Consulting with cutting-edge HR Innovation, the team ensures that people strategies are data-driven and globally scalable. From talent acquisition to complex digital transformations, our leadership doesn't just manage change—they harness technology and training to build agile, future-ready workforces across various domains worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
