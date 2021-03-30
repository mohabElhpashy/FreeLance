import React from "react";
// import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./Edaftmord.css";
import { BsXCircleFill } from "react-icons/bs";
import Change from "../../../images/change.PNG";
import kashf7sab from "../../../images/kashf7sab.PNG";
import Egmally from "../../../images/egmallyfatora.PNG";
import Tba3a from "../../../images/Tba3a22.PNG";

const modal = document.getElementById("Portal-root");
function EdaftMord(props) {
  const exit = () => {
    document.getElementById("modaal").style.display = "none";
  };
  if (props.show) document.getElementById("modaal").style.display = "grid";
  return ReactDOM.createPortal(
    <div id="modaal" className="modal">
      <div className="modal_contentt">
        <BsXCircleFill
          onClick={exit}
          style={{
            position: "absolute",
            color: "white",
            left: 10,
            top: 5,
          }}
        />
        <h6
          style={{
            position: "absolute",
            color: "white",
            left: 390,
            top: 0,
          }}
        >
          ملحوظه
        </h6>
        <div className="leftdiv" placeholder="ملحوظه"></div>
        <div className="rightdiv">
          <div>
            {" "}
            {/* <h6>الاسم</h6> */}
            <input placeholder="الاسم" type="text" />
          </div>
          <div>
            {/* <h6>رقم الهاتف </h6> */}
            <input placeholder="رقم الهاتف" type="text" />
          </div>
          <div>
            <select title="القسم" className="sele">
              <option>القسم</option>
              <option>mdm</option>
              <option>mdm</option>
            </select>
          </div>
          <div>
            {/* <h6>اسم الشركه</h6> */}
            <input placeholder="اسم الشركه" type="text" />
          </div>
          <div>
            {/* <h6>اسم الشركه</h6> */}
            <input placeholder=" إجمالي المديونيه" type="text" />
          </div>
        </div>
        <div className="botttom">
          <img alt="" src={Egmally} />
          <img alt="" src={kashf7sab} />

          <img alt="" src={Change} />

          <img alt="" src={Tba3a} />
        </div>
      </div>
    </div>,
    modal
  );
}
export default EdaftMord;
