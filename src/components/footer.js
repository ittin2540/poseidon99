import React from 'react';
import { Button } from 'react-bootstrap';

function footer() {
  return (
    <footer style={{ boxShadow: "0px 0px 5px" }}>

      <div className="f-bg">
        <h3 style={{ color: "#767676" }}>CASINO ONLINE AND SPORT BETTING</h3>
        <div className="row">
          <div className="col-lg-6">
            <img className="g-img" src="image/logo.png" alt="team meeting" />
          </div>
          <div className="col-lg-6 f-t-canter">
            <div className="row">
              <div className="col-8">
                <Button variant="info">ติดต่อเรา</Button>
              </div>
              <div className="col-4">
                <Button variant="light">สมัครสมาชิก</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2" style={{ color: "#FFFFFF" }}>
          <div className="col-3">
            <h2>CASINO</h2>
            <li>SA GAME</li>
            <li>SEXY GAMING</li>
            <li>SEXY BACCARAT</li>
            <li>GOLD DELUXE</li>
            <li>VENUS CASINO</li>
          </div>
          <div className="col-3">
            <h2>SPORT</h2>
            <li>UFABET</li>
            <li>HDP&OU</li>
            <li>SBO BET</li>
          </div>
          <div className="col-3">
            <h2>SLOT</h2>
            <li>JOKER SLOT</li>
            <li>SA Gaming Slot</li>
            <li>GD Casino Slot</li>
            <li>Game Hall Slot</li>
          </div>
          <div className="col-3">
            <h2>GAME</h2>
            <li>SA Gaming</li>
            <li>GD Casino</li>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default footer;