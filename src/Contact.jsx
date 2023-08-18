import React from "react";

function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Me</h2>
          <p className="p-1">
            I take great pride in delivering top-notch customer service. Fill
            the contact form below to get in touch with me and I will get back
            to you swiftly. Or click on the whatsapp icon at the bottom left
            corner of the screen to send me a direct message.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row gy-5 gx-lg-5">
          <div className="col-lg-4">
            <div className="info">
              <h3>Get in touch</h3>
              <p>
                Small deeds done are better than great deeds planned. Take
                action today and seize the moment!
                <span className="carpe">Carpe Diem.</span>
              </p>

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>Lagos, Nigeria.</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>raregoldmichael98@gmail.com</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+234 9037590527</p>
                </div>
              </div>
              {/* <!-- End Info Item --> */}
            </div>
          </div>

          {/* <!-- Contact Form --> */}
          <div className="col-lg-8">
            <form
              action="https://formsubmit.co/raregoldmichael98@gmail.com"
              method="POST"
              className="my-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control name-input"
                    id="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={formData.fullName}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control email-input"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control subject-input"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control message-input"
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
              </div>
              <div className="text-center">
                <button className="sendm" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* <!-- End Contact Form --> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
