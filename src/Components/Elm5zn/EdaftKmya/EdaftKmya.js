import React from "react";
import ReactDOM from "react-dom";
import "./EdaftKmya.css";
import { BsXCircleFill } from "react-icons/bs";
import {Consumer} from '../../../hooks/Provider'
const modal = document.getElementById("Portal-root");
function EdaftKmya(props) {
  
  return ReactDOM.createPortal(
    <div id="modaal" className="modalll">
      <div className="modal_contenttt">
          <Consumer>
              {user=>{
    return <BsXCircleFill onClick={()=>user.exitt()}style={{ position: "absolute",color: "white",}}/>}}
          </Consumer>
                <h6 style={{marginLeft:'250px',color:'white'}}>إضافه للمنتجات</h6>
                <div className='Elkmyaa'> <span>-</span><span className='spaaan'>30</span> <span>+</span> الكميه </div>
                <div className='Elkmyaa2'>
                    <button style={{ color: "black",backgroundColor:'white',outline:'none',
                    borderRadius:'7px',
                    width: '75px'

                }}>إلغاء</button>
                    <button style={{ color: "white",backgroundColor:'#6006c5',outline:'none',
                    borderRadius:'7px',
                    width: '75px'

                }}>اضافه</button>

                </div>

      </div>
    </div>,
    modal
  );
}
export default EdaftKmya;
