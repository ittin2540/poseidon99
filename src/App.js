import React from "react";

import './App.css';
import Navbar from './components/navbar';
// import Body from './components/body';

// import Sport from './container/sport';
// import Casino from './container/casino';
// import Slots from './container/slots';
// import Lottery from './container/lottery';
// import Gamecock from './container/gamecock';

// import Footer from './components/footer';

// import './router';

function App() {
  return (
    <div>
      <header
        className="header-area wow slideInDown animated background-header"
        style={{ padding: " 0 0 " }}
      >
        <Navbar />
      </header>
      {/* <div
        className="body"
      > */}
      {/* <Body /> */}

      {/* <Sport /> */}
      {/* <Casino /> */}
      {/* <Slots /> */}
      {/* <Lottery /> */}
      {/* <Gamecock /> */}


      {/* </div> */}
      {/* <footer style={{ boxShadow: "0px 0px 5px" }}>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
