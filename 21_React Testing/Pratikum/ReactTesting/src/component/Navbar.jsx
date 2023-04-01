import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <strong>Simple Header</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{ color: "#fdfeff" }} href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#0D6EFD" }} href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#0D6EFD" }} href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#0D6EFD" }} href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#0D6EFD" }} href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
