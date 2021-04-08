import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./EdaftM5zoon.css";
import { Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsXCircleFill } from "react-icons/bs";
import {Consumer} from '../../../hooks/Provider'

const modal = document.getElementById("Portal-root");
function EdaftM5zoon(props) {
  
  return ReactDOM.createPortal(
    <div id="modaal" className="modal_montag">
      <div className="modal_content_montag">
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
          <h2>إضافه مخزون</h2>
        </div>
        <div className='PersonalDta'>
            <div>
            <Form>
            <Form.Label>القسم</Form.Label>
        <Form.Control style={{textAlign:'left'}} title='الوظيفه' as="select">
          <option style={{textAlign:'left'}}></option>
          <option style={{textAlign:'left'}}>2</option>
          <option style={{textAlign:'left'}}>3</option>
          <option style={{textAlign:'left'}}>4</option>
          <option style={{textAlign:'left'}}>5</option>
        </Form.Control>
        <form style={{ marginTop: "10px" }}>
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
                  style={{ marginLeft: "20px", color: "white" }}
                >
                  {" "}
                  توليد باركود{" "}
                </label>
                <input type="checkbox" style={{}} />

              </form>

        <Form.Label>  سعر البيع</Form.Label>
        <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
        <Form.Label>   الوحده </Form.Label>
        <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
        
        
    </Form>
            </div>
            <div>
            <Form>
        <Form.Label>الصنف </Form.Label>
        <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
      

        <Form.Label> باركود</Form.Label>
        <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
        <Form.Label> سعر الشراء </Form.Label>
        <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
        <Form.Label>الكميه </Form.Label>
        <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
        <Form.Label>الخصم </Form.Label>
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
export default EdaftM5zoon;
