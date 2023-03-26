import React from "react";

function AboutUs() {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4">About Us</h1>
            <p className="lead text-muted mb-0">Never regret a day in your life; good days give happiness, bad days give experiences, worst day give lessons, and best day give memories</p>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
