import React from "react";
import "./Navigation.scss";
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className="navigation__list">
      <li><Link to="/">Brian Tran</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>
  );
};

export default Navigation;
