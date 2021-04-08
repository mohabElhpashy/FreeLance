import React, { useEffect, useState } from "react";
// import "./Elwaedat.css";
import { Navbar, FormControl, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFillPersonFill,
  BsFillHouseDoorFill,
  BsArrowLeftShort,
  BsSearch,
} from "react-icons/bs";
import Tba3a from "../../../images/tba3a.PNG";
import Edit from "../../../images/edit.PNG";
import Del from "../../../images/delete.PNG";

import AOS from "aos";
import "aos/dist/aos.css";
function Elhaaalek() {
  const Back = () => {
    window.location = "/Tkarer";
  };
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
      <div className="main_div">
        <div className="header_">
          <div>
            <BsArrowLeftShort
              onClick={Back}
              size={30}
              style={{
                color: "white",
                backgroundColor: "#7f29e2",
                borderRadius: "50px",
              }}
            />
            <h3 style={{ color: " #757575", marginRight: "40px" }}>الهالك</h3>
          </div>
        </div>
        <nav data-aos="fade-down" className="navbarrr" expand="lg">
          <img style={{ marginLeft: "56px" }} src={Tba3a} alt="" />
          <Form inline>
            <img style={{ marginRight: "30px" }} src={Del} alt="" />
            <img style={{ marginRight: "30px" }} src={Edit} alt="" />

            <Button
              style={{
                marginRight: "30px",
                backgroundColor: "#401571",
                border: "1px solid #401571",
                color: "white",
                fontWeight: "bold",
              }}
              variant="outline-primary"
            >
              بحث
            </Button>
            <FormControl
              style={{ width: "300px", marginRight: "80px", direction: "rtl" }}
              type="search"
              placeholder="بحث"
              className="mr-sm-2"
            ></FormControl>
          </Form>{" "}
        </nav>
      </div>
      <div data-aos="fade-up" className="table">
        <div className="table_header">
          <p>المورد</p>
          <p>الوقت</p>
          <p>التاريخ</p>

          <p>الكميه</p>

          <p>السعر</p>

          <p>القسم</p>
          <p>الصنف</p>
        </div>
        <div className="table_content">
          <p>محمود خليل</p>
          <p>2:05</p>
          <p>1/2/2020</p>

          <p>5000</p>

          <p>125.00</p>

          <p>بضاعه داخله</p>
          <p>هاينز</p>
        </div>
      </div>
    </div>
  );
}

export default Elhaaalek;
