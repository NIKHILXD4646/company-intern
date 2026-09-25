import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "./CustomerSuccess.css";

function CustomerSuccess() {
  const logos = [
    { image: "/src/logo/google1.png", name: "Google" },
    { image: "/src/logo/microsoft1.png", name: "Microsoft" },
    { image: "/src/logo/amazon1.png", name: "Amazon" },
    { image: "/src/logo/wipro1.png", name: "Wipro" },
    { image: "/src/logo/TATA1.png", name: "TATA" },
    { image: "/src/logo/adobe1.png", name: "Adobe" },
    { image: "/src/logo/TCS1.png", name: "TCS" },
    { image: "/src/logo/ibm1.png", name: "IBM" },
    { image: "/src/logo/nvidia1.png", name: "NVIDIA" },
    { image: "/src/logo/samsung1.png", name: "SAMSUNG" },
    { image: "/src/logo/redbull1.png", name: "Red Bull" },
    { image: "/src/logo/software1.png", name: "Software" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= logos.length - visibleCount) {
        return 0;
      }
      return prev + 1;
    });
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return logos.length - visibleCount;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  },);

  const visibleLogos = logos.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className="customer-success">
      <div className="customer-success-container">

        <div className="customer-success1">
          <h2>
            Customer<strong> Success </strong>
          </h2>
        </div>

        {/* Testimonial */}
        <div className="customer-testimonial">

          <div className="customer-image">
            <img
              src="/src/assets/Person pic.jpg"
              alt="Customer"
            />
          </div>

          <div className="customer-about">

            <div className="customer-quote">
              “
            </div>

            <div className="customer-brand">
              <img
                src="/src/logo/TCS1.png"
                alt="TCS"
              />
            </div>

            <h3>Mr. John Smith.</h3>

            <span className="customer-position">
              Secretary Massachusetts office of technology and security
            </span>

            <p>
              For the past 13 years, XFact has worked with our office on
              numerous strategic and technology initiatives that have
              successfully delivered state-of-the-art solutions to our
              state's criminal justice community.
            </p>

          </div>
        </div>

        {/* Logo Carousel */}
        <div className="customer-logo-area">

  <div className="customer-logo-carousel">

    <button
      className="customer-arrow customer-arrow-left"
      onClick={previousSlide}
    >
      <IoIosArrowRoundBack />
    </button>

    <div className="customer-logo-track">

      {visibleLogos.map((logo) => (
        <div className="customer-logo-box" key={logo.name}>
          <img src={logo.image} alt={logo.name} />
          <span>{logo.name}</span>
        </div>
      ))}

    </div>

    <button
      className="customer-arrow customer-arrow-right"
      onClick={nextSlide}
    >
      <IoIosArrowRoundForward />
    </button>

  </div>

</div>

       {/* Slider Dots */}
<div className="customer-slider-dots">
  {logos.slice(0, logos.length - visibleCount + 1).map(
    (_, index) => (
      <span
        key={index}
        className={currentIndex === index ? "active" : ""}
        onClick={() => setCurrentIndex(index)}
      />
    )
  )}
</div>

      </div>
    </section>
  );
}

export default CustomerSuccess;