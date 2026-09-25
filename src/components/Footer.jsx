import "./Footer.css";

import footerBg from "../assets/footer-img.png";
import xFactLogo from "../assets/xFact_logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaRegCopyright } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import facebookImg from "../assets/facebook.png";
import xImg from "../assets/X.png";
import youtubeImg from "../assets/youtube.png";
import linkedinImg from "../assets/Linkedin.png";
import pinterestImg from "../assets/pinterest.png";
function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Footer */}
      <div className="footer-main">

        {/* Company */}
        <div className="footer-company">
          <img
            src={xFactLogo}
            alt="XFact"
            className="footer-logo-image"/>
          <p>120 Walker Street, Suite 234 North</p>
          <p>Andover, MA 01810, USA</p>
        </div>

        {/* Navigation */}
        <div className="footer-navigation">

          <div className="footer-nav-column">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#methodology">Methodology</a>
          </div>

          <div className="footer-nav-column">
            <a href="#services">IT Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#careers">Careers</a>
          </div>

        </div>

        {/* Region + Social */}
        <div className="footer-region">

          <button className="region-btn">
            <GrLanguage className="region-icon" />
            <span>Choose Your Region</span>
          </button>

          <div className="social-icons">

  <a href="#" aria-label="Facebook">
    <img src={facebookImg} alt="Facebook" />
  </a>

  <a href="#" aria-label="X">
    <img src={xImg} alt="X" />
  </a>

  <a href="#" aria-label="YouTube">
    <img src={youtubeImg} alt="YouTube" />
  </a>

  <a href="#" aria-label="LinkedIn">
    <img src={linkedinImg} alt="LinkedIn" />
  </a>

  <a href="#" aria-label="Pinterest">
    <img src={pinterestImg} alt="Pinterest" />
  </a>

</div>

        </div>


        <button className="chat-button" aria-label="Contact XFact">
  <SiGmail />
</button>

      </div>

      {/* Bottom Footer */}
<div className="footer-bottom">

  <div className="footer-copy">
    <FaRegCopyright />
    <span>2026 XFact</span>
  </div>

  <div className="footer-contact">

    <span>
      < LuMail className="contact-icon" />
      Email: sales@xfact.com
    </span>

   <span>
  <IoMdCall className="contact-icon" />
  Mobile: 878-688-3190
</span>

  </div>

</div>



</footer>
  );
}

export default Footer;