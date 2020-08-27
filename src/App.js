import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";

import "./styles/style.css";

function App() {
  return (
    <Router>
      <div className="main">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
