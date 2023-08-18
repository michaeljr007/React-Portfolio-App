import faqImg from "./img/faq.jpg";
import React from "react";

function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content px-xl-5">
              <h3 className="mm">
                Frequently Asked <strong>Questions</strong>
              </h3>
              <p>
                Welcome to my frequently asked questions section. Here, I
                address common queries about my web-development services.
              </p>
            </div>

            <div className="accordion accordion-flush px-xl-5" id="faqlist">
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-1"
                  >
                    <i className="bi bi-question-circle question-icon"></i>
                    What services do you offer?
                  </button>
                </h3>
                <div
                  id="faq-content-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    I offer a range of services including website design,
                    front-end and Back-end development, responsive design,
                    website maintenance, and website revamp.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-2"
                  >
                    <i className="bi bi-question-circle question-icon"></i>
                    How long does it take for my website to be completed?
                  </button>
                </h3>
                <div
                  id="faq-content-2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    The development time depends on a few factors like the
                    complexity of the project, features required, and the scope
                    of work. Typically, it can range from a few weeks to a few
                    months.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-3"
                  >
                    <i className="bi bi-question-circle question-icon"></i>
                    Can you optimize my website for search engines(SEO)?
                  </button>
                </h3>
                <div
                  id="faq-content-3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    Yes I can. As a web-developer, I can optimize your websites
                    for search engines by implementing the best SEO practices
                    such as keywords research, meta-tags optimization, site
                    speed optimization, and mobile responsiveness.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-4"
                  >
                    <i className="bi bi-question-circle question-icon"></i>
                    Do you provide ongoing support and maintenance after the
                    website is launched?
                  </button>
                </h3>
                <div
                  id="faq-content-4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    <i className="bi bi-question-circle question-icon"></i>
                    Yes, I offer ongoing support and maintenance services to
                    ensure your website remains secure, up-to-date, and
                    functional. This may include regular back-ups, security
                    updates, content updates, and troubleshooting.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-5"
                  >
                    <i className="bi bi-question-circle question-icon"></i>
                    Can you integrate third party tools or systems into my
                    website?
                  </button>
                </h3>
                <div
                  id="faq-content-5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    Absolutely! I can integrate various third-party tools such
                    as payment gateways, customer relationship management (CRM)
                    software, analytics platforms, social media integration and
                    more.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}
            </div>
          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
            <img alt="" src={faqImg} width="460" height="500"></img>
          </div>
        </div>
      </div>

      {/* <!-- Whatsapp Floating Icon --> */}
      <a
        href="https://wa.link/7ldsrq"
        className="whatsapp-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-whatsapp my-float"></i>
      </a>
    </section>
  );
}

export default Faq;
