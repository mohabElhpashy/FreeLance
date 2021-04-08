  import React from "react";
  // import React, { useEffect } from "react";
  import { Button,Form } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import ReactDOM from "react-dom";
  import "./Edaftmord.css";
  import { BsXCircleFill } from "react-icons/bs";
  import Change from "../../../images/change.PNG";
  import kashf7sab from "../../../images/kashf7sab.PNG";
  import Egmally from "../../../images/egmallyfatora.PNG";
  import Tba3a from "../../../images/Tba3a22.PNG";
  import {Consumer} from '../../../hooks/Provider'

  const modal = document.getElementById("Portal-root");
  function EdaftMord(props) {
  
    return ReactDOM.createPortal(
      <div id="modaal" className="modal">
        <div className="modal_contentt">
          <Consumer>
            {user=>{
              return  <BsXCircleFill
              onClick={user.Fun}
              style={{
                position: "absolute",
                color: "white",
                left: 10,
                top: 5,
              }}
            />
            }}
          </Consumer>
        
          
          
          <div className="PersonalDAta">
          <div ><Form.Label>ملحوظه </Form.Label>
      <Form.Control style={{textAlign:'right'}} as="textarea" rows={10} /></div>
            <div>
            <Form>
      <Form.Label>الأسم </Form.Label>
      <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
    
      <Form.Label>  رقم الهاتف </Form.Label>
      <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
      <Form.Label>القسم</Form.Label>
      <Form.Control style={{direction:'ltr'}} title='الوظيفه' as="select">
        <option style={{textAlign:'left'}}></option>
        <option style={{textAlign:'left'}}>2</option>
        <option style={{textAlign:'left'}}>3</option>
        <option style={{textAlign:'left'}}>4</option>
        <option style={{textAlign:'left'}}>5</option>
      </Form.Control>
      <Form.Label> أسم الشركه </Form.Label>
      <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
      <Form.Label>إجمالي المديونيه </Form.Label>
      <Form.Control style={{width:'300px',textAlign:'right'}} type="text" />
    
  </Form>
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
