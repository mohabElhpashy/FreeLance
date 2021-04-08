import React, { useEffect, useState } from "react";
import "./Setting.css";

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
import Elhalek from '../Settings/Elhalek/Elhalek'
import AddCustomer from '../Settings/Customers/Customers'



function Settings() {
const[Employee,setEmployee]=useState(false)
const[Rush,setRush]=useState(false)
const[Customer,setcustomer]=useState(false)


  const [GoTo] = Homee();
  const one=()=>{
    setEmployee(!Employee)
    setRush(false)
    setcustomer(false)
  }
  const two=()=>{
    setRush(!Rush)
    setEmployee(false)
    setcustomer(false)

  }

 const three=()=>{
  setcustomer(!Customer)
  setEmployee(false)
  setRush(false)

    
  }
  //const four=()=>{
    
  // }
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
      <div data-aos="fade-down" className='allData'>
          <img src={El3amlen} onClick={one} alt=''/>
          <img src={Halek} onClick={two} alt=''/>
          <img src={Omlaa2} onClick={three} alt=''/>
          <img src={Mbe3at} alt=''/>

      </div>
    {Employee?<SetEl3amlen/>:null}
    {Rush?<Elhalek/>:null}
    {Customer?<AddCustomer/>:null}

    </div>
  );

}

export default Settings;
