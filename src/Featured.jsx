function Featured() {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container text-center">
        <div className="row gy-4">
          <h5 className="text-center">Need To Grow?</h5>
          <h2 className="my-4 text-center">
            Here Are A Few Ways I Can Help Your Business Grow
            <i className="bi bi-arrow-down"></i>
          </h2>
          <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-activity icon"></i>
              </div>
              <button className="stretched-link">Build A Website</button>
              <p className="text-left px-4">
                Create a new website or re-design an existing one
              </p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles icon"></i>
              </div>
              <button className="stretched-link">Fix Your Website</button>
              <p className="text-left px-3">
                Speed up, optimize, or troubleshoot your website
              </p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week icon"></i>
              </div>
              <button className="stretched-link">Give A Brand Name</button>
              <p className="text-left px-4">
                Create a unique identity that sets your business ahead of the
                competition
              </p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="zoom-out"
            data-aos-delay="600"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast icon"></i>
              </div>
              <button className="stretched-link">Other Aspects</button>
              <p className="text-left px-4">
                Graphic Design, Copywriting, Digital Marketing, & More
              </p>
            </div>
          </div>
          {/* <!-- End Service Item --> */}
        </div>
      </div>
    </section>
  );
}

export default Featured;
