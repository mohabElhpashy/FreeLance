import React, { useEffect, useState } from "react";
import "./Elomrdeen.css";
import {
  NavDropdown,
  Nav,
  Navbar,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPersonFill, BsFillHouseDoorFill } from "react-icons/bs";
import Edit from "../../images/edit.PNG";
import Del from "../../images/delete.PNG";
import Edaft from "../../images/Edaftmord.PNG";
import EdaftMord from "../Elmordeen.js/EdafrMord/Edaftmord";
import Homee from "../../hooks/HomeRouter";

import AOS from "aos";
import "aos/dist/aos.css";
import {Provider} from '../../hooks/Provider';
function Elmordeen() {
  const [state, Setstate] = useState(false);
  const [GoTo] = Homee();
  const Exit=()=>{
    Setstate(false)
  }
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
          الموردين{" "}
          <BsFillHouseDoorFill
            onClick={GoTo}
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

      <div className="main_divv">
        <Navbar
          // data-aos="fade-down"
          className="navbarrrr"
          style={{ direction: "rtl" }}
        >
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Form className="form" inline>
            <FormControl
              style={{ direction: "rtl" }}
              type="search"
              placeholder="بحث"
              className="mr-sm-5"
            />
            <Nav className="mr-auto">
              <NavDropdown
                style={{
                  direction: "rtl",
                  backgroundColor: "white",
                  marginRight: "30px",
                  borderRadius: "10px",
                }}
                title="القسم"
              >
                <NavDropdown.Item className="items">اللحوم </NavDropdown.Item>
                <NavDropdown.Item className="items">اسماك </NavDropdown.Item>
                <NavDropdown.Item className="items">دجاج </NavDropdown.Item>
                <NavDropdown.Item className="items">خضروات </NavDropdown.Item>
                <NavDropdown.Item className="items">فاكهه </NavDropdown.Item>
              </NavDropdown>
            </Nav>
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
            </Button>{" "}
            <img style={{ marginRight: "30px" }} src={Edit} alt="" />
            <img style={{ marginRight: "30px" }} src={Del} alt="" />
            {/* <img style={{ marginRight: "30px" }} src={T7wel} alt="" /> */}
            <img
              onClick={() => Setstate({ state: true })}
              style={{ marginRight: "130px" }}
              src={Edaft}
              alt=""
            />
          </Form>
        </Navbar>
      </div>
      <div data-aos="fade-up" className="table">
        <div className="table_header">
          <p>رقم الهاتف</p>

          <p>الشركه</p>

          <p>القسم</p>
          <p>الاسم</p>
        </div>
        <div className="table_content">
          <p>01119548731</p>

          <p>100</p>

          <p>1000 </p>
          <p>محمود خليل</p>
        </div>
      </div>
     {state?<Provider value={{Fun:Exit}}><EdaftMord/></Provider>:null}
    </div>
  );
}

export default Elmordeen;
