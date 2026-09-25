import "./Hero.css";

import { MdOutlineArrowForwardIos } from "react-icons/md";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          Expert Transparent
          <br />
          <span>Technology </span>Solutions
        </h1>

        <p>
          Enabling organizations to achieve their vision
          through innovative technology solutions.
        </p>

    <button className="hero-get-started">
       <span>Get Started</span>
       <MdOutlineArrowForwardIos />
    </button>

      </div>
    </section>
  );
}

export default Hero;