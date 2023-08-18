import React from "react";

function Footer() {
  const [emailData, setEmailData] = React.useState("");

  function handleChange(event) {
    const { value } = event.target;
    setEmailData(value);
  }

  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>
                  Michael <span className="primary-c">Isih</span>
                </h3>
                <p>
                  Lagos, Nigeria
                  <br />
                  <br />
                  <strong>Phone:</strong> +234 9037590527
                  <br />
                  <strong>Email:</strong> raregoldmichael98@gmail.com
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a className="scrollto" href="index.html#about">
                    About Me
                  </a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a className="scrollto" href="index.html#services">
                    Services
                  </a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="index.html">Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="index.html">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>My Newsletter</h4>
              <p>
                Subcribe To my Newsletter for exclusive insights, expert advice,
                mouth-watering offers and latest updates.
              </p>
              <form
                action="https://formsubmit.co/raregoldmichael98@gmail.com"
                method="post"
              >
                <input
                  type="email"
                  name="email"
                  value={emailData}
                  onChange={handleChange}
                  required
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div className="copyright">
              &copy;{" "}
              <strong>
                <span>2023</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="index.html">Michael Isih</a>
            </div>
          </div>

          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a
              href="https://www.twitter.com/MichaelisihDev"
              className="twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.facebook.com/isih.obinna" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="www.instagram.com/michaeljrofficial" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="www.linkedin.com/in/michael-isih-b86967242"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
