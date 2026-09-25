import "./Introduction.css";
import introductionBackground from "../assets/introduction-img.png";



function Introduction() {
  return (
    <section className="introduction"
    style={{ background: `url(${introductionBackground})`}}
    >

      <div className="introduction-content">

        <p>
          The name of XFact is derived from our goal to help
          organizations extend data or facts into useful
          information. By extending the facts, we provide
          different types of ROI to our clients such as return
          on investment, return on information, and return on
          iteration.
        </p>

      </div>

    </section>
  );
}

export default Introduction;