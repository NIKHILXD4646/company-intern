import "./Achievements.css";

import cioImage from "../assets/cio.png";
import incImage from "../assets/inc5000.png";

function Achievements() {
  return (
    <section className="achievements">

      <h2>
        Our <strong>Achievements</strong>
      </h2>

      <div className="achievement-cards">

        <div className="achievement-card">

          <div className="achievement-title">
            CIO review
          </div>

          <div className="achievement-content">

            <img src={cioImage} alt="CIO Review" />

            <p>
              xFact has been included in the 2015 CIO review's special
              edition "20 Most Promising Solution Providers" for the public
              sector.
            </p>

            <button>
              Learn more <span>›</span>
            </button>

          </div>

        </div>


        <div className="achievement-card">

          <div className="achievement-title">
            Inc. 5000
          </div>

          <div className="achievement-content">

            <img src={incImage} alt="Inc. 5000" />

            <p>
              xFact has been awarded to the Inc. 5,000 fastest-growing
              companies
            </p>

            <button>
              Learn more <span>›</span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;