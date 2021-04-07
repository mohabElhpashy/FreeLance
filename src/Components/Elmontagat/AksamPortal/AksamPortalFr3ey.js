import React from "react";
// import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
// import "./AksamPortal.css";
import { BsXCircleFill } from "react-icons/bs";
import { NavDropdown, Nav, Navbar, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "../../../images/edit.PNG";
import Del from "../../../images/delete.PNG";
import {Consumer}from '../../../hooks/Provider'

const modal = document.getElementById("Portal-root");
function AksamPortalFr3y({header}) {

//   if (props.show) document.getElementById("modaal").style.display = "grid";

   
                return ReactDOM.createPortal(
                    
                    <div id="modaal" className="modal">
                    <div className="modal_content">
                    
                             <Consumer>
                                 {
                                     user=>{
             return <BsXCircleFill onClick={()=>user.fun()}style={{position: "absolute",color: "white",}}/>
                                     }
                                 }
                                 
                                 </Consumer>  
                         
                        <div className="header">
                        <h2> {header}</h2>
                        </div>
                        <nav data-aos="fade-down" className="nannan" expand="lg">
                        <Form inline>
                            <img style={{ marginLeft: "30px" }} src={Del} alt="" />
                            <img style={{ marginLeft: "30px" }} src={Edit} alt="" />
                
                            <Button
                            style={{
                                marginLeft: "100px",
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
                                marginLeft: "140px",
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
                            <p>القسم الرئيسي</p>
                
                            <p>القسم</p>
                        </div>
                
                        <div className="maaaaaon">
                            <div className="table_content">
                            <p>_</p>
                
                            <p>هاينز</p>
                            </div>
                            <div className="table_content">
                            <p>_</p>
                
                            <p>هاينز</p>
                            </div>
                            <div className="table_content">
                            <p>_</p>
                
                            <p>هاينز</p>
                            </div>
                            <div className="table_content">
                            <p>_</p>
                
                            <p>هاينز</p>
                            </div>
                            <div className="table_content">
                            <p>_</p>
                
                            <p>هاينز</p>
                            </div>
                        </div>
                        </div>{" "}
                    </div>
                    </div>,
                    modal
           
    )
    

}
export default AksamPortalFr3y;