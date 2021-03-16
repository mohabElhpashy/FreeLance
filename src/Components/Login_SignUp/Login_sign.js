import "./Login_sign.css";
import { Component } from "react";

import { Form } from "react-bootstrap";
import LoginIMg from "../../images/Group 6.png";
import Header from "../../images/un.png";
import Header2 from "../../images/Group 19.png";
import { BsFillUnlockFill, BsFillPersonFill } from "react-icons/bs";

// import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
class SignIN extends Component {
  validate = () => {
    window.location = "http://localhost:3000/Home";
  };

  render() {
    return (
      <div className="MAin">
        <div className="Sign_Log">
          <div className="left_div">
            <div id="container_for_img">
              <img
                alt="sora1"
                src={Header}
                style={{
                  width: "100px",
                  marginTop: "15px",
                  transform: "rotate(45deg)",
                  //   marginLeft: "2px",
                }}
              />
              <img
                alt="sora1"
                src={Header2}
                style={{
                  width: "200px",
                  marginLeft: "20px",
                }}
              />
            </div>

            <img alt="sora1" src={LoginIMg} style={{ width: "100%" }} />
          </div>
          <div className="right_div">
            <h1 style={{ color: "white" }}>Sign In</h1>

            <div className="Signin">
              <h1>
                <img
                  alt="sora"
                  style={{ width: "100px", transform: "rotate(45deg)" }}
                  src={Header}
                />
              </h1>
              <div className="Loginbox">
                <Form>
                  <BsFillPersonFill color="gray" size={17} />{" "}
                  <input type="email" name="" placeholder="User Name" />
                  <br />
                  <BsFillUnlockFill color="gray" size={17} />{" "}
                  <input type="password" name="" placeholder={"Password"} />
                  <br />
                  <input onClick={this.validate} type="submit" value="Login" />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIN;
