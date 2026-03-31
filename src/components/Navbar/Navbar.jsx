import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_LINKS, SERVICES } from "../../data/servicesData";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  let closeTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, []);

  const pathMap = {
    Home: "/",
    "About Us": "/about",
    Services: "/services",
    Clients: "/clients",
    "Business Consulting": "/services/business-consulting",
    "HR Consulting": "/services/hr-consulting",
    "Startup Consulting": "/services/startup-consulting",
    "Talent Acquisition": "/services/talent-acquisition",
    "Training Services": "/services/training-services",
    Infoveave: "/infoveave",
    "Contact Us": "/contact-us",
  };

  const handleNavClick = (link) => {
    const path = pathMap[link] || "/";
    navigate(path);
    setMobileMenuOpen(false);
    setServicesOpen(false);
    if (closeTimeout) clearTimeout(closeTimeout);
  };

  const handleServicesEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeout = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  // Group services for the mega menu
  const groupedServices = SERVICES.reduce((acc, service) => {
    if (!acc[service.tab]) acc[service.tab] = [];
    acc[service.tab].push(service);
    return acc;
  }, {});

  const isActive = (link) => {
    const path = pathMap[link];
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo Section */}
      <div
        className="nav-logo-container"
        onClick={() => handleNavClick("Home")}
        style={{ cursor: "pointer" }}
      >
        <div className="nav-logo-icon">
          <img
            src="/logo.png"
            alt="NovaMentis Logo"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
        <div>
          <div className="nav-brand-name">NovaMentis Consulting</div>
          <div className="nav-brand-tagline">
            People · Technology · Solutions
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="desktop-nav">
        {NAV_LINKS.map((l) => (
          <div
            key={l}
            className="nav-item-wrap"
            onMouseEnter={() => l === "Services" && handleServicesEnter()}
            onMouseLeave={() => l === "Services" && handleServicesLeave()}
          >
            <span
              className={`nav-link${isActive(l) ? " active" : ""}`}
              onClick={() => handleNavClick(l)}
            >
              {l} {l === "Services" && <span className="chevron">▾</span>}
            </span>
          </div>
        ))}
      </div>

      {/* Services Mega Dropdown */}
      {servicesOpen && (
        <div
          className="services-dropdown"
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <div className="dropdown-grid">
            {Object.keys(groupedServices).map((cat) => (
              <div key={cat} className="dropdown-col">
                <h4 className="dropdown-cat-title">{cat}</h4>
                <div className="dropdown-links">
                  {groupedServices[cat].map((s) => (
                    <div
                      key={s.title}
                      className="dropdown-service-item"
                      onClick={() => handleNavClick(s.title)}
                    >
                      <span className="dropdown-icon">{s.icon}</span>
                      <span className="dropdown-service-name">{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <span
              key={l}
              className={`nav-link${isActive(l) ? " active" : ""}`}
              onClick={() => handleNavClick(l)}
            >
              {l}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
