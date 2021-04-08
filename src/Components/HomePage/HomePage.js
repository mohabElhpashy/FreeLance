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
  const grd = () => {
    window.location = "Elgard";
  };
  const Elm5zn = () => {
    window.location = "Store";
  };
  const Elmordeen = () => {
    window.location = "Elmordeen";
  };
  const elmontagat = () => {
    window.location = "Elmontagat";
  };
  const NoktetElbe3=()=>{
    window.location='NoktetElbe3'
  }
  const Elwardat=()=>{
    window.location='Elwardat'
  }
  const Exit=()=>{
    window.location='/'

  }
  const Setting =()=>{
    window.location='Setting'

  }
  const Elmsrofat =()=>{
    window.location='Elmsaref'

  }
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
          <div
            data-aos="fade-right"
            className="one"
            onClick={Elmordeen}
          ></div>
          <div
            data-aos="fade-right"
            className="two"
            onClick={elmontagat}
          ></div>
          <div data-aos="fade-right"
            onClick={NoktetElbe3}
            className="three"></div>
          <div
            onClick={Elm5zn}
            data-aos="fade-right"
            className="four"
          ></div>
          <div data-aos="fade-right"
            onClick={Elwardat}
           className="five"></div>
        </div>

        <div className="xx">
          {" "}
          <div data-aos="fade-up-left" 
          onClick={Setting}
           className="six"></div>
          <div data-aos="fade-up-left"
          onClick={Elmsrofat}
          className="seven"></div>
          <div onClick={grd} data-aos="fade-up-left" className="eight"></div>
          <div data-aos="fade-up-left" onClick={tkarer} className="nine"></div>
          <div data-aos="fade-up-left" onClick={Exit} className="ten"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
