import "./FAQ.css";
import faqBackground from "../assets/faq-img.png";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
  question: "Where can I watch?",
  answer:
    "You can learn more about our services, solutions, and technology through our website or by contacting our team.",
},
{
  question: "What services do you provide?",
  answer:
    "We provide web development, software solutions, technology consulting, and digital services for modern organizations.",
},
{
  question: "How can your solutions help my business?",
  answer:
    "Our solutions are designed to improve efficiency, simplify business processes, and support your organization's technology needs.",
},
{
  question: "Do you provide customized solutions?",
  answer:
    "Yes. We work closely with our customers to understand their requirements and create solutions that match their specific business needs.",
},
{
  question: "How can I contact your team?",
  answer:
    "You can contact our team through the Contact Us section of our website. We will be happy to discuss your requirements.",
},
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="facts-faq-section"
      style={{ backgroundImage: `url(${faqBackground})` }}
    >
      <div className="facts-faq-container">

        {/* LEFT - EXTEND THE FACTS */}
        <div className="facts-content">

          <h2>
            Extend <strong> the </strong>
            <span> Facts</span>
          </h2>

          <button className="facts-contact-btn">
            Contact Us <span>›</span>
          </button>

          <div className="facts-contact-info">

            <div className="facts-contact-row">
              <span className="facts-icon">☎</span>
              <span>Sales: 978-686-3180</span>
            </div>

            <div className="facts-contact-row">
              <span className="facts-icon">✉</span>
              <span>Media: sales@xfact.com</span>
            </div>

          </div>

        </div>

        {/* RIGHT - FAQ */}
        <div className="faq-content">

          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">

            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  openIndex === index ? "active" : ""
                }`}
                key={index}
              >

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>

                  <span className="faq-symbol">
                    {openIndex === index ? (
                      <IoRemove />
                    ) : (
                      <IoAdd />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="faq-answer">
                    {faq.answer}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;