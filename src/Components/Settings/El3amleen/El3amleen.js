import React,{useEffect,useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
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
import Edit from "../../../images/edit.PNG";
import Del from "../../../images/delete.PNG";
import Edaft3amel from "../../../images/Edaft3amel.PNG";
import AddEmpl from '../../Settings/El3amleen/Edaft3aml/Edaft3aml'
import {Provider} from '../../../hooks/Provider'

const El3amleen=()=>{
    const[Edaft3aml,SetEdaft3aml]=useState(false)
    const Exit=()=>{
        SetEdaft3aml(false)
    }
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      });
    return  <div data-aos="fade-up" className="maindivv">
    <Navbar
      // 
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
        <img
        style={{ marginRight: "300px" }}
        onClick={()=>SetEdaft3aml(true)}
          src={Edaft3amel}
          alt=""
        />
      </Form>
    </Navbar>
    <div data-aos="fade-up" className="table">
        <div className="table_header">
         

          <p>الوظيفه</p>

          <p>رقم البطاقه</p>

          <p>رقم الهاتف</p>
          <p>الأسم </p>
        </div>
        <div  className="table_content">
          

          <p>admin</p>

          <p>20154800952180</p>

          <p> 01119548731</p>
          <p>مهاب الحبشي</p>
        </div>
      </div>
      {Edaft3aml?<Provider value={{Fun:Exit}}><AddEmpl></AddEmpl></Provider>:null}
  </div>
}
export default El3amleen;