import React from 'react';

import Home from '../container/home';
import About from '../container/about';
import Promotion from '../container/promotion';
import Game from '../container/game';
import Contact from '../container/contact';
import { Container } from 'react-bootstrap';

function body() {
    return (
        <div className="body-bg">
            <Container>
                <Home />
                <About />
                <Promotion />
                <Game />
                <Contact />
            </Container>
        </div>
    );
}

export default body;