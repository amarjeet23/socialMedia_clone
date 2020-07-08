import React from "react";
import "./App.css";
// import Header from "./components/Header";
import Container from "@material-ui/core/Container";

import Routing from "./components/Routing"
import {BrowserRouter as Router} from "react-router-dom"

// import Graph1  from './components/Graph1';
const App = () => {
  return (
    <div className="App">
      <Router>
      <Container maxWidth="lg" style={{ marginTop: "150px" }}>
      <Routing/>
      </Container>
      
      </Router>
    </div>
  );
};
export default App;
