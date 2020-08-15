import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Navigation/Navigation";

import "./App.css";

function Home() {
  return <h1>Home</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Route path="/home" component={Home} />
        </header>
      </div>
    </Router>
  );
}

export default App;
