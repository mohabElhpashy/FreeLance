    import React, { useEffect, useState } from "react";
    import "./Noktetelbe3.css";
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
    import Mortg3 from "../../images/Mortg3.PNG";
    import Tba3a from "../../images/tba3a.PNG";
    import Homee from "../../hooks/HomeRouter";

    import AOS from "aos";
    import "aos/dist/aos.css";

    function NoktetElbe3() {
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
            نقطه البيع{" "}
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
            // data-aos="fade-down"
            className="navbarrrr"
            style={{ direction: "rtl" }}
            >
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
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
                <img style={{ marginRight: "30px" }} src={Tba3a} alt="" />
                <img
                style={{ marginRight: "130px" }}
                src={Mortg3}
                alt=""
                />
            </Form>
            </Navbar>
        </div>
        <div data-aos="fade-up" className="Noktet_Elbe3_div">
          <div className='div1'>
              <div className='Div_Header'>
                  <p>الاجمالي</p>
                  <p> الخصم</p>
                  <p>السعر</p>
                  <p>الكميه</p>
                  <p>الصنف</p>


              </div>
              
          </div>
          <div className='div2'>
              <div>مولتو جبنه</div>
              <div>شيبسي تايجر جبنه متبله</div>
              <div>شيبسي لايز طماطم</div>
              <div>نيسكافيه كابتشينو</div>
              <div>أيس كريم أوريو</div>
              <div>شيبسي لايز طماطم</div>
              <div>مارشيملو</div>
              <div>ليون جبنه</div>
              <div>زبادي المراعي</div>
              <div>شيبسي لايز طماطم</div>
              <div>تايجر شيبسي طماطم</div>
              <div>لبن جهينه 1ك</div>
              <div>شيبسي لايز طماطم</div>
              <div>شيبسي لايز طماطم</div>

          </div>
          <div className='div3'>
              <h5 style={{marginLeft:'420px'}}>بيانات الفاتوره</h5>
              <div>
                <div className='fatora1' >
                <span>0.00</span>الخصم

                    <span>12</span>رقم الفاتوره

                    </div>
                <div  className='fatora1'>
                <span>0.00</span>الاجمالي
                <span className="math">-</span> <span>12</span> <span className="math">+</span>الكميه
                </div>
                
                </div>
          </div>
        </div>
        </div>
    );
    }

    export default NoktetElbe3;
