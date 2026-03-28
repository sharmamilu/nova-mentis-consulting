import "./Philosophy.css";

const Philosophy = () => (
  <section className="philosophy-section">
    <div className="philosophy-grid">
      {/* Landscape Column */}
      <div className="philosophy-col">
        <h2>
          Understanding Today's{" "}
          <span style={{ color: "#d4a24c" }}>Business Landscape</span>
        </h2>
        <div className="philosophy-text">
          In an era where businesses are evolving at an unprecedented pace, the
          landscape has become fiercely competitive, demanding, and volatile.
          Companies must anticipate future challenges and opportunities while
          maintaining a sharp focus on their current needs.
          <br />
          <br />
          NovaMentis Consulting excels in this dual approach, ensuring that our
          clients are well-prepared for the future without compromising on
          present requirements.
        </div>
      </div>

      {/* Our Philosophy Column */}
      <div className="philosophy-col">
        <h2>
          Our <span style={{ color: "#1a6fbf" }}>Philosophy</span>
        </h2>
        <div className="philosophy-text">
          At NovaMentis Consulting, we are deeply committed to guiding our
          clients not only to address today's needs but also to build
          sustainable and scalable organizations.
          <br />
          <br />
          Our objective is to provide that elusive competitive edge, empowering
          businesses to stay ahead of the pack. With a blend of innovative and
          practical solutions, we draw on years of experience working across
          various cultures, regions, and industry verticals.
        </div>
      </div>
    </div>

    {/* The Meaning of NovaMentis - Centered Row */}
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
      <div className="meaning-card">
        <h3>The Meaning Behind NovaMentis</h3>
        <p>
          Derived from Latin, <span className="latin">NovaMentis</span>{" "}
          translates to "Fresh Mind." True to its name, our consulting practice,
          service, and product offerings inspire fresh ideas and innovative
          thinking to tackle complex business challenges with ease and
          distinctiveness.
        </p>
      </div>
    </div>
  </section>
);

export default Philosophy;
