import React from "react";
import { Button ,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
// import "./Edaft3aml.css";
import { BsXCircleFill } from "react-icons/bs";
import {Consumer} from '../../../hooks/Provider'
import ProfilePic from '../../../images/ProfilePic.PNG'

const modal = document.getElementById("Portal-root");
function AddMsaref(props) {
  
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
        <h3 style={{textAlign:'center',color:'white',fontWeight:'bold'}}>إضافه مصرف</h3>

    <div className='PersonalDta'>

        <div>
        <Form>
        <Form.Label>   المستخدم</Form.Label>
    <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
 
   <Form.Group style={{textAlign:'left'}} controlId="exampleForm.ControlSelect1">
    <Form.Label>القسم</Form.Label>
    <Form.Control style={{textAlign:'left'}}  as="select">
      <option style={{textAlign:'left'}}></option>
      <option style={{textAlign:'left'}}>2</option>
      <option style={{textAlign:'left'}}>3</option>
    </Form.Control>
  </Form.Group>

  
</Form>
        </div>
        <div>
        <Form>
    <Form.Label>الصنف </Form.Label>
    <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
   

    <Form.Label>السعر </Form.Label>
    <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
    <Form.Label> الكميه </Form.Label>
    <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
    
  
</Form>
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
export default AddMsaref;
