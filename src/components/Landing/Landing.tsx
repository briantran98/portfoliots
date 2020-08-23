import * as React from "react";

import { me } from "../../info";

const Landing = () => {
  return (
    <div>
      <h1>{me.name}</h1>
      <p>{`Hello my name is ${me.name} I'm a ${me.about}`}</p>
    </div>
  );
};

export default Landing;
