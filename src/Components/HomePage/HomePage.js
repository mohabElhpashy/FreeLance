import React from "react";
import "./HomePage.css";
// import { Navbar, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPersonFill } from "react-icons/bs";

function Home() {
  return (
    <div className="Homepage">
      <nav className="nav">
        {" "}
        <h4 style={{ marginLeft: "30px", color: "white" }}>
          <BsFillPersonFill />
          mohab mohamed
        </h4>
        <h4 style={{ marginRight: "30px", color: "white" }}>الصفحه الرئيسيه</h4>
      </nav>
      <div className="content">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
        <br />
        <div className="six"></div>
        <div className="seven"></div>
        <div className="eight"></div>
        <div className="nine"></div>
        <div className="ten"></div>
      </div>
    </div>
  );
}

export default Home;
