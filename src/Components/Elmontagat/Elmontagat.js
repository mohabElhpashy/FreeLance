import React, { useEffect, useState } from "react";
import "./Elmontagat.css";
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
import Tba3a from "../../images/tba3a.PNG";
import {Provider}from './../../hooks/Provider'
import EdaftMontag from '../../images/edaftMontag.PNG'
import AksamPortalR2esy from './AksamPortal/AksamPortalR2esy'
import AksamPortalFr3y from './AksamPortal/AksamPortalFr3ey'
import EdaftMontagg from './AksamPortal/EdaftMontg'

import AOS from "aos";
import "aos/dist/aos.css";

function Elmontagat() {
  const [FAr3ea, SetFar3ea] = useState(false);
  const [R2esea, SetR2esea] = useState(false);
  const [Montag, SetMontag] = useState(false);

  const [GoTo] = Homee();
  const exit = () => {
    SetFar3ea(false)
  };
  const exit_Two = () => {
    SetR2esea(false)
  };
  const exit_three=()=>{
    SetMontag(false)
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
          الاقسام \ المنتجات{" "}
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

      <div className="main_divv_Elmontagat">
        <div className="head_div">
          <div data-aos="fade-right" className="rightt_divv">
            <div>
              <button
                onClick={() => SetR2esea(true)}
                style={{
                  backgroundColor: "#7f29e2",
                  color: "white",
                  outline: "none",
                  border: "1px solid white",
                  borderRadius: "5px",
                }}
              >
                عرض الاقسام
              </button>

              <h5>إضافه قسم رئيسي</h5>
            </div>
            <div className="sec">
              <h6 style={{ marginLeft: "300px" }}> اسم القسم</h6>
              <input type="text" />
              <h6 style={{ marginLeft: "300px" }}> الوصف </h6>

              <input type="text" />
            </div>
            <button
              style={{
                backgroundColor: "#7f29e2",
                color: "white",
                outline: "none",
                border: "1px solid white",
                borderRadius: "5px",
                width: "100px",
              }}
            >
              حفظ
            </button>
          </div>
          <div data-aos="fade-left" className="Leftt_divv">
            <div>
              <button
                style={{
                  backgroundColor: "#7f29e2",
                  color: "white",
                  outline: "none",
                  border: "1px solid white",
                  borderRadius: "5px",
                }}
                onClick={() => SetFar3ea(true)}
              >
                عرض الاقسام
              </button>

              <h5>إضافه قسم فرعي</h5>
            </div>
            <div className="sec">
              <h6 style={{ marginLeft: "300px" }}> اسم القسم</h6>
              <input type="text" />
              <h6 style={{ marginLeft: "300px" }}> القسم الرئيسي </h6>

              <input type="text" />
            </div>
            <button
              style={{
                backgroundColor: "#7f29e2",
                color: "white",
                outline: "none",
                border: "1px solid white",
                borderRadius: "5px",
                width: "100px",
              }}
            >
              حفظ
            </button>
          </div>
        </div>

        <div className="bot_div">
          <nav data-aos="fade-down" className="nannan" expand="lg">
            <img style={{ marginLeft: "56px" }} onClick={()=>SetMontag(true)} src={EdaftMontag} alt="" />
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
                style={{
                  width: "300px",
                  marginRight: "80px",
                  direction: "rtl",
                }}
                type="search"
                placeholder="بحث"
                className="mr-sm-2"
              ></FormControl>
            </Form>{" "}
          </nav>
          <div data-aos="fade-up" className="tablee">
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
      </div>
      {FAr3ea?
            <Provider value={{fun:exit}}> 

      
      <AksamPortalFr3y header="الاقسام الفرعيه" />
      </Provider> 
:null
      }

{R2esea?
            <Provider value={{fun:exit_Two}}> 

      
      <AksamPortalR2esy header="الاقسام الرئيسيه" />
      </Provider> 
:null
      }  

      {Montag?
        <Provider value={{fun:exit_three}}> 

      
        <EdaftMontagg header="الاقسام الرئيسيه" />
        </Provider> 
  :null}

    </div>
  );
}

export default Elmontagat;
