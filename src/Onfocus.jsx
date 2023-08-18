import heroCarousel from "./img/hero-carousel/hero-carousel-1.svg";

function Onfocus() {
  return (
    <section id="onfocus" className="onfocus">
      <div className="container-fluid p-0" data-aos="fade-up">
        <div className="row g-0">
          <div className="col-lg-6 position-relative">
            <img src={heroCarousel} alt="" className="img-fluid img hideonm" />
          </div>
          <div className="col-lg-6">
            <div className="content d-flex flex-column justify-content-center h-100">
              <h3>Why You Need a Website Today</h3>
              <p>
                Having a website provides numerous benefits, including increased
                visibiity, global reach, 24/7 availability, enhanced
                credibility, and a platform for effective communication and
                customer engagement.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Cost-Effective
                  Marketing: Compared to traditional advertising methods, having
                  a website enables you showcase products and attract customers
                  without large marketing budgets.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Valuable Analytics:
                  Websites provide valuable insights through analytics, allowing
                  you to track visitor behaviour, measure conversions, and gain
                  data-driven insights to optimize your marketing strategies.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Global Reach: Having a
                  website means no potential customer is out of your reach. This
                  serves as a major game changer, in business marketing and
                  brand awareness
                </li>
              </ul>
              <a
                href="index.html#contact"
                className="read-more align-self-start scrollto"
              >
                <span>Contact Me</span>
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Onfocus;
