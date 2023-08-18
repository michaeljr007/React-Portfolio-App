import ngo from "./img/portfolio/ngo.jpg";
import ogwugo from "./img/portfolio/ogwugo.v4.png";
import ubuy from "./img/portfolio/U-buy.v1.png";
import bixeans from "./img/portfolio/bixeans.png";
import owambe from "./img/portfolio/owambe-buka.png";
import ugochi from "./img/portfolio/Ugochi.png";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio mt-3" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p className="p-1">
            Welcome to my portfolio! Here you'll find a collection of my
            web-development projects, showcasing my skills in creating visualing
            appealing and functional websites that deliver a great user
            experience.
          </p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          {/* <!-- End Portfolio Filters --> */}

          <div className="row g-3 portfolio-container">
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item mb-4 filter-app">
              <img src={ngo} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Unique Love Foundation</h4>
                <a
                  href="https://uniquelove.foundation"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item mb-4 filter-product">
              <img src={ogwugo} className="img-fluid neee" alt="" />
              <div className="portfolio-info">
                <h4>Ogwugo</h4>
                <a
                  href="https://ogwugo.com/"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item mb-4 filter-branding">
              <img src={ubuy} className="img-fluid neee" alt="" />
              <div className="portfolio-info">
                <h4>U-Buy</h4>
                <a
                  href="https://www.u-buy.com.ng/"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item mb-4 filter-app">
              <img src={bixeans} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Bixeans</h4>
                <a
                  href="https://bixeans.com"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item mb-4 omo3 filter-branding">
              <img src={owambe} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Owambe Buka</h4>
                <a
                  href="https://wa.link/7ldsrq"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item omo mb-4 filter-app">
              <img src={ugochi} className="img-fluid neee" alt="" />
              <div className="portfolio-info">
                <h4>Ugochi Nwokeji</h4>
                <a
                  href="https://ugochinwokeji.com"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
