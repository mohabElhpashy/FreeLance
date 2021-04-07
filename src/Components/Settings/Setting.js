import React, { useEffect, useState } from "react";
import "./Setting.css";
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
import AOS from "aos";
import "aos/dist/aos.css";
import Homee from "../../hooks/HomeRouter";
import El3amlen from '../../images/Set3amleen.PNG'
import Halek from '../../images/Sethalek.PNG'
import Omlaa2 from '../../images/Set3mall2.PNG'
import Mbe3at from '../../images/Setmbe3at.PNG'
import SetEl3amlen from '../Settings/El3amleen/El3amleen'



function Settings() {
const[Employee,setEmployee]=useState(false)
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
          الاعدادات{" "}
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
      <div className='allData'>
          <img src={El3amlen} onClick={()=>setEmployee(!Employee)} alt=''/>
          <img src={Halek} alt=''/>
          <img src={Omlaa2} alt=''/>
          <img src={Mbe3at} alt=''/>

      </div>
    {Employee?<SetEl3amlen/>:null}
    </div>
  );

}

export default Settings;
