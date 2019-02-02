import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./assets/css/app.css";
import Navbar from "./components/navbar";
import Main from "./main";
import Footer from "./components/footer";

const { app } = window.require("electron").remote;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="homeGridRow">
            <Col xs={12} sm={12} className="navbar">
              <Navbar />
            </Col>
            <Col xs={12} sm={12} className="homeGrid">
              <Main />
            </Col>
          </Row>
        </Grid>

        <Footer />
      </div>
    );
  }
}

export default App;
