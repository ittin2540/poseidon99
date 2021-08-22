import React from 'react';
import { Container } from "react-bootstrap";

function contact() {
    return (
        <div style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
            <img className="g-img" src="image/c-line.png" alt="team meeting" />
            <Container>
                <div className="row p-text pt-2" style={{ color: "white" }}>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/WMCasino.png" alt="team meeting" />
                        {/* <h4>WM Casino</h4> */}
                    </div>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/PrettyGaming.png" alt="team meeting" />
                        {/* <h4>Pretty Gaming</h4> */}
                    </div>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/AsiaGaming.png" alt="team meeting" />
                        {/* <h4>Asia Gaming</h4> */}
                    </div>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/SAGaming.png" alt="team meeting" />
                        {/* <h4>SA Gaming</h4> */}
                    </div>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/DreamGaming.png" alt="team meeting" />
                        {/* <h4>DreamGaming</h4> */}
                    </div>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/ALLBET.png" alt="team meeting" />
                        {/* <h4>ALLBET</h4> */}
                    </div>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/SexyGaming.png" alt="team meeting" />
                        {/* <h4>Sexy Gaming</h4> */}
                    </div>
                    <div className="col-3 p-2">
                        <img className="c-img" src="image/EvolutionGaming.png" alt="team meeting" />
                        {/* <h4>Evolution Gaming</h4> */}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default contact;