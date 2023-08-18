import services1 from "./img/services-1.jpg";
import services2 from "./img/services-2.jpg";
import services3 from "./img/services-3.jpg";
import services4 from "./img/services-4.jpg";
import services5 from "./img/services-5.jpg";
import services6 from "./img/services-6.jpg";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>My Services</h2>
          <p className="text-center p-1">
            If you absolutely have to build something, Why not build it with the
            best?
          </p>
        </div>

        <div className="row gy-5">
          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="service-item">
              <div className="img">
                <img src={services1} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <a href="https://wa.link/7ldsrq" className="stretched-link">
                  <h3>Website Development</h3>
                </a>
                <p>
                  Creating visually appealling and functional websites tailored
                  to clients' specific needss, using modern design principles
                  and development techniques
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="service-item">
              <div className="img">
                <img src={services2} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="https://wa.link/7ldsrq" className="stretched-link">
                  <h3>Responsive Web Design</h3>
                </a>
                <p>
                  Designing websites that automatically adapt and optimize for
                  various devices, ensuring a seamless user experience across
                  the board
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="service-item">
              <div className="img">
                <img src={services3} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <a href="https://wa.link/7ldsrq" className="stretched-link">
                  <h3>E-commerce Development</h3>
                </a>
                <p>
                  Building online stores with secure payment gateways, inventory
                  management, product catalogs and user-friendly interfaces for
                  online sales and transactions
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="service-item">
              <div className="img">
                <img src={services4} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles"></i>
                </div>
                <a href="https://wa.link/7ldsrq" className="stretched-link">
                  <h3>CMS Integration</h3>
                </a>
                <p>
                  Implementing user-friendly CMS platforms like Wordpress and
                  Joomla, allowing clients to easily update and manage their
                  products
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="service-item">
              <div className="img">
                <img src={services5} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <a href="https://wa.link/7ldsrq" className="stretched-link">
                  <h3>Search Engine Optimization</h3>
                </a>
                <p>
                  Optimizing websites to improve their visibility and rankings
                  on search engine result pages, increasing online visibility
                  and oraganic traffic
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <div className="service-item">
              <div className="img">
                <img src={services6} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>
                <a href="https://wa.link/7ldsrq" className="stretched-link">
                  <h3>Custom Web-App Development</h3>
                </a>
                <p>
                  Developing a tailor-made web application to meet specific
                  business requirements, streamlining processes, and enhancing
                  productivity
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}
        </div>
      </div>
    </section>
  );
}

export default Services;
