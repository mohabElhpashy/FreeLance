import React from "react";
import { Button ,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./AddCust.css";
import { BsXCircleFill } from "react-icons/bs";
import {Consumer} from '../../../../hooks/Provider'
import ProfilePic from '../../../../images/ProfilePic.PNG'

const modal = document.getElementById("Portal-root");
function AddCustomers(props) {
  
  return ReactDOM.createPortal(
    <div id="modaal" className="modal">
      <div className="modal_contentt_t">
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
    <div className='PersonalDtaa'>
 <div>
            <img className='sora1' src={ProfilePic} alt=''/>
        <Form>
    <Form.Label>الأسم </Form.Label>
    <Form.Control style={{width:'450px'}} type="text" />
   

    <Form.Label>رقم الهاتف</Form.Label>
    <Form.Control style={{width:'450px'}} type="text" />

    <Form.Label>العنوان </Form.Label>
    <Form.Control style={{width:'450px'}} type="text" />
  
</Form>

</div>
        
        </div>   
        <div className='butto' >
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
export default AddCustomers;
