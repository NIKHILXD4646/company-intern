import "./ROIS.css";

import informationIcon from "../assets/information.png";
import iterationIcon from "../assets/iteration.png";
import investmentIcon from "../assets/investment.png";

function ROICards() {
  return (
    <section className="roi-section">

      <h2>The Three <strong>ROIS</strong></h2>

      <div className="roi-cards">

        <div className="roi-card">

          <div className="roi-icon">
            <img src={informationIcon} alt="Information" />
          </div>

          <h3>Return on information</h3>

          <p>
            Make previously unavailable information accessible and usable to
            aid in decision making and accountability.
          </p>

        </div>


        <div className="roi-card">

          <div className="roi-icon">
            <img src={iterationIcon} alt="Iteration" />
          </div>

          <h3>Return on iteration</h3>

          <p>
            Help organizations make incremental progress towards ultimate
            goals. By taking small iterative steps, our clients are able to
            better understand and address ever changing business and policy
            needs.
          </p>

        </div>


        <div className="roi-card">

          <div className="roi-icon">
            <img src={investmentIcon} alt="Investment" />
          </div>

          <h3>Return on investment</h3>

          <p>
            Streamline processes, schedule resources and tasks, and automate
            manual processes to help save time and money.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ROICards;