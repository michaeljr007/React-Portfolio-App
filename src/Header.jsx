function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
      <div className="container">
        <a
          href="index.html"
          className="logo d-flex align-items-center scrollto me-auto me-lg-0"
        >
          <h1>
            Michael Isih<span>.</span>
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <i className="navbar-toggler-icon"></i>
        </button>

        <div className="collapse navbar-collapse mx-5" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active mx-1">
              <a href="index.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="index.html#about" className="nav-link scrollto">
                About
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="index.html#services" className="nav-link scrollto">
                Services
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="index.html#pricing" className="nav-link scrollto">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="index.html#portfolio" className="nav-link scrollto">
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-1">
              <a href="index.html#contact" className="nav-link scrollto">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
