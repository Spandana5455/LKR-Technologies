import React from 'react';
import './Faqs.css';

const AccordionItem = ({ id, title, content }) => (
  <div className="accordion-item border-0">
    <h2 className="accordion-header" id={`heading${id}`}>
      <button
        className="accordion-button collapsed no-border custom-accordion-btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${id}`}
        aria-expanded="false"
        aria-controls={`collapse${id}`}
      >
        {title}
      </button>
    </h2>
    <div
      id={`collapse${id}`}
      className="accordion-collapse collapse"
      aria-labelledby={`heading${id}`}
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">{content}</div>
    </div>
  </div>
);

const Faqs = () => {
  const faqData = [
    { id: "One", title: "What services does your company offer?", content: (
        <>
        <p>We provide end-to-end IT solutions, including custom software development, web and mobile app development, UI/UX design, enterprise applications, 
          and cloud integration services.
        </p>
        </>
    )
    },
    { id: "Two", title: "What industries do you serve?", content: (
        <>
        <p>Our expertise spans across various industries such as healthcare, finance, education, logistics, retail, and manufacturing.</p>
  
        </>
    )
    },
    { id: "Three", title: "Do you build custom software or offer product-based solutions?", content: (
        <>
        <p>We offer both. Depending on your needs, we can either build a solution from scratch or customize one of our existing platforms.</p>
        </>
    )
    },
  ];
  return (
    <>
    <div className="faq-section">
      <div className="container">
        <div className="row align-items-center">
        <h1 className="faq-heading">FAQs</h1>
        <p className="faq-text">Find answers to the most commonly asked questions about our services, processes, and support.</p>
      </div>
      </div>
    </div>
    <div className="container my-5">
            <div className="accordion" id="faqAccordion">
                {faqData.map((item) => (
                    <AccordionItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Faqs;

