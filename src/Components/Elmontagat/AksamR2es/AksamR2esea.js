import React from "react";
// import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
// import "./AksamFar3ea.css";
import { BsXCircleFill } from "react-icons/bs";
import { FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "../../../images/edit.PNG";
import Del from "../../../images/delete.PNG";
const modal = document.getElementById("Portal-root");
function AksamR2esea(props) {
  const exit = () => {
    document.getElementById("modaal").style.display = "none";
  };
  if (props.showTwo) document.getElementById("modaal").style.display = "grid";
  return ReactDOM.createPortal(
    <div id="modaal" className="modal">
      <div className="modal_content">
        <BsXCircleFill
          onClick={exit}
          style={{
            position: "absolute",
            color: "white",
          }}
        />
        <div className="header">
          <h2> {props.text} </h2>
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
          <div className="table_header"></div>

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
  );
}
export default AksamR2esea;
