import "./Experience.css";

import bulbImage from "../assets/bulb1.png";
function Experience() {
  return (
    <section className="experience">

      <h2>Our<strong> Experience </strong></h2>

      <div className="experience-stats">

        <div>
          <h3>22+</h3>
          <p>
            Years<br />
            Implementing solutions
          </p>
        </div>

        <div>
          <h3>5M+</h3>
          <p>
            Million<br />
            Transactions per day
          </p>
        </div>

        <div>
          <h3>22+</h3>
          <p>Clients worldwide</p>
        </div>

      </div>



     <div className="experience-content">

  <div className="experience-image">
    <img src={bulbImage} alt="Experience" />
  </div>

<div className="experience-text">

  <p>
    <span className="check">✓</span>
    <span>Delivering solutions for local, state, and national<br />governments</span>
  </p>

  <p>
    <span className="check">✓</span>
    <span>Optimizing efficiency in the public sector</span>
  </p>

  <p>
    <span className="check">✓</span>
    <span>Focusing on business needs and considering technology a<br />enabler</span>
  </p>

  <p>
    <span className="check">✓</span>
    <span>Creating results for our customers from day one</span>
  </p>

</div>

</div>

      

    </section>
  );
}

export default Experience;
