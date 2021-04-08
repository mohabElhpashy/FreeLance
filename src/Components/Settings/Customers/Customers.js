import React, { useEffect, useState } from "react";
import { Navbar, FormControl, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   BsFillPersonFill,
//   BsFillHouseDoorFill,
//   BsArrowLeftShort,
//   BsSearch,
// } from "react-icons/bs";
import Tba3a from "../../../images/AddCustomer.PNG";
import Edit from "../../../images/edit.PNG";
import Del from "../../../images/delete.PNG";
import {Provider} from '../../../hooks/Provider'
import AddCustomerrs from '../Customers/Addcust/AddCust';
import AOS from "aos";
import "aos/dist/aos.css";
function Customers() {
    const [addcus,setaddcust]=useState(false)
    const Exit =()=>{
        setaddcust(false)
    }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="Homepage">
      
      <div  data-aos="fade-up" className="main_div">    
       
        <nav className="navbarrr" expand="lg">
          <img style={{ marginLeft: "56px" }} onClick={()=>setaddcust(true)} src={Tba3a} alt="" />
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
         

          <p>السن</p>

          <p>العنوان</p>

          <p>رقم الهاتف</p>
          <p>الأسم </p>
        </div>
        <div className="table_content">
       

          <p>23</p>

          <p> السبكي الدقي6</p>

          <p> 01119548731</p>
          <p> مهاب الحبشي</p>
        </div>
      </div>
      {addcus?<Provider value={{Fun:Exit}}><AddCustomerrs/></Provider>:null}
    </div>
  );
}

export default Customers;
