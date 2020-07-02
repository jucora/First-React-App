import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title/Title";
import POPOSList from "./POPOSList/POPOSList";
import Footer from "./Footer/Footer";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./About/About";
import POPOSDetails from "./POPOSDetails/POPOSDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList} />
        <Route path="/" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
