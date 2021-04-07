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
function Elhalek() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="Homepage">
      
      <div  data-aos="fade-up" className="main_div">    
       
        <nav className="navbarrr" expand="lg">
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
          <p>الخصم </p>
          <p>سعر البيع</p>
          <p>سعرالشراء</p>
          <p>الوحده</p>

          <p>الكميه</p>

          <p>باركود</p>

          <p>القسم</p>
          <p>الصنف</p>
        </div>
        <div className="table_content">
        <p>25.00</p>

          <p>400.00</p>
          <p>350.50</p>
          <p>100</p>

          <p>1000</p>

          <p>0101010101</p>

          <p> اللحوم</p>
          <p>شيبسي لايز</p>
        </div>
      </div>
    </div>
  );
}

export default Elhalek;
