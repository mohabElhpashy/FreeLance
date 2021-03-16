import React, { useEffect } from "react";
import "./HomePage.css";
// import { Navbar, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPersonFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  const tkarer = () => {
    window.location = "Tkarer";
  };
  return (
    <div className="Homepage">
      <nav className="nav">
        {" "}
        <h4 style={{ marginLeft: "30px", color: "white" }}>
          <BsFillPersonFill
            size={30}
            style={{
              marginRight: "20px",
              color: "#7f29e2",
              backgroundColor: "white",
              border: "1px solid white",
              borderRadius: "50px",
            }}
          />
          mohab mohamed
          <h6>Admin</h6>
        </h4>
        <h4 style={{ marginRight: "30px", color: "white" }}>الصفحه الرئيسيه</h4>
      </nav>
      <div className="content">
        <div className="xx">
          <div data-aos="fade-down-right" className="one"></div>
          <div data-aos="fade-down-right" className="two"></div>
          <div data-aos="fade-down-right" className="three"></div>
          <div data-aos="fade-down-right" className="four"></div>
          <div data-aos="fade-down-right" className="five"></div>
        </div>

        <div className="xx">
          {" "}
          <div data-aos="fade-up-left" className="six"></div>
          <div data-aos="fade-up-left" className="seven"></div>
          <div data-aos="fade-up-left" className="eight"></div>
          <div data-aos="fade-up-left" onClick={tkarer} className="nine"></div>
          <div data-aos="fade-up-left" className="ten"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
