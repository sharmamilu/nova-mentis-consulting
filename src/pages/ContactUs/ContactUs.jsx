import { useState } from "react";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    role: "",
    service: "",
    workforce: "",
    timeline: "",
    contactMethod: "Email",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Business Consulting",
    "HR Consulting",
    "Startup Development",
    "Talent Acquisition",
    "Training & Development",
    "Corporate Strategy",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Premium Inquiry Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        role: "",
        service: "",
        workforce: "",
        timeline: "",
        contactMethod: "Email",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="contact-page">
      <ServiceHero
        title="Bespoke"
        accentTitle="Consultation"
        desc="Connect with NovaMentis experts to discuss high-impact solutions for your Organization. Our specialized team is ready to analyze your unique challenges."
      />

      <section className="contact-main">
        <div className="max-container contact-grid">
          {/* Left: Contact Info & Map Card */}
          <div className="contact-details-side">
            <div className="info-card premium-shadow">
              <h3>Global Connect</h3>
              <div className="info-item">
                <span className="info-icon">✉</span>
                <div>
                  <label>Official Email</label>
                  <p>kiran@novamentis.in</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <label>Direct Advisory</label>
                  <p>+91 9886109881</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <label>Corporate Office</label>
                  <p>
                    No. 224/47, 10th C Main, 1st Block, Jayanagar, Bangalore
                    560011
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Styled Map */}
            <div className="map-container-wrapper glass-border">
              <div className="map-glass-overlay">
                <h4>Experience Excellence</h4>
                <p>Located in the heart of Jayanagar, Bangalore</p>
              </div>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6655160533587!2d77.5841453148215!3d12.92275729088686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150824b22383%3A0xe7819f0742f15e8!2s10th%20C%20Main%20Rd%2C%201st%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560011!5e0!3m2!1sen!2sin!4v1654000000000!5m2!1sen!2sin"
                className="google-map"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Comprehensive Form */}
          <div className="contact-form-side premium-form">
            <div className="form-container">
              <div className="form-header">
                <div className="form-badge">Request a Consultation</div>
                <h2>Project Discovery</h2>
                <p>
                  Provide detailed context to accelerate our advisory engagement
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="section-label">Personnel Details</div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <div className="input-wrap">
                      <span className="input-icon">👤</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g., John Smith"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Work Email</label>
                    <div className="input-wrap">
                      <span className="input-icon">✉</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g., john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <div className="input-wrap">
                      <span className="input-icon">📞</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Job Title / Role</label>
                    <div className="input-wrap">
                      <span className="input-icon">💼</span>
                      <input
                        type="text"
                        name="role"
                        placeholder="e.g., Managing Director"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="section-label">Organization Context</div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Organization"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Website</label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://..."
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="section-label">Engagement Scope</div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Service Area</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Implementation Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Timeline...</option>
                      <option value="Immediate">Immediate / Urgent</option>
                      <option value="1-3 Months">Within 1-3 Months</option>
                      <option value="3-6 Months">Within 3-6 Months</option>
                      <option value="Planning">Future Planning Stage</option>
                    </select>
                  </div>
                </div>

                {formData.service &&
                  (formData.service.includes("HR") ||
                    formData.service.includes("Training")) && (
                    <div className="form-group animate-reveal">
                      <label>Approx. Workforce Size</label>
                      <select
                        name="workforce"
                        value={formData.workforce}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Range...</option>
                        <option value="1-20">1 - 20 Employees</option>
                        <option value="21-100">21 - 100 Employees</option>
                        <option value="101-500">101 - 500 Employees</option>
                        <option value="500+">500+ Employees</option>
                      </select>
                    </div>
                  )}

                <div className="form-group">
                  <label>Message / Specific Challenges</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Briefly describe the key objectives you'd like to achieve with NovaMentis."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="footer-form-actions">
                  <div className="contact-method">
                    <label>Preferred Contact:</label>
                    <div className="method-chips">
                      {["Email", "Phone", "Video Call"].map((m) => (
                        <button
                          key={m}
                          type="button"
                          className={`chip ${formData.contactMethod === m ? "active" : ""}`}
                          onClick={() =>
                            setFormData((p) => ({ ...p, contactMethod: m }))
                          }
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`submit-btn ${submitted ? "submitted" : ""}`}
                    disabled={submitted}
                  >
                    {submitted ? "Inquiry Sent ✓" : "Initialize Advisory"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
