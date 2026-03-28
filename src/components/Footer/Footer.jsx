import { useNavigate } from "react-router-dom";
import { FOOTER_LINKS } from "../../data/servicesData";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const pathMap = {
    Home: "/",
    "About Us": "/about",
    Services: "/services",
    Infoveave: "/infoveave",
    "Contact Us": "/contact-us",
    "Business Consulting": "/services/business-consulting",
    "HR Consulting": "/services/hr-consulting",
    "Startup Consulting": "/services/startup-consulting",
    "Talent Acquisition": "/services/talent-acquisition",
    "Training Services": "/services/training-services",
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const path = pathMap[link] || "/";
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Logo Column */}
        <div className="footer-logo-col">
          <div className="footer-logo-row">
            <div className="footer-logo-circle">
              <img
                src="/logo.png"
                alt="NovaMentis Logo"
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />
            </div>
            <div className="footer-brand">
              <div className="footer-brand-name">
                NovaMentis IT Consulting India Pvt Ltd
              </div>
              <div className="footer-brand-tag">Excellence in Solutions</div>
            </div>
          </div>
        </div>

        {/* QLE Quick Links */}
        <div>
          <h4 className="footer-col-title accent">QLE</h4>
          <nav>
            {FOOTER_LINKS.QLE.map((l) => (
              <a
                key={l}
                href="#"
                className="footer-link"
                onClick={(e) => handleLinkClick(e, l)}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="footer-col-title">Services</h4>
          <nav>
            {FOOTER_LINKS.Services.map((l) => (
              <a
                key={l}
                href="#"
                className="footer-link"
                onClick={(e) => handleLinkClick(e, l)}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="footer-col-title">Contact Us</h4>
          <div className="footer-contact-info">
            <a href="mailto:info@novamentis.in" className="footer-link">
              ✉ info@novamentis.in
            </a>
            <a href="tel:+919886109881" className="footer-link">
              📞 +91 9886109881
            </a>
            <span className="footer-link footer-contact-item">
              📍 No. 224/47, 10th C Main, 1st Block, Jayanagar, Bangalore 560011
            </span>
            <a
              href="http://www.novamentis.in"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 www.novamentis.in
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 NovaMentis Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
