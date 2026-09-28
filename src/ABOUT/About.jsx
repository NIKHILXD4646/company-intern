import React from "react";
import "./About.css";

const leaders = [
  {
    name: "Cameron Williamson",
    role: "Chief Executive Officer",
    image: "/src/assets/leader1.png",
  },
  {
    name: "Leslie Alexander",
    role: "Chief Strategy Officer",
    image: "/src/assets/leader2.png",
  },
  {
    name: "Brooklyn Simmons",
    role: "Chief Revenue Officer",
    image: "/src/assets/leader3.png",
  },
  {
    name: "Marvin McKinney",
    role: "Chief Product Officer",
    image: "/src/assets/leader4.png",
  },
  {
    name: "Darlene Robertson",
    role: "Chief Finance Officer",
    image: "/src/assets/leader5.png",
  },
  {
    name: "Savannah Nguyen",
    role: "Chief Financial Officer",
    image: "/src/assets/leader6.png",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* 1. Hero */}
      <section className="about-hero">
        <div className="about-hero-container">

          <div className="about-hero-text">
            <h1>
              We Empower
              <span>Innovators.</span>
            </h1>

            <p>
              Enabling local, state, and national governments to
              achieve their mission.
            </p>
          </div>

          <div className="about-hero-image">
            <img
              src="/src/assets/about-hero.png"
              alt="We Empower Innovators"
            />
          </div>

        </div>
      </section>

      {/* 2. About xFact */}
      <section className="about-company">
        <div className="about-company-container">

          <p>
            xFact is a global information technology and services firm
            specializing in creating value for public sector organizations.
          </p>

          <p>
            Established in 2000 by former lead practitioners in a
            "Big Four" consulting firm, xFact was founded on the principle
            that extraordinary professionals and a more focused consulting
            firm could provide value-based services to public sector agencies.
          </p>

          <p>
            From initial assessment through design and development,
            implementation, and maintenance support, xFact strives to
            incorporate an organization's values in each solution.
            We recognize the importance of business goals and therefore
            consider technology as an enabler.
          </p>

          <p>
            xFact has successfully completed multi-million-dollar projects
            ranging from creating business plans that address rapid and
            immediate needs, to long-term evaluation of national information
            systems.
          </p>

        </div>
      </section>

      {/* 3. Our Mission */}
      <section className="mission-section">
        <div className="mission-container">

          <div className="mission-image">
            <img
              src="/src/assets/rocket.png"
              alt="Our Mission"
            />
          </div>

          <div className="mission-content">
            <h2>Our Mission</h2>

            <p>
              Our mission is to <strong>Extend the Facts</strong>.
              <br />
              xFact's mission is guided by the idea that:
            </p>

            <ul>
              <li>
                Client business and policy needs should always drive the work.
              </li>

              <li>
                Technology is only used as a tool to help achieve a
                client's objectives.
              </li>

              <li>
                Solutions should be transparent, flexible, and able to
                evolve over time.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. What's in a Name */}
      <section className="name-section">
        <div className="name-container">

          <div className="name-content">
            <h2>What's in a Name?</h2>

            <p>
              The name "xFact" is derived from our goal to help
              organizations extend data and information.
            </p>

            <p>
              By extending the facts, we provide different types of
              information to our clients such as return on investment,
              return on information, and return on interaction.
            </p>

            <ul>
              <li>
                <strong>Return on Information:</strong> Our systems help
                make previously unavailable information accessible and usable.
              </li>

              <li>
                <strong>Return on Interaction:</strong> Our systems help
                organizations make internal processes more efficient.
              </li>

              <li>
                <strong>Return on Investment:</strong> Our systems help
                organizations streamline processes, reduce resources and risk,
                and automate manual processes.
              </li>
            </ul>
          </div>

          <div className="name-image">
            <img
              src="/src/assets/whats-name.png"
              alt="What's in a Name"
            />
          </div>

        </div>
      </section>

      {/* 5. Leadership */}
      <section className="leadership-section">
        <div className="leadership-container">

          <h2>Our Leadership</h2>

          <div className="leaders-grid">
            {leaders.map((leader, index) => (
              <div className="leader-card" key={index}>

                <div className="leader-image">
                  <img
                    src={leader.image}
                    alt={leader.name}
                  />
                </div>

                <h3>{leader.name}</h3>
                <p>{leader.role}</p>

                <div className="leader-social">
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </div>

              </div>
            ))}
          </div>

          <button className="load-more-btn">
            Load More
          </button>

        </div>
      </section>

    </main>
  );
}

export default About;