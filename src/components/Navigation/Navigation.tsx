import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { me } from "../../info";

const Navigation = () => {
  return (
    <ul className="navigation__list">
      <li>
        <Link to="/">{me.name}</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/experience">Experience</Link>
      </li>
    </ul>
  );
};

export default Navigation;
