import React, { useEffect } from "react";
import "./Eltkarer.css";
// import { Navbar, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPersonFill, BsFillHouseDoorFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
function Eltkarer() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

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
        <h4 style={{ marginRight: "30px", color: "white" }}>
          {" "}
          التقارير{" "}
          <BsFillHouseDoorFill
            style={{
              marginRight: "20px",
              //   color: "#7f29e2",
              backgroundColor: "#7f29e2",
              border: "1px solid #7f29e2",
              //   borderRadius: "50px",
            }}
            size={45}
          />
        </h4>
      </nav>
      <div className="cont">
        <h3>تعريف التقارير</h3>
        <div className="inner_cont">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>
    </div>
  );
}

export default Eltkarer;
