import "./PrinciplesSection.css";

const PrinciplesSection = () => (
  <section className="principles-container">
    <div className="principles-header">
      <h2>
        Partnering for <span style={{ color: "#f0c040" }}>Success</span>
      </h2>
      <p>
        At NovaMentis Consulting, we believe in building long-term partnerships
        with our clients. Our collaborative approach ensures that our clients
        are well-equipped to navigate the complexities of the modern business
        environment.
      </p>
    </div>

    {/* The 3 Principles */}
    <div className="principles-list">
      <div className="principle-item">
        <span className="principle-num">01</span>
        <div className="principle-text">
          Understanding the requirements in detail
        </div>
      </div>
      <div className="principle-item">
        <span className="principle-num">02</span>
        <div className="principle-text">
          Stitching together the right solution
        </div>
      </div>
      <div className="principle-item">
        <span className="principle-num">03</span>
        <div className="principle-text">
          Delivering right through the complete cycle flawlessly
        </div>
      </div>
    </div>

    {/* Contact Details Card */}
    <div className="contact-details-box">
      <div className="contact-info-block">
        <h4>NovaMentis IT Consulting India Pvt Ltd</h4>
        <p>
          <strong>Regd office:</strong> No. 224/47, 10th C Main, 1st Block,
          Jayanagar, Bangalore 560011
        </p>
        <p>
          <strong>Website:</strong> www.novamentis.in
        </p>
      </div>
      <div className="contact-info-block">
        <h4>Quick Contact</h4>
        <p>
          <strong>Email:</strong> info@novamentis.in
        </p>
        <p>
          <strong>Phone:</strong> +91 9886109881
        </p>
      </div>
    </div>
  </section>
);

export default PrinciplesSection;
