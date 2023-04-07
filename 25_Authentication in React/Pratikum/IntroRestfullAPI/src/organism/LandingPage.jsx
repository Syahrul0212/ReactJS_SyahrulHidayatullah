import React from "react";
import "./Style.css";
import { Navbar } from "../component";

function LandingPage() {
  return (
    <div>
      <>
        {/* ======= Header ======= */}
       <Navbar/>

        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
                <h1>Better Solutions For Your Business</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" className="btn-get-started scrollto">
                    Get Started
                  </a>
                  <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video">
                    <i className="bi bi-play-circle" />
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
                <img src="./hero-img.png" className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-newsletter">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <h4>Join Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action="" method="post">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Arsha</h3>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022
                    <br />
                    United States <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Services</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Web Development</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Product Management</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Social Networks</h4>
                  <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-bottom clearfix">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Arsha</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </>
    </div>
  );
}

export default LandingPage;
