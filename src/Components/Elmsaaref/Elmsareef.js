    import React, { useEffect, useState } from "react";
    import "./Elmsareef.css";
    import {  FormControl, Form, Button } from "react-bootstrap";
    import "bootstrap/dist/css/bootstrap.min.css";
    import {
    BsFillPersonFill,
    BsFillHouseDoorFill,

    } from "react-icons/bs";
    import Tba3a from "../../images/AddCost.PNG";
    import Edit from "../../images/edit.PNG";
    import Del from "../../images/delete.PNG";
import {Provider} from '../../hooks/Provider'
import MsrFat from '../Elmsaaref/ADDmsaref/Addmsaref'
import Homee from "../../hooks/HomeRouter";
    import AOS from "aos";
    import "aos/dist/aos.css";
    function Elmsaref() {
        const [addMsareef,setaddMsareef] =useState(false)
        const [GoTo] = Homee();

        const Exit= ()=>{
            setaddMsareef(false)
        }
    
    useEffect(() => {
        AOS.init({
        duration: 2000,
        });
    });

    return (
        <div className="Homepage">
                <div className='addmsrofat'>
                    <div className='subtest'>
                    <button style={{marginLeft:'15px',width:'105px',
                    backgroundColor:'#7f29e2',
                    borderRadius:'10px',
                    marginTop:'5px',
                    color:'white'}}>
                        عرض الأقسام
                    </button>
                    <h5 style={{marginRight:'15px'}}>إضافه قسم مصروفات</h5>
                    </div>
                    <Form style={{textAlign:'right'}}>
                    <Form.Label style={{marginRight:'10px',fontWeight:'bold'}}>أسم القسم</Form.Label>
    <Form.Control style={{direction:'rtl'}} type="email" />
                    </Form>
                    <button style={{marginLeft:'15px',width:'105px',
                    backgroundColor:'#7f29e2',
                    borderRadius:'10px',
                    marginTop:'50px',
                    marginRight:'950px',
                    color:'white'}}>حفظ</button>
                </div>

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
            المصروفات{" "}
            <BsFillHouseDoorFill
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
        <div className="main_div_">
            
            <nav data-aos="fade-down" className="navavav" expand="lg">
            <img style={{ marginLeft: "56px" }} 
            onClick={()=>setaddMsareef(true)}
            src={Tba3a} alt="" />
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
        {addMsareef?<Provider value={{Fun:Exit}}><MsrFat/></Provider>:null}
        </div>
    );
    }

    export default Elmsaref;
