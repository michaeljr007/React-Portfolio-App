import wordpress from "./img/clients/WordPress.png";
import react from "./img/clients/react.png";
import nodejs from "./img/clients/nodejs.png";
import bootstrap from "./img/clients/bootstrap.png";
import javaScript from "./img/clients/JavaScript.png";
import tailwind from "./img/clients/tailwindcss_logo_icon_170649.png";
import michael from "./img/Michael.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="container mb-4" data-aos="fade-up">
        <div className="section-header mb-5">
          <h2>About Me</h2>
          <p className="p-1">
            I am a skilled front-end Developer proficient in Bootstrap,
            JavaScript, React and Node.js. With a passion for creating visually
            appealing and responsive web applications, I combine technical
            expertise with creativity to deliver engaging user experiences{" "}
            <i className="bi bi-box-seam"></i>
          </p>
        </div>
        <div id="logos-home-page" className="mb-5">
          <h3 className="text-center mt-3 mb-5">
            Some Amazing Technologies I use
          </h3>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={wordpress}
                  alt=""
                  width="120"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13010"
                  src={react}
                  alt=""
                  width="180"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13009"
                  src={nodejs}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-12996"
                  src={bootstrap}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={tailwind}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={javaScript}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={wordpress}
                  alt=""
                  width="120"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13010"
                  src={react}
                  alt=""
                  width="180"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13009"
                  src={nodejs}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-12996"
                  src={bootstrap}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={tailwind}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={javaScript}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={wordpress}
                  alt=""
                  width="120"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13010"
                  src={react}
                  alt=""
                  width="180"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13009"
                  src={nodejs}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-12996"
                  src={bootstrap}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={tailwind}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
              <div className="slide">
                <img
                  className="alignnone size-medium wp-image-13011"
                  src={javaScript}
                  alt=""
                  width="160"
                  height="110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cta" className="cta mt-5">
        <div className="container" data-aos="zoom-out">
          <div className="row g-5">
            <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>The face behind the skill</h3>
              <p>
                Whether you want it built with pure code with Technologies like
                JavaScript, Bootstrap, React, Node.js and Jquery. Or you want it
                built with a web building tool like Wordpress or Winx. From a
                simple single page Portfolio website, to a complex
                Front-end/Back-end web-application, I'm the man for the job.
              </p>
              <a
                className="cta-btn align-self-start scrollto"
                href="index.html#contact"
              >
                Contact Me <i className="bi bi-telephone"></i>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div className="img">
                <img src={michael} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
