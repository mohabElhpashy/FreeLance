import React, { useEffect, useState } from "react";
import "./Elgard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPersonFill, BsFillHouseDoorFill } from "react-icons/bs";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Homee from "../../hooks/HomeRouter";
import AOS from "aos";
import "aos/dist/aos.css";
function Elgard() {
  const [selectDate, setselectDate] = useState(new Date());
  const [GoTo] = Homee();


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
          className='homee'
            onClick={GoTo}
            style={{
              marginRight: "20px",
              backgroundColor: "#7f29e2",
              border: "1px solid #7f29e2",
            }}
            size={45}
          />
        </h4>
      </nav>
      <div className="cont">
        <h3 style={{ color: "#616161" }}>الجرد</h3>

        <div data-aos="flip-left" className="inner_cont">
          <div className="firstt"></div>
          <div className="secondd"></div>
          <div className="thirdd"></div>
        </div>
        <div className="date_picker">
          <div>
            <h6>إلي</h6>
            <Datepicker
              selected={selectDate}
              onChange={(date) => setselectDate(date)}
              dateFormat="dd/MM/yy"
            />
          </div>
          <div>
            <h6>من</h6>

            <Datepicker
              selected={selectDate}
              onChange={(date) => setselectDate(date)}
              dateFormat="dd/MM/yy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elgard;
