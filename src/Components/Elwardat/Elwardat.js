import React, { useEffect, useState } from "react";
import "./Elwardat.css";
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
import Edaftward from "./Edaftward/Edaftward";
import Edit from "../../images/edit.PNG";
import Del from "../../images/delete.PNG";
import Edaft from "../../images/edaftm5zoon.PNG";
import T7wel from "../../images/t7welmontagat.PNG";
import EdaftWard from '../../images/edaftward.PNG'
import {Provider} from '../../hooks/Provider'
import AOS from "aos";
import "aos/dist/aos.css";
import Homee from "../../hooks/HomeRouter";

function Elwaradat() {
  const [state, Setstate] = useState(false);
  const [edaftkmya,setEdaftkmya]=useState(false);
  const [GoTo] = Homee();
  const exit=()=>{
    Setstate(false)
  }
  const exit_two=()=>{
    setEdaftkmya(false)
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
          الواردات{" "}
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
          className="navbarrrr"
          style={{ direction: "rtl" }}
        >
        
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
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
           
            <img
              onClick={() => Setstate({ state: true })}
              style={{ marginRight: "300px" }}
              src={EdaftWard}
              alt=""
            />
          </Form>
        </Navbar>
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
      {state?<Provider value={{Fun:exit}}><Edaftward></Edaftward></Provider>:null}
      
    </div>
  );

}

export default Elwaradat;
