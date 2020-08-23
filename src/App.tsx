import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Navigation/Navigation";
import Landing from './components/Landing/Landing'
import Project from "./components/Project"

import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/projects" component={Project} />
        </header>
      </div>
    </Router>
  );
}

export default App;
