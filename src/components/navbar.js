import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';

import Home from "./body";
import Sport from "../container/sport";
import Casino from "../container/casino";
import Slots from "../container/slots";
import Lottery from "../container/lottery";
import Gamecock from "../container/gamecock";

import Footer from './footer';



function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-light navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Container>
                    <div className="collapse navbar-collapse n-space" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link m-1" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-1" to="/sport">กีฬา</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-1" to="/casino">คาสิโน</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-1" to="/slots">สล็อต</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-1" to="/lottery">หวย</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-1" to="/gamecock">ไก่ชน</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-1" to="/promotion">โปรโมชั่น</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m-1" href="/login">LOGIN</Link>
                            </li>
                        </ul>
                        <span className="navbar-text" style={{ textAlign: "right" }}>
                            <Button className="n-boxshadow m-1" variant="outline-light" href="#">สมัครสมาชิก</Button>
                            <Button className="n-boxshadow m-1" variant="outline-light" href="#">เข้าสู่ระบบ</Button>
                        </span>
                    </div>
                </Container>
            </nav>
            <Route exact path="/">
                <Home />
                <Footer />
            </Route>
            <Route exact path="/promotion">
                < Home />
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