import React from "react";
// import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./Edaftward.css";
import { BsXCircleFill } from "react-icons/bs";
import {Consumer} from '../../../hooks/Provider'

const modal = document.getElementById("Portal-root");
function Edaftward(props) {
  
  return ReactDOM.createPortal(
    <div id="modaal" className="modal">
      <div className="modal_content">
        <Consumer>
          {user=>{
            return <BsXCircleFill
            onClick={()=>user.Fun()}
            style={{
              position: "absolute",
              color: "white",
            }}
          />
          }}
        </Consumer>
       
        <div className="header">
          <h2>إضافه وارد</h2>
        </div>
        <div className="portal_content">
          <div className="left__div">
            <div>
              <h6>القسم</h6>
              <select id="">
                <option> </option>
              </select>
            </div>
            <div>
              <form style={{ marginTop: "10px" }}>
                <input type="checkbox" style={{}} />
                <label
                  style={{ marginLeft: "5px", color: "white" }}
                  for="vehicle1"
                >
                  {" "}
                  توليد باركود ميزان
                </label>
                <input type="checkbox" style={{}} />
                <label
                  for="vehicle2"
                  style={{ marginLeft: "5px", color: "white" }}
                >
                  {" "}
                  توليد باركود{" "}
                </label>
              </form>
            </div>
            <div>
              <h6>سعر البيع</h6>
              <input type="text" />
            </div>{" "}
            <div>
              <h6>الوحده</h6>
              <input type="text" />
            </div>
          </div>
          <div className="right__div">
            <div>
              <h6>الصنف</h6>
              <input type="text" />
            </div>
            <div>
              <h6>باركود</h6>
              <input type="text" />
            </div>
            <div>
              <h6>سعر الشراء</h6>
              <input type="text" />
            </div>
            <div>
              <h6>الكميه</h6>
              <input type="text" />
            </div>
            <div>
              <h6>الخصم</h6>
              <input type="text" />
            </div>
          </div>
        </div>
        <div id="buttt">
          <button
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              outline: "none",
              border: "1px solid white",
            }}
          >
            إلغاء
          </button>
          <button
            style={{
              backgroundColor: "#401571",
              borderRadius: "5px",
              color: "white",
              outline: "none",
              border: "1px solid  #401571",
            }}
          >
            إضافه
          </button>
        </div>
      </div>
    </div>,
    modal
  );
}
export default Edaftward;
