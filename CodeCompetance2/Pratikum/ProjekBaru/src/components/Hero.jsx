import React from "react";

function Hero() {
  return (
    <section className="conten-main-bg text-center">
      <h1 className="text-welcome">Welcome to eStartup</h1>
      <h4>Elegant Boostrap Template For Starup, Apps &amp; more...</h4>
      <img className="img-fluid mx-auto d-block" style={{ display: "inline-block", marginTop: 20 }} src="../../public/istockphoto-1370263028-612x612-removebg-preview.png" alt="img-home" />
      <button type="button" className="btn btn-success mt-4">
        Success
      </button>
      <div className="mt-5">
        <a href="#">
          <i className="me-3">App Store</i>
        </a>
        <a href="#">
          <i className="me-3">Google Play</i>
        </a>
        <a href="#">
          <i>Windows</i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
