import "./Navbar.css";

import xFactLogo from "../assets/xFact_logo.png";
function Navbar() {
  return (
    <header>

      

      {/* MAIN NAVBAR */}
      <nav>
        <div className="logo">
          <img src={xFactLogo} alt="xFact" />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#methodology">Methodology</a>
          <a href="#services">IT Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#careers">Careers</a>

          <a href="#contact" className="contact-btn">
            Contact us <span>›</span>
          </a>
        </div>
      </nav>

    </header>
  );
}

export default Navbar;