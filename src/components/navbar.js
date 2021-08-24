import React from "react";
import { Button, Container, Navbar, Nav, Form } from "react-bootstrap";
import { Link, Route } from "react-router-dom";

import Home from "./body";
import Sport from "../container/sport";
import Casino from "../container/casino";
import Slots from "../container/slots";
import Lottery from "../container/lottery";
import Gamecock from "../container/gamecock";

import Footer from "./footer";

function navbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Poseidon99</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sport">กีฬา</Nav.Link>
              <Nav.Link href="/casino">คาสิโน</Nav.Link>
              <Nav.Link href="/slots">สล็อต</Nav.Link>
              <Nav.Link href="/lottery">หวย</Nav.Link>
              <Nav.Link href="/gamecock">ไก่ชน</Nav.Link>
              <Nav.Link href="/promotion">โปรโมชั่น</Nav.Link>
              <Nav.Link href="/login">LOGIN</Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ justifyContent: "center" }}>
              {" "}
              <Button
                className="n-boxshadow m-1"
                variant="outline-success"
                href="#"
              >
                สมัครสมาชิก
              </Button>
              <Button
                className="n-boxshadow m-1"
                variant="outline-success"
                href="#"
              >
                เข้าสู่ระบบ
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        <Home />
        <Footer />
      </Route>
      <Route exact path="/promotion">
        <Home />
        <Footer />
      </Route>
      <Route exact path="/sport">
        <Sport />
        <Footer />
      </Route>
      <Route exact path="/casino">
        <Casino />
        <Footer />
      </Route>
      <Route exact path="/slots">
        <Slots />
        <Footer />
      </Route>
      <Route exact path="/lottery">
        <Lottery />
        <Footer />
      </Route>
      <Route exact path="/gamecock">
        <Gamecock />
        <Footer />
      </Route>
    </div>
  );
}

export default navbar;
