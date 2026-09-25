import "./About.css";
import aboutBackground from "../assets/About-imgBG1.png";

function About() {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div className="about-hero-container">

          <div className="about-hero-content">

            <h1>
              We Empower
              <span>Innovators.</span>
            </h1>

            <p>
              Enabling local, state, and national governments to
              achieve their vision.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;