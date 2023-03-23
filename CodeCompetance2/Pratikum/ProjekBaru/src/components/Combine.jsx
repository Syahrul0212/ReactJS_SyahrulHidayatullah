import React from "react";
import { useState } from "react";
import ContactUs from "./ContactUs";

function Combine() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  console.log(username);
  console.log(email);
  console.log(subject);
  console.log(message);

  return (
    <section id="contact" className="background-color">
      <ContactUs />
      <div className="row justify-content-center">
        <div className="info col-lg-3 col-sm-6 ps-5">
          <div>
            <i className="bi bi-geo-alt" style={{ fontSize: "2rem", color: "cornflowerblue" }} />
            <p>
              A108 Adam Street <br /> New York, NY 535022{" "}
            </p>
          </div>
          <div>
            <i className="bi bi-envelope" style={{ fontSize: "2rem", color: "cornflowerblue" }} />
            <p>syhrl44@gmail.com</p>
          </div>
          <div>
            <i className="bi bi-telephone" style={{ fontSize: "2rem", color: "cornflowerblue" }} />
            <p>+62-821-1265-3125</p>
          </div>
          <div>
            <a href="https://twitter.com/Tetew15229469">
              <i className="bi bi-twitter" style={{ fontSize: "2rem" }}></i>
            </a>
            <a href="https://www.facebook.com/syahrul.hidayatullah.944">
              <i className="bi bi-facebook" style={{ fontSize: "2rem" }}></i>
            </a>
            <a href="https://www.instagram.com/syahrulhyt/">
              <i className="bi bi-instagram" style={{ fontSize: "2rem" }}></i>
            </a>
            <a href="https://www.linkedin.com/in/syahrul-hidayatullah-136b05223/">
              <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-5 pe-5">
          <form action="" id="form-submit">
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Username" name="username" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="form-group mt-3">
              <input className="form-control" type="email" placeholder="Your Email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <input className="form-control" type="text" placeholder="Subject" name="subject" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
            </div>
            <div className="d-flex justify-content-end mt-3">
              <input type="submit" className="btn btn-success" id="submit-button" defaultValue="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
    
  );
}

export default Combine;
