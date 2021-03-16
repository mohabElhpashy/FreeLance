// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/Login_SignUp/Login_sign";

class App extends Component {
  // componentDidMount() {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }
  render() {
    return (
      <div className="App">
        <LoginPage />
        {/* <Container>
          <Row style={{ textAlign: "center" }}>
            <Col
              style={{
                borderTop: "0.5px  solid gray",
                borderLeft: "0.5px solid gray",
                borderBottom: ".5px solid gray",
                borderRadius: "15px",
              }}
              lg={6}
              md={12}
            >
              <img
                data-aos="fade-up-right"
                alt="header"
                style={{
                  width: "100px",
                  position: "absolute",
                  marginTop: "15px",
                  transform: "rotate(45deg)",

                  marginLeft: "20px",
                }}
                src={Header}
              />

              <img
                alt="header"
                style={{
                  width: "200px",
                  position: "absolute",
                  marginTop: "15px",

                  marginLeft: "170px",
                }}
                src={Header2}
              />

              <img className="Group-6" alt="login" src={LoginIMg} />
              <p
                style={{
                  position: "absolute",
                  top: "0",
                  marginLeft: "146px",
                  marginTop: "96px",

                  fontFamily: "Roboto, Helvetica, sans-serif",
                  fontWeight: "bold",

                  color: "#474747",
                }}
              >
                for point of sale management system
              </p>
            </Col>

            <Col lg={6} md={12} xs={12}>
              <div data-aos="fade-up-left" className="Rectangle-3">
                <h1 style={{ marginLeft: "-321px", color: "white" }}>
                  Sign in
                </h1>
                <div className="Signin">
                  <div>
                    {" "}
                    <h1>
                      <img
                        alt="sora"
                        style={{ width: "100px", transform: "rotate(45deg)" }}
                        src={Header}
                      />
                    </h1>
                  </div>
                  <div className="Loginbox">
                    <Form>
                      <input type="email" name="" placeholder="User Name" />
                      <input type="password" name="" placeholder="Password" />
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default App;
