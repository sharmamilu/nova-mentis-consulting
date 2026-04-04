import { useState } from "react";
import emailjs from "@emailjs/browser";
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

  const [status, setStatus] = useState("idle"); // idle, loading, success, error

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Credentials maintained in .env file
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("Missing EmailJS environment variables");
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          company: formData.company,
          website: formData.website,
          service: formData.service,
          timeline: formData.timeline,
          workforce: formData.workforce || "N/A",
          contactMethod: formData.contactMethod,
          message: formData.message,
          to_email: "kiran@novamentis.in"
        },
        PUBLIC_KEY
      );

      setStatus("success");
      
      // Reset after success
      setTimeout(() => {
        setStatus("idle");
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
      }, 5000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
              <a 
                href="https://www.google.com/maps/place/NovaMentis+IT+Consulting+India+Pvt+Ltd/@12.9428271,77.584305,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15bf98001e1b:0xe42aec94231bb883!8m2!3d12.9428271!4d77.5868799!16s%2Fg%2F11b6_1p7r8?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-redirect-link"
              >
                <div className="map-glass-overlay">
                  <h4>Experience Excellence</h4>
                  <p>Located in the heart of Jayanagar, Bangalore</p>
                  <span className="map-hint">Click to open in Google Maps ↗</span>
                </div>
              </a>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.453188415339!2d77.58430497454616!3d12.942827115509544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bf98001e1b%3A0xe42aec94231bb883!2sNovaMentis%20IT%20Consulting%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1775307051632!5m2!1sen!2sin"
                className="google-map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
                    className={`submit-btn ${status}`}
                    disabled={status !== "idle"}
                  >
                    {status === "loading" && "Processing..."}
                    {status === "success" && "Inquiry Sent ✓"}
                    {status === "error" && "Error, Try Again"}
                    {status === "idle" && "Initialize Advisory"}
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
