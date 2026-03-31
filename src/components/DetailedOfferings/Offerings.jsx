import { Link } from "react-router-dom";
import "./Offerings.css";

const Offerings = () => (
  <section className="offerings-section">
    <div className="offerings-container">
      <div className="offerings-header">
        <h2>
          Service and Product{" "}
          <span style={{ color: "#d4a24c" }}>Offerings</span>
        </h2>
      </div>

      {/* HR Solutions Block */}
      <div className="offering-block">
        <div className="offering-info">
          <h3>Human Resource Solutions</h3>
          <p>
            We provide comprehensive HR solutions that help organizations
            attract, retain, and develop top talent. Our services include
            recruitment, employee training and development, performance
            management, HR policy framework design, audit and organizational
            development.
          </p>
          <Link to="/services/hr-consulting" className="offering-link">
            Explore HR Solutions →
          </Link>
        </div>
        <div className="offering-info">
          <h3>Hiring Assistance</h3>
          <p>
            Our Talent acquisition service is designed to identify and source
            qualified professionals as direct-hire for companies of all sizes.
            We creatively source candidates through networking, referrals, and
            academic associations.
          </p>
        </div>
      </div>

      {/* Start-up Consulting Block */}
      <div className="offering-block reverse">
        <div className="offering-info">
          <h3>Start-up Consulting</h3>
          <p>
            In the dynamic world of entrepreneurship, start-up consulting guides
            businesses through formative years. From ideation to execution, we
            provide invaluable expertise in business strategy, finance,
            marketing, and operations.
          </p>
        </div>
        <div className="offering-info">
          <h3>Management Consulting</h3>
          <p>
            Aimed at helping organizations solve complex business problems and
            achieve growth. Our services span strategy, operations, and
            organizational management across multiple expertise areas.
          </p>
        </div>
      </div>

      {/* Learning & Development Block */}
      <div className="offering-block">
        <div className="offering-info">
          <h3>Learning & Development</h3>
          <p>
            Programs that cater to various client needs and help organizations
            improve workforce skills and overall efficiency. We provide both
            offline and online training for professionals and students.
          </p>
          <a
            href="https://www.learnmyway.in"
            className="offering-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit LearnMyWay.in →
          </a>
        </div>
        <div className="offering-info">
          <div
            className="dash-feat"
            style={{ background: "#f0f4f8", border: "1px solid #d4a24c" }}
          >
            <strong>Specialized LMS</strong>
            <span>
              Our White-labeled LMS enables institutions to seamlessly host
              their own content or utilize our ready-to-go resources.
            </span>
          </div>
        </div>
      </div>

      {/* Data Analytics Block (Infoveave) */}
      <div className="offering-block reverse">
        <div className="offering-info">
          <h3>Data Analytics</h3>
          <p>
            Data analytics provides quantifiable evidence to drive decisions and
            uncover insights. By examining raw data, we help discover meaningful
            trends that can better influence business strategy.
          </p>
          <Link to="/data-analytics" className="offering-link">
            Discover Data Analytics →
          </Link>
        </div>
        <div className="offering-info">
          <h3>
            Smarter Dashboards with{" "}
            <span style={{ color: "#1a6fbf" }}>GenAI</span>
          </h3>
          <div className="dashboard-features">
            <div className="dash-feat">
              <strong>AI-Generated</strong>
              <span>
                Instantly create dashboards based on your data source with
                GenAI.
              </span>
            </div>
            <div className="dash-feat">
              <strong>50+ Templates</strong>
              <span>
                Professionally designed templates with 100+ visualization
                options.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Offerings;
