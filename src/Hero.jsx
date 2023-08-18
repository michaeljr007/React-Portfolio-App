import heroCarousel3 from "./img/hero-carousel/hero-carousel-3.svg";

function Hero() {
  return (
    <section
      id="hero-animated"
      className="hero-animated d-flex align-items-center"
    >
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-left position-relative"
        data-aos="zoom-out"
      >
        <img src={heroCarousel3} className="img-fluid animated" alt="" />
        <h2>
          Welcome to <span>My Portfolio</span>
        </h2>
        <p>
          Crafting immersive web experiences and empowering businesses through
          stunning front-end solutions, and having fun while doing it.
          <i className="bi bi-emoji-smile"></i>
        </p>
        <div className="d-flex">
          <a href="#about" className="btn-get-started scrollto">
            Get Started <i className="bi bi-rocket mx-2"></i>
          </a>
          <a
            href="www.github.com/michaeljr007"
            className="glightbox btn-github d-flex align-items-center"
          >
            <span>Github Repo</span> <i className="bi bi-wrench"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
