import * as React from "react";

import { me } from "../../info";

const Landing = () => {
  return (
    <main>
      <h1>{me.name}</h1>
      <h2>Full Stack Developer</h2>
      <p>{`Hello my name is ${me.name} I'm a ${me.about}`}</p>
      <h2>Skills</h2>
      <p>Javascript, NodeJS, React, Express, Jquery, CSS, HTML</p>
    </main>
  );
};

export default Landing;
