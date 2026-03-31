import { useNavigate } from "react-router-dom";
import "./CtaSection.css";

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>
          Let's Build the <span className="accent">Future of Your Business</span>{" "}
          Together.
        </h2>
        <p>
          Discover how NovaMentis can transform your business into a digital and
          strategic leader. Get expert guidance tailored to your unique growth
          targets.
        </p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>
          GET A FREE CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
